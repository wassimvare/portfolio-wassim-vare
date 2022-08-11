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
    public partial class afficheRdv : Form
    {
       
        public afficheRdv()
        {
            InitializeComponent();
            

        }

        private void DataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }

        private void checkedListBox1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void listView1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Hide();
            afficheCompta ac = new afficheCompta();
            ac.Show();
        }

       

        private void button2_Click(object sender, EventArgs e)
        {
            connexion conn = new connexion();
            MySqlDataReader dr = conn.afficheRdv();
           
            

            while (dr.Read())
            {
                dataGridView1.Rows.Add();
                dataGridView1.Rows[dataGridView1.Rows.Count - 2].Cells["login"].Value = dr[0].ToString();
                dataGridView1.Rows[dataGridView1.Rows.Count - 2].Cells["date"].Value = dr[1].ToString();
                dataGridView1.Rows[dataGridView1.Rows.Count - 2].Cells["heure"].Value = dr[2].ToString();
                dataGridView1.Rows[dataGridView1.Rows.Count - 2].Cells["lieu"].Value = dr[3].ToString();
                dataGridView1.Rows[dataGridView1.Rows.Count - 2].Cells["motif"].Value = dr[4].ToString();
                dataGridView1.Rows[dataGridView1.Rows.Count - 2].Cells["nomMedecin"].Value = dr[5].ToString();



            }
            





        }

       

       

       

       

        private void dataGridView1_CellContentClick_1(object sender, DataGridViewCellEventArgs e)
        {
            

        }
    }
}
