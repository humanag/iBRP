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
    public class KhoController : Controller
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


            Kho mKho = new Kho();
            var list = mKho.GetList(start, limit, condition).ToArray();
            var total = mKho.GetTotal(condition);
            string json = "{\"totalCount\":" + total +", \"actionitems\":" + JsonConvert.SerializeObject(list) + "}";
            return Content(json);
        }

        [HttpPost]
        public ContentResult Update(string maKho, string tenKho, string diaChi = "", string dienThoai = "", string fax = "", string thuKho = "")
        {
            string json = "{success:false}";
            if (tenKho != "")
            {
                Kho mKho = new Kho();
                int rst = mKho.AddKho(maKho, tenKho, diaChi, dienThoai, fax, thuKho);
                if (rst > 0) {
                    json = "{success:true}";
                }
            }
            return Content(json);
        }

        [HttpPost]
        public ContentResult Delete(string maKho)
        {
            string json = "{success:false}";
            Kho mKho = new Kho();
            int rst = mKho.DeleteKho(maKho);
            if (rst > 0)
            {
                json = "{success:true}";
            }
            return Content(json);
        }
    }
}
