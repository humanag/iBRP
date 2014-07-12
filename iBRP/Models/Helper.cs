using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;

namespace iBRP.Models
{
    public static class Helper
    {
        public static Dictionary<string, string> ConvertFilterStringToArray(string filter)
        {
            Dictionary<string, string> arr = new Dictionary<string,string>();

            //This is string filter demo. It will get from ext js
            //filter = "[{\"property\":\"TENNGANH\",\"value\":\"T\"},{\"property\":\"MANGANH\",\"value\":\"10\"}]";
            if (filter != "" )
            {
                var objects = JArray.Parse(filter);
                foreach (JObject root in objects)
                {
                    string property = (string) root.First;
                    string value = (string) root.Last;
                    if (!arr.ContainsKey(property)) 
                    {
                        arr.Add(property, value);
                    }
                }
            }
            return arr;
        }


        public static DateTime ConvertToSqlDateTime(string strDateTime, string joinChar = "-", char splitChar = '/')
        {
            string[] tempsplit = strDateTime.Split(splitChar);
            string strDate = tempsplit[2] + joinChar + tempsplit[1] + joinChar + tempsplit[0];
            return Convert.ToDateTime(strDate);
        }
    }
}