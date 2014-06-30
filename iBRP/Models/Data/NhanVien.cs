using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace iBRP.Models.Data
{
    public class NhanVien
    {
        private iBRPContext dbContext;

        public NhanVien()
        {
            dbContext = new iBRPContext();
        }

        public IQueryable<Object> GetList(int start = 0, int perItem = 0, Dictionary<string, string> condition = null)
        {
            string maNhanVien = "";
            if (condition != null && condition.ContainsKey("MANV"))
            {
                maNhanVien = condition["MANV"];
            }

            string tenNhanVien = "";
            if (condition != null && condition.ContainsKey("TENNV"))
            {
                tenNhanVien = condition["TENNV"];
            }

            var list = from t in dbContext.DS_NHANVIEN
                       where t.MANV.Contains(maNhanVien) && t.TENNV.Contains(tenNhanVien)
                       orderby t.MANV
                       select new { MANHANVIEN = t.MANV, TENNHANVIEN = t.TENNV, t.NHOM, t.DIACHI, t.DIENTHOAI, t.FAX, t.EMAIL, t.GHICHU };

            if (perItem > 0)
            {
                return list.Select(t => t).Skip(start).Take(perItem);
            }

            return list.Select(t => t).Skip(start);
        }

        public int GetTotal(Dictionary<string, string> condition = null)
        {
            string maNhanVien = "";
            if (condition != null && condition.ContainsKey("MANV"))
            {
                maNhanVien = condition["MANV"];
            }

            string tenNhanVien = "";
            if (condition != null && condition.ContainsKey("TENNV"))
            {
                tenNhanVien = condition["TENNV"];
            }

            var list = from t in dbContext.DS_NHANVIEN
                       where t.MANV.Contains(maNhanVien) && t.TENNV.Contains(tenNhanVien)
                       orderby t.MANV
                       select t;

            return list.Count();
            
        }

        public int AddNhanVien(string maNhanVien, string tenNhanVien, string nhom, string biDanh = "", string diaChi = "", string dienThoai = "", string fax = "", string email = "", string ghiChu = "")
        {
            try
            {
                bool isAdd = false;
                DS_NHANVIEN nhanVien = dbContext.DS_NHANVIEN.SingleOrDefault(nh => nh.MANV == maNhanVien);
                if (nhanVien == null)
                {
                    isAdd = true;
                    nhanVien = new DS_NHANVIEN();
                }
                nhanVien.MANV = maNhanVien;
                nhanVien.TENNV = tenNhanVien;
                nhanVien.BIDANH = biDanh;
                nhanVien.NHOM = nhom;
                nhanVien.DIACHI = diaChi;
                nhanVien.DIENTHOAI = dienThoai;
                nhanVien.FAX = fax;
                nhanVien.EMAIL = email;
                nhanVien.GHICHU = ghiChu;
                
                if (isAdd)
                {
                    dbContext.DS_NHANVIEN.Add(nhanVien);
                }

                return dbContext.SaveChanges();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public int DeleteNhanVien(string maNhanVien)
        {
            try
            {
                DS_NHANVIEN nhanVien = dbContext.DS_NHANVIEN.Single(nh => nh.MANV == maNhanVien);
                dbContext.DS_NHANVIEN.Remove(nhanVien);
                return dbContext.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public DS_NHANVIEN FindById(string maNhanVien)
        {
            return dbContext.DS_NHANVIEN.Single(nh => nh.MANV == maNhanVien);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="start"></param>
        /// <param name="limit"></param>
        /// <param name="page"></param>
        /// <returns></returns>
        public ArrayList GetNhomOptions()
        {
            var list = from t in dbContext.V_DS_NHOM_NV
                       orderby t.MAKHAC
                       select t;

            ArrayList all = new ArrayList();
            foreach (V_DS_NHOM_NV item in list)
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