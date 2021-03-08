using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using Entity;
using Data;

namespace Business
{
    public class HijoBL
    {
        HijoADO hijoADO = new HijoADO();
        public Boolean crearHijo(Hijo hijo)
        {
            return hijoADO.crearHijo(hijo);
        }
        public IEnumerable<Hijo> listarHijos()
        {
            return hijoADO.listarHijos();
        }
        public Boolean actualizarHijo(Hijo hijo)
        {
            return hijoADO.actualizarHijos(hijo);
        }
        public Boolean eliminarHijo(Int16 id)
        {
            return hijoADO.eliminarHijo(id);
        }
        public IEnumerable<Hijo> listarHijosPorTrabajador(Int16 id){
            return hijoADO.listarHijosPorTrabajador(id);
        }

    }
}
