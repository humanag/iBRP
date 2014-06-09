using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;

namespace iBRP.Models.Data
{
    public class Nhom
    {
        private iBRPContext dbContext;

        public Nhom()
        {
            dbContext = new iBRPContext();
        }

        public IQueryable<Object> GetList(int start = 0, int perItem = 0, Dictionary<string, string> condition = null)
        {
            string manhom = "";
            if (condition.ContainsKey("MANHOM"))
            {
                manhom = condition["MANHOM"];
            }

            string tennhom = "";
            if (condition.ContainsKey("TENNHOM"))
            {
                tennhom = condition["TENNHOM"];
            }

            var list = from nh in dbContext.DS_NHOM
                       join ngh in dbContext.DS_NGANH on nh.MANGANH equals ngh.MANGANH
                       where nh.MANHOM.Contains(manhom) && nh.TENNHOM.Contains(tennhom)
                       orderby nh.MANHOM
                       select new { nh.MANHOM, nh.MA, nh.MANGANH, nh.TENNHOM, ngh.TENNGANH };

            if (perItem > 0)
            {
                return list.Select(nh => nh).Skip(start).Take(perItem);
            }

            return list.Select(nh => nh).Skip(start);
        }

        public int GetTotal(Dictionary<string, string> condition = null)
        {
            string manhom = "";
            if (condition.ContainsKey("MANHOM"))
            {
                manhom = condition["MANHOM"];
            }

            string tennhom = "";
            if (condition.ContainsKey("TENNHOM"))
            {
                tennhom = condition["TENNHOM"];
            }

            var list = from nh in dbContext.DS_NHOM
                       join ngh in dbContext.DS_NGANH on nh.MANGANH equals ngh.MANGANH
                       where nh.MANHOM.Contains(manhom) && nh.TENNHOM.Contains(tennhom)
                       orderby nh.MANHOM
                       select nh;

            return list.Count();
            
        }

        public int AddNhom(string manganh, string manhom, string tennhom)
        {
            try
            {
                bool isAdd = false;
                DS_NHOM nhom = dbContext.DS_NHOM.SingleOrDefault(nh => nh.MANHOM == manhom);
                if (nhom == null)
                {
                    isAdd = true;
                    nhom = new DS_NHOM();
                    manhom = "000000";
                }

                nhom.MANHOM = manhom;
                nhom.MANGANH = manganh;
                nhom.TENNHOM = tennhom;
                
                if (isAdd)
                {
                    dbContext.DS_NHOM.Add(nhom);
                }

                return dbContext.SaveChanges();
            }
            catch (Exception e)
            {
                var strErr = e.Message;
                throw;
            }
            
        }

        public int DeleteNhom(string manhom)
        {
            try
            {
                DS_NHOM nhom = dbContext.DS_NHOM.SingleOrDefault(nh => nh.MANHOM == manhom);
                dbContext.DS_NHOM.Remove(nhom);
                return dbContext.SaveChanges();
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public IQueryable<DS_NHOM> FindByMaNganh(string manganh)
        {
            return from nh in dbContext.DS_NHOM
                       where nh.MANGANH.Contains(manganh)
                       orderby nh.MANHOM
                       select nh;
        }
    }
}