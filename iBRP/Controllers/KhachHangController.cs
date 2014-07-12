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
    public class KhachHangController : Controller
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


            KhachHang mKhachHang = new KhachHang();
            var list = mKhachHang.GetList(start, limit, condition).ToArray();
            var total = mKhachHang.GetTotal(condition);
            string json = "{\"totalCount\":" + total +", \"actionitems\":" + JsonConvert.SerializeObject(list) + "}";
            return Content(json);
        }

        [HttpPost]
        public ContentResult Update(string maKhachHang, string tenKhachHang, string nhom, string loai, string mst = "", string diaChi = "", 
            string dienThoai = "", string fax = "", string email = "", string manv = "", float cn_dauky_tien = 0, 
            string cn_dauky_ngay = "", float cn_sotien = 0, int cn_songay = 0, string ghiChu = "")
        {
            string json = "{success:false}";
            if (tenKhachHang != "")
            {
                KhachHang mKhachHang = new KhachHang();
                int rst = mKhachHang.AddKhachHang(maKhachHang, tenKhachHang, nhom, loai, mst, diaChi, dienThoai, fax, email, manv, cn_dauky_tien, cn_dauky_ngay, cn_sotien, cn_songay, ghiChu);
                if (rst > 0) {
                    json = "{success:true}";
                }
            }
            return Content(json);
        }

        [HttpPost]
        public ContentResult Delete(string maKhachHang)
        {
            string json = "{success:false}";
            KhachHang mKhachHang = new KhachHang();
            int rst = mKhachHang.DeleteKhachHang(maKhachHang);
            if (rst > 0)
            {
                json = "{success:true}";
            }
            return Content(json);
        }

        public ContentResult GetNhomOptions()
        {
            KhachHang model = new KhachHang();
            ArrayList all = new ArrayList();
            all = model.GetKhachHangOptions();

            string json = "{\"actionitems\":" + JsonConvert.SerializeObject(all) + "}";
            return Content(json);
        }

        public ContentResult GetLoaiKHOptions()
        {
            KhacCT model = new KhacCT();
            ArrayList all = new ArrayList();
            all = model.GetOptionsLoaiKH();

            string json = "{\"actionitems\":" + JsonConvert.SerializeObject(all) + "}";
            return Content(json);
        }

        public ContentResult GetNhanVienOptions()
        {
            NhanVien model = new NhanVien();
            ArrayList all = new ArrayList();
            all = model.GetNVKinhDoanhOptions();

            string json = "{\"actionitems\":" + JsonConvert.SerializeObject(all) + "}";
            return Content(json);
        }

    }
}
