using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace gsb2
{
    class connexion
    {
        MySqlConnection connection = new MySqlConnection("server= localhost; port=3306; username= root; password=; database= gsb_rdv");
       

        public void openconnection()
        {
            if(connection.State == System.Data.ConnectionState.Closed)
            {
                connection.Open();
            }

        }

        public void closedconnection()
        {
            if (connection.State == System.Data.ConnectionState.Open)
            {
                connection.Close();
            }

        }

        public MySqlConnection getConnection()
        {
            
            return connection;


        }

        

        public MySqlCommand verifUtilisateur(string user, string mdp)
        {

            string sql = "SELECT * FROM `visiteur` WHERE login = @user AND mdp = @mdp;";
            MySqlCommand cmd = new MySqlCommand(sql, getConnection());

            cmd.Parameters.Add("user", MySqlDbType.VarChar).Value = user;
            cmd.Parameters.Add("mdp", MySqlDbType.VarChar).Value = mdp;

           
            



            return cmd;
        }
       

        public MySqlCommand verifComptable(string user, string mdp)
        {
            MySqlCommand cmd1 = new MySqlCommand("SELECT * FROM `comptable` WHERE login = @user AND mdp = @mdp", getConnection());
            cmd1.Parameters.Add("user", MySqlDbType.VarChar).Value = user;
            cmd1.Parameters.Add("mdp", MySqlDbType.VarChar).Value = mdp;

            


            return cmd1;
        }

        public MySqlCommand insereRdv(string login, string date, string heure, string lieu, string motif, string nomedecin)
        {
            openconnection();

            

            string query = "INSERT INTO `rendezvous`(`login`, `date`, `heure`, `lieu`, `motif`, `nomMedecin`) VALUES(@Login,@dates, @heures, @lieus, @motifs, @nomedecin);";
            MySqlCommand cmd1 = new MySqlCommand(query, getConnection());
            cmd1.Parameters.AddWithValue("Login", login);
            cmd1.Parameters.AddWithValue("dates", date);
            cmd1.Parameters.AddWithValue("heures", heure);
            cmd1.Parameters.AddWithValue("lieus", lieu);
            cmd1.Parameters.AddWithValue("motifs", motif);
            cmd1.Parameters.AddWithValue("nomedecin", nomedecin);


            cmd1.ExecuteReader();
            return cmd1;

        }

        public MySqlCommand insererMdc (string id, string nom, string prenom, string adresse, string cp, string ville)
        {
            openconnection();

            string query = "INSERT INTO `medecin`(`id`, `nom`, `prenom`, `adresse`, `codepostal`, `ville`) VALUES(@id,@nom, @prenom, @adresse, @cp, @ville);";
            MySqlCommand cmd1 = new MySqlCommand(query, getConnection());
            cmd1.Parameters.AddWithValue("id", id);
            cmd1.Parameters.AddWithValue("nom", nom);
            cmd1.Parameters.AddWithValue("prenom", prenom);
            cmd1.Parameters.AddWithValue("adresse", adresse);
            cmd1.Parameters.AddWithValue("cp", cp);
            cmd1.Parameters.AddWithValue("ville", ville);

            cmd1.ExecuteReader();
            return cmd1;
        }

       

        public MySqlDataReader afficheRdv()
        {
            
            openconnection();
             
            MySqlCommand cmd = new MySqlCommand("SELECT * FROM rendezvous ", getConnection());
            MySqlDataReader dr = cmd.ExecuteReader();
            return dr;

        }

         
        public MySqlDataReader afficheMdc()
        {
            openconnection();

            MySqlCommand cmd = new MySqlCommand("SELECT nom, prenom, adresse, codepostal, ville FROM medecin ", getConnection());
            MySqlDataReader dr = cmd.ExecuteReader();
            return dr;

        }






    }
}
