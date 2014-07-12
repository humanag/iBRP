using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using iBRP.Models.Data;
using Newtonsoft.Json;
using System.Web.Script.Serialization;
using Newtonsoft.Json.Linq;
using iBRP.Models;

namespace iBRP.Controllers
{
    public class NhanVienController : Controller
    {
        public ContentResult List(int start = 0, int limit = 5, int page = 1, string filter = "")
        {
            Dictionary<string, string> condition = new Dictionary<string,string>();
            if (filter != "")
            {
                condition = Helper.ConvertFilterStringToArray(filter);
            }
            if (start < 0)
            {
                start = 0;
            }


            NhanVien mNhanVien = new NhanVien();
            var list = mNhanVien.GetList(start, limit, condition).ToArray();
            var total = mNhanVien.GetTotal(condition);
            string json = "{\"totalCount\":" + total +", \"actionitems\":" + JsonConvert.SerializeObject(list) + "}";
            return Content(json);
        }

        [HttpPost]
        public ContentResult Update(string maNhanVien, string tenNhanVien, string nhom, string biDanh = "", string diaChi = "", string dienThoai = "",
            string fax = "", string email = "", string ghiChu = "")
        {
            string json = "{success:false}";
            if (tenNhanVien != "")
            {
                NhanVien mNhanVien = new NhanVien();
                int rst = mNhanVien.AddNhanVien(maNhanVien, tenNhanVien, nhom, biDanh,diaChi, dienThoai, fax, email, ghiChu);
                if (rst > 0) {
                    json = "{success:true}";
                }
            }
            return Content(json);
        }

        [HttpPost]
        public ContentResult Delete(string maNhanVien)
        {
            string json = "{success:false}";
            NhanVien mNhanVien = new NhanVien();
            int rst = mNhanVien.DeleteNhanVien(maNhanVien);
            if (rst > 0)
            {
                json = "{success:true}";
            }
            return Content(json);
        }

        public ContentResult GetNhomOptions()
        {
            NhanVien model = new NhanVien();
            ArrayList all = new ArrayList();
            all = model.GetNhomOptions();

            string json = "{\"actionitems\":" + JsonConvert.SerializeObject(all) + "}";
            return Content(json);
        }
    }
}
