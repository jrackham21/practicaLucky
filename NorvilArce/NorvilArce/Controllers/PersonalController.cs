using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Entity;
using Business;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace NorvilArce.Controllers
{
    [ApiController]
    public class PersonalController : Controller
    {
        PersonalBL personalBL = new PersonalBL();
                
        [HttpGet]
        [Route("api/trabajadores/read")]
        public IEnumerable<Personal> Read()
        {
            return personalBL.listarTrabajadores();
        }        
        
        [HttpPost]
        [Route("api/trabajadores/create")]
        public Boolean Create([FromBody] Personal personal)
        {
            return personalBL.crearTrabajador(personal);
        }
                
        [HttpPut]
        [Route("api/trabajadores/update")]
        public Boolean Update(Personal personal)
        {
            return personalBL.actualizarTrabajador(personal);
        }
                
        [HttpDelete]
        [Route("api/trabajadores/delete/{id}")]
        public Boolean Delete(Int16 id)
        {
            return personalBL.eliminarTrabajador(id);
        }
    }
}
