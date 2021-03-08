using System;
using System.Collections.Generic;
using System.Text;

namespace Entity
{
    public class Personal
    {
        private Int16 mIdPersonal;
        public Int16 IdPersonal
        {
            get { return mIdPersonal; }
            set { mIdPersonal = value; }
        }
        private String mApPaterno;
        public String ApPaterno
        {
            get { return mApPaterno; }
            set { mApPaterno = value; }
        }

        private String mApMaterno;
        public String ApMaterno
        {
            get { return mApMaterno; }
            set { mApMaterno = value; }
        }
        private String mNombre1;
        public String Nombre1
        {
            get { return mNombre1; }
            set { mNombre1 = value; }
        }
        private String mNombre2;
        public String Nombre2
        {
            get { return mNombre2; }
            set { mNombre2 = value; }
        }
        private String mNombreCompleto;
        public String NombreCompleto
        {
            get { return mNombreCompleto; }
            set { mNombreCompleto = value; }
        }
        private DateTime mFchNac;
        public DateTime FchNac
        {
            get { return mFchNac; }
            set { mFchNac = value; }
        }
        private DateTime mFchIngreso;
        public DateTime FchIngreso
        {
            get { return mFchIngreso; }
            set { mFchIngreso = value; }
        }

    }
}
