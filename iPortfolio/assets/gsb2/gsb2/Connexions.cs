using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace gsb2
{
    public partial class Connexions : Form
    {

        


        public Connexions()
        {

            InitializeComponent();
            
        }

        

        

        private void entreId_TextChanged(object sender, EventArgs e)
        {

        }

        private void connex_Click(object sender, EventArgs e)
        {
            connexion conn = new connexion();

            string user = entreId.Text;
            string mdp = entreMdp.Text;

            conn.openconnection();


            DataTable data = new DataTable();
            DataTable data1 = new DataTable();

            MySqlDataAdapter adapter = new MySqlDataAdapter();
            MySqlDataAdapter adapter1 = new MySqlDataAdapter();


            MySqlCommand cmd, cmd1;

            cmd = conn.verifUtilisateur(user, mdp);
            
            cmd1 = conn.verifComptable(user, mdp);

            adapter.SelectCommand = cmd;
            adapter1.SelectCommand = cmd1;

            adapter.Fill(data);
            adapter1.Fill(data1);

            
            
            


            if (data.Rows.Count > 0 )
            {

                Program.userLogin = data.Rows[0];
                this.Hide();
                affichageVisit af = new affichageVisit();
                af.Show();
               



            }
            else if (data1.Rows.Count > 0)
            {
                this.Hide();
                afficheCompta afc = new afficheCompta();
                afc.Show();

            }
            else
            {
                MessageBox.Show("login et/ou mot de passe invalid");
            }
            


           

            


            




        }

        private void quitter_Click(object sender, EventArgs e)
        {
            this.Close();
           
        }

        private void entreMdp_TextChanged(object sender, EventArgs e)
        {
            
        }

        private void Connexions_Load(object sender, EventArgs e)
        {

        }
    }
}
