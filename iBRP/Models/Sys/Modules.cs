using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;
using iBRP.Models.Data;

namespace iBRP.Models.Sys
{
    public class Modules
    {
        private iBRPContext dbContext;

        public Modules()
        {
            dbContext = new iBRPContext();
        }

        public List<string> GetList()
        {
            return Helper.GetControllerNames();
        }
    }
}