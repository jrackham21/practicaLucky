using System;
using System.Collections.Generic;
using System.Text;
using System.Data.SqlClient;
using Entity;
using System.Data;

namespace Data
{
    public class HijoADO
    {
        ConexionADO conexionADO = new ConexionADO();
        SqlConnection connection = new SqlConnection();
        SqlCommand command = new SqlCommand();

        public Boolean crearHijo(Hijo hijo)
        {
            connection.ConnectionString = conexionADO.GetCnx();
            command.Connection = connection;
            command.CommandType = CommandType.StoredProcedure;
            command.CommandText = "usp_CrearHijo";

            try
            {
                command.Parameters.Clear();
                command.Parameters.AddWithValue("@vid_personal", hijo.IdPersonal);
                command.Parameters.AddWithValue("@vape_pat", hijo.ApPaterno);
                command.Parameters.AddWithValue("@vape_mat", hijo.ApMaterno);
                command.Parameters.AddWithValue("@vnom1", hijo.Nombre1);
                command.Parameters.AddWithValue("@vnom2", hijo.Nombre2);
                command.Parameters.AddWithValue("@vfec_nac", hijo.FchNac);

                connection.Open();
                command.ExecuteNonQuery();
                return true;
            }
            catch (SqlException ex)
            {
                throw new Exception(ex.Message);
            }
            finally
            {
                if (connection.State == ConnectionState.Open)
                {
                    connection.Close();
                }
            }
        }

        public IEnumerable<Hijo> listarHijos()
        {            
            connection.ConnectionString = conexionADO.GetCnx();
            command.Connection = connection;
            command.CommandType = CommandType.StoredProcedure;
            command.CommandText = "usp_listarHijos";

            try
            {
                List<Hijo> hijos = new List<Hijo>();

                command.Parameters.Clear();

                connection.Open();
                SqlDataReader dataReader = command.ExecuteReader();

                while (dataReader.Read())
                {
                    Hijo hijo = new Hijo();

                    hijo.IdDerhab = Convert.ToInt16(dataReader["IdDerhab"]);
                    hijo.IdPersonal = Convert.ToInt16(dataReader["IdPersonal"]);
                    hijo.ApPaterno = dataReader["ApPaterno"].ToString();
                    hijo.ApMaterno = dataReader["ApMaterno"].ToString();
                    hijo.Nombre1 = dataReader["Nombre1"].ToString();
                    hijo.Nombre2 = dataReader["Nombre2"].ToString();
                    hijo.NombreCompleto = dataReader["NombreCompleto"].ToString();
                    hijo.FchNac = Convert.ToDateTime(dataReader["FchNac"]);

                    hijos.Add(hijo);
                }
                return hijos;
            }
            catch (SqlException ex)
            {
                throw new Exception(ex.Message);
            }
            finally
            {
                if (connection.State == ConnectionState.Open)
                {
                    connection.Close();
                }
            }
        }

        public Boolean actualizarHijos(Hijo hijo)
        {
            connection.ConnectionString = conexionADO.GetCnx();
            command.Connection = connection;
            command.CommandType = CommandType.StoredProcedure;
            command.CommandText = "usp_ActualizarHijos";

            try
            {
                command.Parameters.Clear();
                command.Parameters.AddWithValue("@vid_personal", hijo.IdPersonal);
                command.Parameters.AddWithValue("@vape_pat", hijo.ApPaterno);
                command.Parameters.AddWithValue("@vape_mat", hijo.ApMaterno);
                command.Parameters.AddWithValue("@vnom1", hijo.Nombre1);
                command.Parameters.AddWithValue("@vnom2", hijo.Nombre2);
                command.Parameters.AddWithValue("@vfec_nac", hijo.FchNac);
                command.Parameters.AddWithValue("@vid_derhab", hijo.IdDerhab);

                connection.Open();
                command.ExecuteNonQuery();
                return true;
            }
            catch (SqlException ex)
            {
                throw new Exception(ex.Message);
            }
            finally
            {
                if (connection.State == ConnectionState.Open)
                {
                    connection.Close();
                }
            }
        }

        public Boolean eliminarHijo(Int16 id)
        {
            connection.ConnectionString = conexionADO.GetCnx();
            command.Connection = connection;
            command.CommandType = CommandType.StoredProcedure;
            command.CommandText = "usp_EliminarHijo";

            try
            {
                command.Parameters.Clear();
                command.Parameters.AddWithValue("@vid_derhab", id);

                connection.Open();
                command.ExecuteNonQuery();
                return true;

            }
            catch (SqlException ex)
            {
                throw new Exception(ex.Message);
            }
            finally
            {
                if (connection.State == ConnectionState.Open)
                {
                    connection.Close();
                }
            }
        }

        public IEnumerable<Hijo> listarHijosPorTrabajador(Int16 id)
        {
            connection.ConnectionString = conexionADO.GetCnx();
            command.Connection = connection;
            command.CommandType = CommandType.StoredProcedure;
            command.CommandText = "usp_listarHijosPorPersonal";            

            try
            {
                List<Hijo> hijos = new List<Hijo>();

                command.Parameters.Clear();
                command.Parameters.AddWithValue("@vid_personal", id);

                connection.Open();
                SqlDataReader dataReader = command.ExecuteReader();

                while (dataReader.Read())
                {
                    Hijo hijo = new Hijo();

                    hijo.IdDerhab = Convert.ToInt16(dataReader["IdDerhab"]);
                    hijo.IdPersonal = Convert.ToInt16(dataReader["IdPersonal"]);
                    hijo.ApPaterno = dataReader["ApPaterno"].ToString();
                    hijo.ApMaterno = dataReader["ApMaterno"].ToString();
                    hijo.Nombre1 = dataReader["Nombre1"].ToString();
                    hijo.Nombre2 = dataReader["Nombre2"].ToString();
                    hijo.NombreCompleto = dataReader["NombreCompleto"].ToString();
                    hijo.FchNac = Convert.ToDateTime(dataReader["FchNac"]);

                    hijos.Add(hijo);
                }
                return hijos;
            }
            catch (SqlException ex)
            {
                throw new Exception(ex.Message);
            }
            finally
            {
                if (connection.State == ConnectionState.Open)
                {
                    connection.Close();
                }
            }
        }
    }
}
