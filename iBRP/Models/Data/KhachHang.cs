using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Globalization;
using System.Linq;

namespace iBRP.Models.Data
{
    public class KhachHang
    {
        private iBRPContext dbContext;

        public KhachHang()
        {
            dbContext = new iBRPContext();
        }

        public IQueryable<Object> GetList(int start = 0, int perItem = 0, Dictionary<string, string> condition = null)
        {
            string maKhachHang = "";
            if (condition != null && condition.ContainsKey("MADT"))
            {
                maKhachHang = condition["MADT"];
            }

            string tenKhachHang = "";
            if (condition != null && condition.ContainsKey("TENKHACHHANG"))
            {
                tenKhachHang = condition["TENKHACHHANG"];
            }

            var list = from t in dbContext.DS_DOITAC
                       where t.MADT.Contains(maKhachHang) && t.TENDT.Contains(tenKhachHang)
                       orderby t.MADT
                       select new { MAKHACHHANG = t.MADT, TENKHACHHANG = t.TENDT, t.NHOM, t.LOAI, t.MST, t.DIACHI, t.DIENTHOAI, t.FAX, t.EMAIL, t.MANV, t.CN_DAUKY_TIEN, t.CN_DAUKY_NGAY, t.CN_SOTIEN, t.CN_SONGAY, t.GHICHU };

            if (perItem > 0)
            {
                return list.Select(t => t).Skip(start).Take(perItem);
            }

            return list.Select(t => t).Skip(start);
        }

        public int GetTotal(Dictionary<string, string> condition = null)
        {
            string maKhachHang = "";
            if (condition != null && condition.ContainsKey("MADT"))
            {
                maKhachHang = condition["MADT"];
            }

            string tenKhachHang = "";
            if (condition != null && condition.ContainsKey("TENKHACHHANG"))
            {
                tenKhachHang = condition["TENKHACHHANG"];
            }

            var list = from t in dbContext.DS_DOITAC
                       where t.MADT.Contains(maKhachHang) && t.TENDT.Contains(tenKhachHang)
                       orderby t.MADT
                       select t;

            return list.Count();
            
        }

        public int AddKhachHang(string maKhachHang, string tenKhachHang, string nhom, string loai, string mst = "", string diaChi = "", string dienThoai = "", 
            string fax = "", string email = "", string manv = "", float cnDauKyTien = 0, string cnDauKyNgay = "", float cnSoTien = 0,
            int cnSoNgay = 0, string ghiChu = "")
        {
            try
            {
                bool isAdd = false;
                DS_DOITAC khachHang = dbContext.DS_DOITAC.SingleOrDefault(nh => nh.MADT == maKhachHang);
                if (khachHang == null)
                {
                    isAdd = true;
                    khachHang = new DS_DOITAC();
                }
                khachHang.MADT = maKhachHang;
                khachHang.TENDT = tenKhachHang;
                khachHang.NHOM = nhom;
                khachHang.LOAI = loai;
                khachHang.MST = mst;
                khachHang.DIACHI = diaChi;
                khachHang.DIENTHOAI = dienThoai;
                khachHang.FAX = fax;
                khachHang.EMAIL = email;
                khachHang.MANV = manv;
                khachHang.CN_DAUKY_TIEN = Convert.ToDouble(cnDauKyTien);

                if (cnDauKyNgay != "") {
                    khachHang.CN_DAUKY_NGAY = Helper.ConvertToSqlDateTime(cnDauKyNgay);
                }

                khachHang.CN_SOTIEN = Convert.ToDouble(cnSoTien);
                khachHang.CN_SONGAY = Convert.ToInt32(cnSoNgay);
                khachHang.GHICHU = ghiChu;
                
                if (isAdd)
                {
                    dbContext.DS_DOITAC.Add(khachHang);
                }

                return dbContext.SaveChanges();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public int DeleteKhachHang(string maKhachHang)
        {
            try
            {
                DS_DOITAC khachHang = dbContext.DS_DOITAC.Single(nh => nh.MADT == maKhachHang);
                dbContext.DS_DOITAC.Remove(khachHang);
                return dbContext.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public DS_DOITAC FindById(string maKhachHang)
        {
            return dbContext.DS_DOITAC.Single(nh => nh.MADT == maKhachHang);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="start"></param>
        /// <param name="limit"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        public ArrayList GetKhachHangOptions(int start = 0, int limit = 5, int page = 1)
        {
            var list = from t in dbContext.V_DS_NHOM_KH_NCC
                       orderby t.MAKHAC
                       select t;

            ArrayList all = new ArrayList();
            foreach (V_DS_NHOM_KH_NCC item in list)
            {
                Dictionary<string, string> arr = new Dictionary<string, string>();
                string maKhacCT = (string)item.MAKHAC_CT;
                string tenKhacCT = (string)item.TENKHAC_CT;
                arr.Add("MAKHAC_CT", maKhacCT);
                arr.Add("TENKHAC_CT", tenKhacCT);
                all.Add(arr);
            }

            return all;
        }

    }
}