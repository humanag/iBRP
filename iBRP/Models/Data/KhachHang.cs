using System;
using System.Collections.Generic;
using System.Data.Entity;
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
            if (condition != null && condition.ContainsKey("TENDT"))
            {
                tenKhachHang = condition["TENDT"];
            }

            var list = from t in dbContext.DS_DOITAC
                       where t.MADT.Contains(maKhachHang) && t.TENDT.Contains(tenKhachHang)
                       orderby t.MADT
                       select new { MAKHACHHANG = t.MADT, TENKHACHHANG = t.TENDT };

            ////Set condition for MANGANH
            //if (manganh != "")
            //{
            //    list.AsQueryable().Where(nh => nh.MANGANH.Contains(manganh));
            //}
            ////Set condition for TENNGANH
            //if (tennganh != "")
            //{
            //    list.AsQueryable().Where(nh => nh.TENNGANH.Contains(tennganh));
            //}

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
            if (condition != null && condition.ContainsKey("TENDT"))
            {
                tenKhachHang = condition["TENDT"];
            }

            var list = from t in dbContext.DS_DOITAC
                       where t.MADT.Contains(maKhachHang) && t.TENDT.Contains(tenKhachHang)
                       orderby t.MADT
                       select t;

            ////Set condition for MANGANH
            //if (manganh != "")
            //{
            //    list.AsQueryable().Where(nh => nh.MANGANH.Contains(manganh));
            //}
            ////Set condition for TENNGANH
            //if (tennganh != "")
            //{
            //    list.AsQueryable().Where(nh => nh.TENNGANH.Contains(tennganh));
            //}

            return list.Count();
            
        }

        public int AddKhachHang(string maKhachHang, string tenKhachHang)
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
        
    }
}