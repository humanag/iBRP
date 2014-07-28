using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;
using iBRP.Models.Data;

namespace iBRP.Models.Sys
{
    public class User
    {
        private iBRPContext dbContext;

        public User()
        {
            dbContext = new iBRPContext();
        }
        
    }
}