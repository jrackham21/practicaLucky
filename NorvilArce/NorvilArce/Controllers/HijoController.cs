using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Business;
using Entity;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace NorvilArce.Controllers
{
    [ApiController]
    public class HijoController : Controller
    {
        HijoBL hijoBL = new HijoBL();

        [HttpGet]
        [Route("api/hijos/read")]
        public IEnumerable<Hijo> Read()
        {
            return hijoBL.listarHijos();
        }

        [HttpPost]
        [Route("api/hijos/create")]
        public Boolean Create([FromBody] Hijo hijo)
        {
            return hijoBL.crearHijo(hijo);
        }

        [HttpPut]
        [Route("api/hijos/update")]
        public Boolean Update(Hijo hijo)
        {
            return hijoBL.actualizarHijo(hijo);
        }

        [HttpDelete]
        [Route("api/hijos/delete/{id}")]
        public Boolean Delete(Int16 id)
        {
            return hijoBL.eliminarHijo(id);
        }

        [HttpGet]
        [Route("api/hijos/getByTrabajador/{id}")]
        public IEnumerable<Hijo> GetByTrabajador(Int16 id)
        {
            return hijoBL.listarHijosPorTrabajador(id);
        }

    }
}
