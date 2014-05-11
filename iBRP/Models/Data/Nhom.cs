using System.Collections.Generic;
using System.Data.Entity;
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

        public IQueryable<DS_NHOM> GetList(int start = 0, int perItem = 0, Dictionary<string, string> condition = null)
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
                       where nh.MANHOM.Contains(manhom) && nh.TENNHOM.Contains(tennhom)
                       orderby nh.MANHOM
                       select nh;

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
                       where nh.MANHOM.Contains(manhom) && nh.TENNHOM.Contains(tennhom)
                       orderby nh.MANHOM
                       select nh;

            return list.Count();
            
        }

        public int AddNhom(string manganh, string tennganh)
        {
            bool isAdd = false;
            DS_NGANH nganhHang = dbContext.DS_NGANH.SingleOrDefault(nh => nh.MANGANH == manganh);
            if (nganhHang == null) {
                isAdd = true;
                nganhHang = new DS_NGANH();
            }
            nganhHang.MANGANH = manganh;
            nganhHang.TENNGANH = tennganh;
            if (isAdd) {
                dbContext.DS_NGANH.Add(nganhHang);    
            }
            
            return dbContext.SaveChanges();
        }

        public int DeleteNganhHang(string manganh)
        {
            DS_NGANH nganhHang = dbContext.DS_NGANH.Single(nh => nh.MANGANH == manganh);
            dbContext.DS_NGANH.Remove(nganhHang);
            return dbContext.SaveChanges();
        }
    }
}