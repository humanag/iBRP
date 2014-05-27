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
    public class NganhHangController : Controller
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
            

            NganhHang mNganhHang = new NganhHang();
            var list = mNganhHang.GetList(start, limit, condition).ToArray();
            var total = mNganhHang.GetTotal(condition);
            string json = "{\"totalCount\":" + total +", \"actionitems\":" + JsonConvert.SerializeObject(list) + "}";
            return Content(json);
        }

        public ContentResult Options(int start = 0, int limit = 5, int page = 1)
        {
            NganhHang mNganhHang = new NganhHang();
            //var list = mNganhHang.GetList(start, limit).ToArray();
            var list = mNganhHang.GetList();
            ArrayList all = new ArrayList();
            foreach(DS_NGANH item in list) 
            {
                Dictionary<string, string> arr = new Dictionary<string, string>();
                string manganh = (string)item.MANGANH;
                string tennganh = (string)item.TENNGANH;
                arr.Add("MANGANH", manganh);
                arr.Add("TENNGANH", tennganh);
                all.Add(arr);
            }

            var total = mNganhHang.GetTotal();
            string json = "{\"actionitems\":" + JsonConvert.SerializeObject(all) + "}";
            return Content(json);
        }

        [HttpPost]
        public ContentResult Update(string manganh, string tennganh)
        {
            string json = "{success:false}";
            if (tennganh != "")
            {
                NganhHang mNganhHang = new NganhHang();
                int rst = mNganhHang.AddNganhHang(manganh, tennganh);
                if (rst > 0) {
                    json = "{success:true}";
                }
            }
            return Content(json);
        }

        [HttpPost]
        public ContentResult Delete(string manganh)
        {
            string json = "{success:false}";
            NganhHang mNganhHang = new NganhHang();
            int rst = mNganhHang.DeleteNganhHang(manganh);
            if (rst > 0)
            {
                json = "{success:true}";
            }
            return Content(json);
        }

    }
}
