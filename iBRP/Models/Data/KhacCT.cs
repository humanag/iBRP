using System;
using System.Collections;
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

            string maKhac = "";
            if (condition.ContainsKey("makhac"))
            {
                maKhac = condition["makhac"];
            }

            var list = from t in dbContext.DS_KHAC_CT
                       join ot in dbContext.DS_KHAC on t.MAKHAC equals ot.MAKHAC
                       where t.MAKHAC_CT.Contains(maKhacCT) && t.TENKHAC_CT.Contains(tenKhacCT) && t.MAKHAC == maKhac
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

            string maKhac = "";
            if (condition.ContainsKey("makhac"))
            {
                maKhac = condition["makhac"];
            }

            var list = from t in dbContext.DS_KHAC_CT
                       join ot in dbContext.DS_KHAC on t.MAKHAC equals ot.MAKHAC
                       where t.MAKHAC_CT.Contains(maKhacCT) && t.TENKHAC_CT.Contains(tenKhacCT) && t.MAKHAC == maKhac
                       orderby t.MAKHAC_CT
                       select new { t.MAKHAC_CT, t.MAKHAC, t.TENKHAC_CT, ot.TENKHAC };

            return list.Count();
            
        }

        public int Add(string maKhac, string maKhacCT, string tenKhacCT)
        {
            try
            {
                bool isAdd = false;
                DS_KHAC_CT model = dbContext.DS_KHAC_CT.SingleOrDefault(nh => nh.MAKHAC_CT == maKhacCT && nh.MAKHAC == maKhac);
                if (model == null)
                {
                    isAdd = true;
                    model = new DS_KHAC_CT();
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

        public IQueryable<DS_KHAC_CT> FindByMaKhac(string maKhac)
        {
            return from nh in dbContext.DS_KHAC_CT
                   where nh.MAKHAC == maKhac
                   orderby nh.MAKHAC
                   select nh;
        }

        public ArrayList GetOptionsLoaiKH()
        {
            var list = from t in dbContext.DS_KHAC_CT
                       join ot in dbContext.DS_KHAC on t.MAKHAC equals ot.MAKHAC
                       where t.MAKHAC == "LOAI_KH"
                       orderby t.MAKHAC_CT
                       select t;

            ArrayList all = new ArrayList();
            foreach (DS_KHAC_CT item in list)
            {
                Dictionary<string, string> arr = new Dictionary<string, string>();
                string maKhacCT = (string)item.MAKHAC_CT;
                string tenKhacCT = (string)item.TENKHAC_CT;
                arr.Add("MA_LOAI", maKhacCT);
                arr.Add("TEN_LOAI", tenKhacCT);
                all.Add(arr);
            }

            return all;
        }

    }
}