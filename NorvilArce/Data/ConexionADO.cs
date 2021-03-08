using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Configuration;

namespace Data
{
    class ConexionADO
    {
        public string GetCnx()        
        {
            //string strCnx = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            //string strCnx =
            return "Data Source=localhost;Initial Catalog=NorvilArce; User=sa; Password=sql123";
            //string strCnx = "server = NORVIL; DataBase = NorvilArce; Integrated Security = true";

            //if (object.ReferenceEquals(strCnx, string.Empty))
            //{
            //    return string.Empty;
            //}
            //else
            //{
            //    return strCnx;
            //}
        }
    }
}
