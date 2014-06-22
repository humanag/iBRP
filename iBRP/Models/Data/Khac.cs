using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;

namespace iBRP.Models.Data
{
    public class Khac
    {
        private iBRPContext dbContext;

        public Khac()
        {
            dbContext = new iBRPContext();
        }

        public IQueryable<DS_KHAC> GetList(int start = 0, int perItem = 0, Dictionary<string, string> condition = null)
        {
            string maKhac = "";
            if (condition != null && condition.ContainsKey("MAKHAC"))
            {
                maKhac = condition["MAKHAC"];
            }

            string tenKhac = "";
            if (condition != null && condition.ContainsKey("TENKHAC"))
            {
                tenKhac = condition["TENKHAC"];
            }

            var list = from t in dbContext.DS_KHAC
                       where t.MAKHAC.Contains(maKhac) && t.TENKHAC.Contains(tenKhac)
                       orderby t.MAKHAC
                       select t;

            if (perItem > 0)
            {
                return list.Select(t => t).Skip(start).Take(perItem);
            }

            return list.Select(t => t).Skip(start);
        }


        public int GetTotal(Dictionary<string, string> condition = null)
        {
            string maKhac = "";
            if (condition != null && condition.ContainsKey("MAKHAC"))
            {
                maKhac = condition["MAKHAC"];
            }

            string tenKhac = "";
            if (condition != null && condition.ContainsKey("TENKHAC"))
            {
                tenKhac = condition["TENKHAC"];
            }

            var list = from t in dbContext.DS_KHAC
                       where t.MAKHAC.Contains(maKhac) && t.TENKHAC.Contains(tenKhac)
                       orderby t.MAKHAC
                       select t;

            return list.Count();

        }

        public ArrayList GetOptions(int start = 0, int limit = 5, int page = 1)
        {
            var list = this.GetList();
            ArrayList all = new ArrayList();
            foreach (DS_KHAC item in list)
            {
                Dictionary<string, string> arr = new Dictionary<string, string>();
                string maKhac = (string)item.MAKHAC;
                string tenKhac = (string)item.TENKHAC;
                arr.Add("MAKHAC", maKhac);
                arr.Add("TENKHAC", tenKhac);
                all.Add(arr);
            }

            return all;

        }

        public int Add(string maKhac, string tenKhac, string ploai)
        {
            try
            {
                bool isAdd = false;
                DS_KHAC model = dbContext.DS_KHAC.SingleOrDefault(nh => nh.MAKHAC == maKhac);
                if (model == null)
                {
                    isAdd = true;
                    model = new DS_KHAC();
                }

                model.MAKHAC = maKhac;
                model.TENKHAC = tenKhac;

                if (ploai == null)
                {
                    ploai = "0";
                }

                model.PLOAI = ploai;
                if (isAdd)
                {
                    dbContext.DS_KHAC.Add(model);
                }

                return dbContext.SaveChanges();
            }
            catch (Exception e)
            {
                var strErr = e.Message;
                throw;
            }

        }

        public int Delete(string maKhac)
        {
            try
            {
                int hasCT = this.HasCT(maKhac);
                if (hasCT > 0)
                {
                    throw new Exception("This item is not deleted because it has some child item.");
                }

                DS_KHAC khac = dbContext.DS_KHAC.Single(t => t.MAKHAC == maKhac);
                dbContext.DS_KHAC.Remove(khac);
                return dbContext.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private int HasCT(string maKhac)
        {
            KhacCT mKhacCT = new KhacCT();
            return mKhacCT.FindByMaKhac(maKhac).Count();
        }

    }
}