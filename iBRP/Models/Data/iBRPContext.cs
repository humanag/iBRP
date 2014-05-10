using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using iBRP;

namespace iBRP.Models.Data
{

    public class iBRPContext : iBRPEntities
    {
        private iBRPEntities dbContext;
        
        public iBRPContext()
        {
            if (dbContext == null)
            {
                dbContext = new iBRPEntities();
            }
        }

        public iBRPEntities getInstance()
        {
            if (dbContext == null)
            {
                dbContext = new iBRPEntities();
            }
            return dbContext;
        }
    }
}