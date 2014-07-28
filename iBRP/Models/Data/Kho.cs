using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace iBRP.Models.Data
{
    public class Kho
    {
        private iBRPContext dbContext;

        public Kho()
        {
            dbContext = new iBRPContext();
        }

        public IQueryable<DS_KHO> GetList(int start = 0, int perItem = 0, Dictionary<string, string> condition = null)
        {
            string maKho = "";
            if (condition != null && condition.ContainsKey("MAKHO"))
            {
                maKho = condition["MAKHO"];
            }

            string tenKho = "";
            if (condition != null && condition.ContainsKey("TENKHO"))
            {
                tenKho = condition["TENKHO"];
            }

            var list = from t in dbContext.DS_KHO
                       where t.MAKHO.Contains(maKho) && t.TENKHO.Contains(tenKho)
                       orderby t.MAKHO
                       select t;

            if (perItem > 0)
            {
                return list.Select(nh => nh).Skip(start).Take(perItem);
            }

            return list.Select(nh => nh).Skip(start);
        }

        public int GetTotal(Dictionary<string, string> condition = null)
        {
            string maKho = "";
            if (condition != null && condition.ContainsKey("MAKHO"))
            {
                maKho = condition["MAKHO"];
            }

            string tenKho = "";
            if (condition != null && condition.ContainsKey("TENKHO"))
            {
                tenKho = condition["TENKHO"];
            }

            var list = from t in dbContext.DS_KHO
                       where t.MAKHO.Contains(maKho) && t.TENKHO.Contains(tenKho)
                       orderby t.MAKHO
                       select t;

            return list.Count();
            
        }

        public int AddKho(string maKho, string tenKho, string diaChi = "", string dienThoai = "", string fax = "", string thuKho = "")
        {
            try
            {
                bool isAdd = false;
                DS_KHO kho = dbContext.DS_KHO.SingleOrDefault(t => t.MAKHO == maKho);
                if (kho == null)
                {
                    isAdd = true;
                    kho = new DS_KHO();
                }
                kho.MAKHO = maKho;
                kho.TENKHO = tenKho;
                kho.DIACHI = diaChi;
                kho.DIENTHOAI = dienThoai;
                kho.FAX = fax;
                kho.THUKHO = thuKho;
                if (isAdd)
                {
                    dbContext.DS_KHO.Add(kho);
                }

                return dbContext.SaveChanges();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public int DeleteKho(string maKho)
        {
            try
            {
                DS_KHO kho = dbContext.DS_KHO.Single(t => t.MAKHO == maKho);
                dbContext.DS_KHO.Remove(kho);
                return dbContext.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}