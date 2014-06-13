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
        public ContentResult Update(string maKhachHang, string tenKhachHang)
        {
            string json = "{success:false}";
            if (tenKhachHang != "")
            {
                KhachHang mKhachHang = new KhachHang();
                int rst = mKhachHang.AddKhachHang(maKhachHang, tenKhachHang);
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

    }
}
