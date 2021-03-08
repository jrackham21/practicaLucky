using System;
using System.Collections.Generic;
using System.Text;
using System.Data.SqlClient;
using Entity;
using System.Data;

namespace Data
{
    public class PersonalADO
    {
        ConexionADO conexionADO = new ConexionADO();
        SqlConnection connection = new SqlConnection();
        SqlCommand command = new SqlCommand();
        
        public Boolean crearTrabajador(Personal personal)
        {
            connection.ConnectionString = conexionADO.GetCnx();
            command.Connection = connection;
            command.CommandType = CommandType.StoredProcedure;
            command.CommandText = "usp_CrearTrabajador";

            try
            {
                command.Parameters.Clear();
                command.Parameters.AddWithValue("@vape_pat", personal.ApPaterno);
                command.Parameters.AddWithValue("@vape_mat", personal.ApMaterno);
                command.Parameters.AddWithValue("@vnom1", personal.Nombre1);
                command.Parameters.AddWithValue("@vnom2", personal.Nombre2);
                command.Parameters.AddWithValue("@vfec_nac", personal.FchNac);
                command.Parameters.AddWithValue("@vfec_ing", personal.FchIngreso);
                                
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

        public IEnumerable<Personal> listarTrabajadores()
        {            
            connection.ConnectionString = conexionADO.GetCnx();
            command.Connection = connection;
            command.CommandType = CommandType.StoredProcedure;
            command.CommandText = "usp_listarTrabajadores";

            try
            {
                List<Personal> personals = new List<Personal>();

                command.Parameters.Clear();

                connection.Open();
                SqlDataReader dataReader = command.ExecuteReader();

                while (dataReader.Read())
                {
                    Personal personal = new Personal();

                    personal.IdPersonal = Convert.ToInt16(dataReader["IdPersonal"]);
                    personal.ApPaterno = dataReader["ApPaterno"].ToString();
                    personal.ApMaterno = dataReader["ApMaterno"].ToString();
                    personal.Nombre1 = dataReader["Nombre1"].ToString();
                    personal.Nombre2 = dataReader["Nombre2"].ToString();
                    personal.NombreCompleto = dataReader["NombreCompleto"].ToString();
                    personal.FchNac = Convert.ToDateTime(dataReader["FchNac"]);
                    personal.FchIngreso = Convert.ToDateTime(dataReader["FchIngreso"]);

                    personals.Add(personal);
                }
                return personals;                
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

        public Boolean actualizarTrabajador(Personal personal)
        {
            connection.ConnectionString = conexionADO.GetCnx();
            command.Connection = connection;
            command.CommandType = CommandType.StoredProcedure;
            command.CommandText = "usp_ActualizarTrabajador";

            try
            {
                command.Parameters.Clear();
                command.Parameters.AddWithValue("@vape_pat", personal.ApPaterno);
                command.Parameters.AddWithValue("@vape_mat", personal.ApMaterno);
                command.Parameters.AddWithValue("@vnom1", personal.Nombre1);
                command.Parameters.AddWithValue("@vnom2", personal.Nombre2);
                command.Parameters.AddWithValue("@vfec_nac", personal.FchNac);
                command.Parameters.AddWithValue("@vfec_ing", personal.FchIngreso);
                command.Parameters.AddWithValue("@vid_personal", personal.IdPersonal);

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

        public Boolean eliminarTrabajador(Int16 id)
        {
            connection.ConnectionString = conexionADO.GetCnx();
            command.Connection = connection;
            command.CommandType = CommandType.StoredProcedure;
            command.CommandText = "usp_EliminarTrabajador";

            try
            {
                command.Parameters.Clear();
                command.Parameters.AddWithValue("@vid_personal", id);

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
    }
}
