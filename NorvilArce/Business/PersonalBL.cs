using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using Entity;
using Data;

namespace Business
{
    public class PersonalBL    
    {
        PersonalADO personalADO = new PersonalADO();
        public Boolean crearTrabajador(Personal personal)
        {
            return personalADO.crearTrabajador(personal);
        }
        public IEnumerable<Personal> listarTrabajadores()
        {
            return personalADO.listarTrabajadores();
        }
        public Boolean actualizarTrabajador(Personal personal)
        {
            return personalADO.actualizarTrabajador(personal);
        }
        public Boolean eliminarTrabajador(Int16 id)
        {
            return personalADO.eliminarTrabajador(id);
        }
    }
}
