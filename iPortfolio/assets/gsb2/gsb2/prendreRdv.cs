using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace gsb2
{
    public partial class prendreRdv : Form
    {
        
        public prendreRdv()
        {

            InitializeComponent();
        }

        private void prendreRdv_Load(object sender, EventArgs e)
        {
            connexion conn = new connexion();
            MySqlDataReader dr = conn.afficheMdc();

            while (dr.Read())
            {
                dataGridView1.Rows.Add();
                dataGridView1.Rows[dataGridView1.Rows.Count - 2].Cells["nom"].Value = dr[0].ToString();
                dataGridView1.Rows[dataGridView1.Rows.Count - 2].Cells["prenom"].Value = dr[1].ToString();
            }

            }

            private void rdv_Click(object sender, EventArgs e)
        {
            connexion conn = new connexion();

            string Login, dates, heures, lieus, motifs, nommedecin;
            Login = login.Text;
            dates = date.Text;
            heures = heure.Text;
            lieus = lieu.Text;
            motifs = motif.Text;
            nommedecin = (string)dataGridView1.CurrentRow.Cells["nom"].Value;
            
            

            conn.insereRdv(Login, dates, heures, lieus, motifs, nommedecin);

            this.Hide();
            affichageVisit afv = new affichageVisit();
            afv.Show();

        }

        private void date_TextChanged(object sender, EventArgs e)
        {

        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {

        }

        private void retour_Click(object sender, EventArgs e)
        {
            this.Hide();
            affichageVisit afv = new affichageVisit();
            afv.Show();

        }

       

      

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            connexion conn = new connexion();
            MySqlDataReader dr = conn.afficheMdc();

            while (dr.Read())
            {
                dataGridView1.Rows.Add();
                dataGridView1.Rows[dataGridView1.Rows.Count - 2].Cells["nom"].Value = dr[0].ToString();
                dataGridView1.Rows[dataGridView1.Rows.Count - 2].Cells["prenom"].Value = dr[1].ToString();
                
            }

            
            
        }
    }
    
}
