﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;

namespace iBRP.Models.Data
{
    public class KhacCT
    {
        private iBRPContext dbContext;

        public KhacCT()
        {
            dbContext = new iBRPContext();
        }

        public IQueryable<Object> GetList(int start = 0, int perItem = 0, Dictionary<string, string> condition = null)
        {
            string maKhacCT = "";
            if (condition.ContainsKey("MAKHAC_CT"))
            {
                maKhacCT = condition["MAKHAC_CT"];
            }

            string tenKhacCT = "";
            if (condition.ContainsKey("TENKHAC_CT"))
            {
                tenKhacCT = condition["TENKHAC_CT"];
            }

            var list = from t in dbContext.DS_KHAC_CT
                       join ot in dbContext.DS_KHAC on t.MAKHAC equals ot.MAKHAC
                       where t.MAKHAC_CT.Contains(maKhacCT) && t.TENKHAC_CT.Contains(tenKhacCT)
                       orderby t.MAKHAC_CT
                       select new { t.MAKHAC_CT, t.MAKHAC, t.TENKHAC_CT, ot.TENKHAC };

            if (perItem > 0)
            {
                return list.Select(t => t).Skip(start).Take(perItem);
            }

            return list.Select(t => t).Skip(start);
        }

        public int GetTotal(Dictionary<string, string> condition = null)
        {
            string maKhacCT = "";
            if (condition.ContainsKey("MAKHAC_CT"))
            {
                maKhacCT = condition["MAKHAC_CT"];
            }

            string tenKhacCT = "";
            if (condition.ContainsKey("TENKHAC_CT"))
            {
                tenKhacCT = condition["TENKHAC_CT"];
            }

            var list = from t in dbContext.DS_KHAC_CT
                       join ot in dbContext.DS_KHAC on t.MAKHAC equals ot.MAKHAC
                       where t.MAKHAC_CT.Contains(maKhacCT) && t.TENKHAC_CT.Contains(tenKhacCT)
                       orderby t.MAKHAC_CT
                       select new { t.MAKHAC_CT, t.MAKHAC, t.TENKHAC_CT, ot.TENKHAC };

            return list.Count();
            
        }

        public int Add(string maKhac, string maKhacCT, string tenKhacCT)
        {
            try
            {
                bool isAdd = false;
                DS_KHAC_CT model = dbContext.DS_KHAC_CT.SingleOrDefault(nh => nh.MAKHAC_CT == maKhacCT);
                if (model == null)
                {
                    isAdd = true;
                    model = new DS_KHAC_CT();
                    maKhacCT = "000000";
                }

                model.MAKHAC = maKhac;
                model.MAKHAC_CT = maKhacCT;
                model.TENKHAC_CT = tenKhacCT;
                
                if (isAdd)
                {
                    dbContext.DS_KHAC_CT.Add(model);
                }

                return dbContext.SaveChanges();
            }
            catch (Exception e)
            {
                var strErr = e.Message;
                throw;
            }
            
        }

        public int Delete(string maKhacCT)
        {
            try
            {
                DS_KHAC_CT model = dbContext.DS_KHAC_CT.SingleOrDefault(t => t.MAKHAC_CT == maKhacCT);
                dbContext.DS_KHAC_CT.Remove(model);
                return dbContext.SaveChanges();
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}