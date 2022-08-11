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
    public partial class afficheCompta : Form
    {
        public afficheCompta()
        {
            InitializeComponent();
        }

        private void deconnexion_Click(object sender, EventArgs e)
        {
            this.Hide();
            Connexions connn = new Connexions();
            connn.Show();
        }

       

        private void afficheRdv_Click(object sender, EventArgs e)
        {
            this.Hide();
            afficheRdv rdv = new afficheRdv();
            rdv.Show();

        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Hide();
            creerMedecin crm = new creerMedecin();
            crm.Show();

        }
    }
}
