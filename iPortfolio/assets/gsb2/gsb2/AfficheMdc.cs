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
    public partial class AfficheMdc : Form
    {
        public AfficheMdc()
        {
            InitializeComponent();
        }

        private void AfficheMdc_Load(object sender, EventArgs e)
        {
            connexion conn = new connexion();
            MySqlDataReader dr = conn.afficheMdc();



            while (dr.Read())
            {
                dataGridView1.Rows.Add();
                dataGridView1.Rows[dataGridView1.Rows.Count - 2].Cells["nom"].Value = dr[0].ToString();
                dataGridView1.Rows[dataGridView1.Rows.Count - 2].Cells["prenom"].Value = dr[1].ToString();
                dataGridView1.Rows[dataGridView1.Rows.Count - 2].Cells["adresse"].Value = dr[2].ToString();
                dataGridView1.Rows[dataGridView1.Rows.Count - 2].Cells["CP"].Value = dr[3].ToString();
                dataGridView1.Rows[dataGridView1.Rows.Count - 2].Cells["ville"].Value = dr[4].ToString();

            }

        }

        

        private void button1_Click(object sender, EventArgs e)
        {
            this.Hide();
            affichageVisit afc = new affichageVisit();
            afc.Show();
        }

        private void affichMdc_Click(object sender, EventArgs e)
        {
            connexion conn = new connexion();
            MySqlDataReader dr = conn.afficheMdc();



            while (dr.Read())
            {
                dataGridView1.Rows.Add();
                dataGridView1.Rows[dataGridView1.Rows.Count - 2].Cells["nom"].Value = dr[0].ToString();
                dataGridView1.Rows[dataGridView1.Rows.Count - 2].Cells["prenom"].Value = dr[1].ToString();
                dataGridView1.Rows[dataGridView1.Rows.Count - 2].Cells["adresse"].Value = dr[2].ToString();
                dataGridView1.Rows[dataGridView1.Rows.Count - 2].Cells["CP"].Value = dr[3].ToString();
                dataGridView1.Rows[dataGridView1.Rows.Count - 2].Cells["ville"].Value = dr[4].ToString();

            }
        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }
    }
}
