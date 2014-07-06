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
    public class HangHoaController : Controller
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


            HangHoa mHangHoa = new HangHoa();
            var list = mHangHoa.GetList(start, limit, condition).ToArray();
            var total = mHangHoa.GetTotal(condition);
            string json = "{\"totalCount\":" + total +", \"actionitems\":" + JsonConvert.SerializeObject(list) + "}";
            return Content(json);
        }

        [HttpPost]
        public ContentResult Update(string maHangHoa, string tenHangHoa, string maNganh, string maNhom, string maMau, string maSize,
            string maDvt, double quiDoi = -1, string dvtLon = "", double tonMax = -1, double tonMin = -1, string trangThai = "",
            double vatIn = -1, double vatOut = -1, double giaMua = -1, double tlLaiLe = -1, double giaBanLe = -1, double tlLaiSi = -1,
            double giaBanSi = -1, string ghiChu = "")
        {
            string json = "{success:false}";
            if (tenHangHoa != "")
            {
                HangHoa mHangHoa = new HangHoa();
                int rst = mHangHoa.AddHangHoa(maHangHoa, tenHangHoa, maNganh, maNhom, maMau, maSize, maDvt, quiDoi, dvtLon,
                    tonMax, tonMin, trangThai, vatIn, vatOut,giaMua, tlLaiLe, giaBanLe, tlLaiSi, giaBanSi, ghiChu);
                if (rst > 0) {
                    json = "{success:true}";
                }
            }
            return Content(json);
        }

        [HttpPost]
        public ContentResult Delete(string maHangHoa)
        {
            string json = "{success:false}";
            HangHoa mHangHoa = new HangHoa();
            int rst = mHangHoa.DeleteHangHoa(maHangHoa);
            if (rst > 0)
            {
                json = "{success:true}";
            }
            return Content(json);
        }

        public ContentResult GetNhomOptions()
        {
            HangHoa model = new HangHoa();
            ArrayList all = new ArrayList();
            all = model.GetNhomOptions();

            string json = "{\"actionitems\":" + JsonConvert.SerializeObject(all) + "}";
            return Content(json);
        }

        public ContentResult GetNganhOptions()
        {
            HangHoa model = new HangHoa();
            ArrayList all = new ArrayList();
            all = model.GetNganhOptions();

            string json = "{\"actionitems\":" + JsonConvert.SerializeObject(all) + "}";
            return Content(json);
        }

        public ContentResult GetMauOptions()
        {
            HangHoa model = new HangHoa();
            ArrayList all = new ArrayList();
            all = model.GetMauOptions();

            string json = "{\"actionitems\":" + JsonConvert.SerializeObject(all) + "}";
            return Content(json);
        }

        public ContentResult GetSizeOptions()
        {
            HangHoa model = new HangHoa();
            ArrayList all = new ArrayList();
            all = model.GetSizeOptions();

            string json = "{\"actionitems\":" + JsonConvert.SerializeObject(all) + "}";
            return Content(json);
        }

        public ContentResult GetDVTOptions()
        {
            HangHoa model = new HangHoa();
            ArrayList all = new ArrayList();
            all = model.GetDVTOptions();

            string json = "{\"actionitems\":" + JsonConvert.SerializeObject(all) + "}";
            return Content(json);
        }
    }
}
