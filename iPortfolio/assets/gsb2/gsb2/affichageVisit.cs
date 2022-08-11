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
    public partial class affichageVisit : Form
    {
        public affichageVisit()
        {
            InitializeComponent();
        }

        private void Label1_Click(object sender, EventArgs e)
        {
            
        }

        private void PrendreRdv_Click(object sender, EventArgs e)
        {
            this.Hide();
            prendreRdv pr = new prendreRdv();
            pr.Show();
        }

       

        private void button1_Click(object sender, EventArgs e)
        {
            this.Hide();
            Connexions con = new Connexions();
            con.Show();
        }

        private void AfficheMdc_Click(object sender, EventArgs e)
        {
            this.Hide();
            AfficheMdc amc = new AfficheMdc();
            amc.Show();
        }
    }
}
