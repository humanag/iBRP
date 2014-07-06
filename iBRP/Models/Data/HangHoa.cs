using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace iBRP.Models.Data
{
    public class HangHoa
    {
        private iBRPContext dbContext;

        public HangHoa()
        {
            dbContext = new iBRPContext();
        }

        public IQueryable<Object> GetList(int start = 0, int perItem = 0, Dictionary<string, string> condition = null)
        {
            string maHangHoa = "";
            if (condition != null && condition.ContainsKey("MAHANG"))
            {
                maHangHoa = condition["MAHANG"];
            }

            string tenHangHoa = "";
            if (condition != null && condition.ContainsKey("TENHANG"))
            {
                tenHangHoa = condition["TENHANG"];
            }

            var list = from t in dbContext.DS_HANGHOA
                       where t.MAHANG.Contains(maHangHoa) && t.TENHANG.Contains(tenHangHoa)
                       orderby t.MAHANG
                       select new { MAHANGHOA = t.MAHANG, TENHANGHOA = t.TENHANG, MANGANH = t.MANGANH, MANHOM = t.MANHOM, 
                           MAMAU = t.MAMAU, MASIZE = t.MASIZE, MADVT = t.DVT,
                           QUIDOI = t.QUIDOI, DVTLON = t.DVT_LON, TONMAX = t.TON_MAX, TONMIN = t.TON_MIN, TRANGTHAI = t.TRANGTHAI,
                           VATIN = t.VAT_IN, VATOUT = t.VAT_OUT, GIAMUA = t.GIAMUA, TLLAILE = t.TL_LAI_LE, GIABANLE = t.GIABAN_LE,
                           TLLAISI = t.TL_LAI_SI, GIABANSI = t.GIABAN_SI, GHICHU = t.GHICHU
                       };

            if (perItem > 0)
            {
                return list.Select(t => t).Skip(start).Take(perItem);
            }

            return list.Select(t => t).Skip(start);
        }

        public int GetTotal(Dictionary<string, string> condition = null)
        {
            string maHangHoa = "";
            if (condition != null && condition.ContainsKey("MAHANG"))
            {
                maHangHoa = condition["MAHANG"];
            }

            string tenHangHoa = "";
            if (condition != null && condition.ContainsKey("TENHANG"))
            {
                tenHangHoa = condition["TENHANG"];
            }

            var list = from t in dbContext.DS_HANGHOA
                       where t.MAHANG.Contains(maHangHoa) && t.TENHANG.Contains(tenHangHoa)
                       orderby t.MAHANG
                       select new { MAHANGHOA = t.MAHANG, TENHANG = t.TENHANG };

            return list.Count();
            
        }

        public int AddHangHoa(string maHangHoa, string tenHangHoa, string maNganh, string maNhom, string maMau, string maSize,
            string maDvt, double quiDoi = -1, string dvtLon = "", double tonMax = -1, double tonMin = -1, string trangThai = "",
            double vatIn = -1, double vatOut = -1, double giaMua = -1, double tlLaiLe = -1, double giaBanLe = -1, double tlLaiSi = -1,
            double giaBanSi = -1, string ghiChu = "")
        {
            try
            {
                bool isAdd = false;
                DS_HANGHOA hangHoa = dbContext.DS_HANGHOA.SingleOrDefault(nh => nh.MAHANG == maHangHoa);
                if (hangHoa == null)
                {
                    isAdd = true;
                    hangHoa = new DS_HANGHOA();
                }
                hangHoa.MAHANG = maHangHoa;
                hangHoa.TENHANG = tenHangHoa;
                hangHoa.MANGANH = maNganh;
                hangHoa.MANHOM = maNhom;
                hangHoa.MAMAU = maMau;
                hangHoa.MASIZE = maSize;
                hangHoa.DVT = maDvt;
                hangHoa.QUIDOI = quiDoi;
                hangHoa.DVT_LON = dvtLon;
                hangHoa.TON_MAX = tonMax;
                hangHoa.TON_MIN = tonMin;
                hangHoa.TRANGTHAI = trangThai;
                hangHoa.VAT_IN = vatIn;
                hangHoa.VAT_OUT = vatOut;
                hangHoa.GIAMUA = giaMua;
                hangHoa.TL_LAI_LE = tlLaiLe;
                hangHoa.GIABAN_LE = giaBanLe;
                hangHoa.TL_LAI_SI = tlLaiSi;
                hangHoa.GIABAN_SI = giaBanSi;
                hangHoa.GHICHU = ghiChu;

                if (isAdd)
                {
                    dbContext.DS_HANGHOA.Add(hangHoa);
                }

                return dbContext.SaveChanges();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public int DeleteHangHoa(string maHangHoa)
        {
            try
            {
                DS_HANGHOA hangHoa = dbContext.DS_HANGHOA.Single(nh => nh.MAHANG == maHangHoa);
                dbContext.DS_HANGHOA.Remove(hangHoa);
                return dbContext.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public DS_HANGHOA FindById(string maHangHoa)
        {
            return dbContext.DS_HANGHOA.Single(nh => nh.MAHANG == maHangHoa);
        }

        public ArrayList GetNhomOptions()
        {
            Nhom model = new Nhom();
            
            var list = from nh in dbContext.DS_NHOM
                       orderby nh.MANHOM
                       select nh;

            ArrayList all = new ArrayList();
            foreach (DS_NHOM item in list)
            {
                Dictionary<string, string> arr = new Dictionary<string, string>();
                string maNhom = (string)item.MANHOM;
                string tenNhom = (string)item.TENNHOM;
                arr.Add("MANHOM", maNhom);
                arr.Add("TENNHOM", tenNhom);
                all.Add(arr);
            }

            return all;
        }

        public ArrayList GetNganhOptions()
        {
            NganhHang mNganhHang = new NganhHang();
            ArrayList all = new ArrayList();
            all = mNganhHang.GetOptions();

            return all;
        }


        public ArrayList GetMauOptions()
        {
            KhacCT mKhacCT = new KhacCT();
            var list = mKhacCT.FindByMaKhac("DM_MAU");
            ArrayList all = new ArrayList();
            foreach (DS_KHAC_CT item in list)
            {
                Dictionary<string, string> arr = new Dictionary<string, string>();
                string maKhacCT = (string)item.MAKHAC_CT;
                string tenKhacCT = (string)item.TENKHAC_CT;
                arr.Add("MAMAU", maKhacCT);
                arr.Add("TENMAU", tenKhacCT);
                all.Add(arr);
            }

            return all;
        }

        public ArrayList GetSizeOptions()
        {
            KhacCT mKhacCT = new KhacCT();
            var list = mKhacCT.FindByMaKhac("DM_SIZE");
            ArrayList all = new ArrayList();
            foreach (DS_KHAC_CT item in list)
            {
                Dictionary<string, string> arr = new Dictionary<string, string>();
                string maKhacCT = (string)item.MAKHAC_CT;
                string tenKhacCT = (string)item.TENKHAC_CT;
                arr.Add("MASIZE", maKhacCT);
                arr.Add("TENSIZE", tenKhacCT);
                all.Add(arr);
            }

            return all;
        }

        public ArrayList GetDVTOptions()
        {
            KhacCT mKhacCT = new KhacCT();
            var list = mKhacCT.FindByMaKhac("DM_DVT");
            ArrayList all = new ArrayList();
            foreach (DS_KHAC_CT item in list)
            {
                Dictionary<string, string> arr = new Dictionary<string, string>();
                string maKhacCT = (string)item.MAKHAC_CT;
                string tenKhacCT = (string)item.TENKHAC_CT;
                arr.Add("MADVT", maKhacCT);
                arr.Add("TENDVT", tenKhacCT);
                all.Add(arr);
            }

            return all;
        }

        
    }
}