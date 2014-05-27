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
    public class NhomController : Controller
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
            

            Nhom mNhom = new Nhom();
            var list = mNhom.GetList(start, limit, condition).ToArray();
            var total = mNhom.GetTotal(condition);
            string json = "{\"totalCount\":" + total +", \"actionitems\":" + JsonConvert.SerializeObject(list) + "}";
            return Content(json);
        }

        [HttpPost]
        public ContentResult Update(string manganh, string manhom, string tennhom)
        {
            string json = "{success:false}";
            if (tennhom != "")
            {
                Nhom mNhom = new Nhom();
                int rst = mNhom.AddNhom(manganh, manhom, tennhom);
                if (rst > 0) {
                    json = "{success:true}";
                }
            }
            return Content(json);
        }

        [HttpPost]
        public ContentResult Delete(string manhom)
        {
            string json = "{success:false}";
            Nhom mNhom = new Nhom();
            int rst = mNhom.DeleteNhom(manhom);
            if (rst > 0)
            {
                json = "{success:true}";
            }
            return Content(json);
        }

    }
}
