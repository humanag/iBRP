﻿using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace iBRP.Models.Data
{
    public class NganhHang
    {
        private iBRPContext dbContext;

        public NganhHang()
        {
            dbContext = new iBRPContext();
        }

        public IQueryable<DS_NGANH> GetList(int start = 0, int perItem = 0, Dictionary<string, string> condition = null)
        {
            string manganh = "";
            if (condition != null && condition.ContainsKey("MANGANH"))
            {
                manganh = condition["MANGANH"];
            }

            string tennganh = "";
            if (condition != null && condition.ContainsKey("TENNGANH"))
            {
                tennganh = condition["TENNGANH"];
            }

            var list = from nh in dbContext.DS_NGANH
                       where nh.MANGANH.Contains(manganh) && nh.TENNGANH.Contains(tennganh)
                       orderby nh.MANGANH
                       select nh;

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
                return list.Select(nh => nh).Skip(start).Take(perItem);
            }

            return list.Select(nh => nh).Skip(start);
        }

        public int GetTotal(Dictionary<string, string> condition = null)
        {
            string manganh = "";
            if (condition != null && condition.ContainsKey("MANGANH"))
            {
                manganh = condition["MANGANH"];
            }

            string tennganh = "";
            if (condition != null && condition.ContainsKey("TENNGANH"))
            {
                tennganh = condition["TENNGANH"];
            }

            var list = from nh in dbContext.DS_NGANH
                       where nh.MANGANH.Contains(manganh) && nh.TENNGANH.Contains(tennganh)
                       orderby nh.MANGANH
                       select nh;

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

        public int AddNganhHang(string manganh, string tennganh)
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
            int hasNhom = this.HasNhom(manganh);
            if (hasNhom > 0)
            {
                //You can not delete because this nganh has child nhom.
                return 0;
            }

            DS_NGANH nganhHang = dbContext.DS_NGANH.Single(nh => nh.MANGANH == manganh);
            dbContext.DS_NGANH.Remove(nganhHang);
            return dbContext.SaveChanges();
        }

        public DS_NGANH FindById(string manganh)
        {
            return dbContext.DS_NGANH.Single(nh => nh.MANGANH == manganh);
        }


        private int HasNhom(string manganh)
        {
            Nhom mNhom = new Nhom();
            return mNhom.FindByMaNganh(manganh).Count();
        }
    }
}