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
    public partial class creerMedecin : Form
    {
        public creerMedecin()
        {
            InitializeComponent();
        }

        private void Enregistrer_Click(object sender, EventArgs e)
        {
            connexion conn = new connexion();

            string id, nom, prenom, adresse, cp, ville;
            id = Id.Text;
            nom = Nom.Text;
            prenom = Prenom.Text;
            adresse = Adresse.Text;
            cp = CP.Text;
            ville = Ville.Text;

            conn.insererMdc(id, nom, prenom, adresse, cp, ville);

            this.Hide();
            afficheCompta afc = new afficheCompta();
            afc.Show();

        }

        private void Retour_Click(object sender, EventArgs e)
        {
            this.Hide();
            afficheCompta afc = new afficheCompta();
            afc.Show();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }
    }
}
