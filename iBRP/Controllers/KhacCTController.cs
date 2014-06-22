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
    public class KhacCTController : Controller
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


            KhacCT model = new KhacCT();
            var list = model.GetList(start, limit, condition).ToArray();
            var total = model.GetTotal(condition);
            string json = "{\"totalCount\":" + total +", \"actionitems\":" + JsonConvert.SerializeObject(list) + "}";
            return Content(json);
        }

        public ContentResult ListKhac(int start = 0, int limit = 5, int page = 1, string filter = "")
        {
            Dictionary<string, string> condition = new Dictionary<string, string>();
            if (filter != "")
            {
                condition = Helper.ConvertFilterStringToArray(filter);
            }
            if (start < 0)
            {
                start = 0;
            }

            Khac model = new Khac();
            var list = model.GetList(start, limit, condition).ToArray();
            var total = model.GetTotal(condition);
            string json = "{\"totalCount\":" + total + ", \"actionitems\":" + JsonConvert.SerializeObject(list) + "}";
            return Content(json);
        }

        [HttpPost]
        public ContentResult Update(string maKhac, string maKhacCT, string tenKhacCT)
        {
            string json = "{success:false}";
            if (tenKhacCT != "")
            {
                KhacCT model = new KhacCT();
                int rst = model.Add(maKhac, maKhacCT, tenKhacCT);
                if (rst > 0) {
                    json = "{success:true}";
                }
            }
            return Content(json);
        }

        [HttpPost]
        public ContentResult Delete(string maKhacCT)
        {
            string json = "{success:false}";
            KhacCT model = new KhacCT();
            int rst = model.Delete(maKhacCT);
            if (rst > 0)
            {
                json = "{success:true}";
            }
            return Content(json);
        }


        public ContentResult OptionsKhac(int start = 0, int limit = 5, int page = 1)
        {
            Khac model = new Khac();
            ArrayList all = new ArrayList();
            all = model.GetOptions();

            var total = model.GetTotal();
            string json = "{\"actionitems\":" + JsonConvert.SerializeObject(all) + "}";
            return Content(json);
        }

        [HttpPost]
        public ContentResult UpdateKhac(string maKhac, string tenKhac, string ploai)
        {
            string json = "{success:false}";
            if (tenKhac != "")
            {
                Khac model = new Khac();
                int rst = model.Add(maKhac, tenKhac, ploai);
                if (rst > 0)
                {
                    json = "{success:true}";
                }
            }
            return Content(json);
        }

        [HttpPost]
        public ContentResult DeleteKhac(string maKhac)
        {
            string json = "{success:false}";
            Khac model = new Khac();
            int rst = model.Delete(maKhac);
            if (rst > 0)
            {
                json = "{success:true}";
            }
            return Content(json);
        }
    }
}
