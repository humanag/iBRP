using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;

namespace iBRP.Models.Data
{
    public class ChungTu
    {
        private iBRPContext dbContext;

        public ChungTu()
        {
            dbContext = new iBRPContext();
        }

        public IQueryable<Object> GetList(int start = 0, int perItem = 0, Dictionary<string, string> condition = null)
        {
            string khoa = "";
            if (condition != null && condition.ContainsKey("KHOA"))
            {
                khoa = condition["KHOA"];
            }

            var list = from t in dbContext.CHUNGTU
                       orderby t.KHOA
                       select new { KHOA = t.KHOA, SOPHIEU = t.SOPHIEU};

            if (perItem > 0)
            {
                return list.Select(t => t).Skip(start).Take(perItem);
            }

            return list.Select(t => t).Skip(start);
        }


        public int GetTotal(Dictionary<string, string> condition = null)
        {
            string khoa = "";
            if (condition != null && condition.ContainsKey("KHOA"))
            {
                khoa = condition["KHOA"];
            }

            var list = from t in dbContext.CHUNGTU
                       orderby t.KHOA
                       select t;

            return list.Count();

        }

    }
}