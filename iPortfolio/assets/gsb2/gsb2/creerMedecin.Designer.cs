namespace gsb2
{
    partial class creerMedecin
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(creerMedecin));
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.Id = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.Nom = new System.Windows.Forms.TextBox();
            this.label4 = new System.Windows.Forms.Label();
            this.Prenom = new System.Windows.Forms.TextBox();
            this.label5 = new System.Windows.Forms.Label();
            this.Adresse = new System.Windows.Forms.TextBox();
            this.label6 = new System.Windows.Forms.Label();
            this.CP = new System.Windows.Forms.TextBox();
            this.label7 = new System.Windows.Forms.Label();
            this.Ville = new System.Windows.Forms.TextBox();
            this.Retour = new System.Windows.Forms.Button();
            this.Enregistrer = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.SuspendLayout();
            // 
            // pictureBox1
            // 
            this.pictureBox1.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox1.Image")));
            this.pictureBox1.Location = new System.Drawing.Point(13, 13);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(198, 109);
            this.pictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox1.TabIndex = 0;
            this.pictureBox1.TabStop = false;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(245, 13);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(299, 31);
            this.label1.TabIndex = 1;
            this.label1.Text = "Enrigistrer  un medecin:";
            this.label1.Click += new System.EventHandler(this.label1_Click);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(242, 81);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(35, 24);
            this.label2.TabIndex = 2;
            this.label2.Text = "Id :";
            // 
            // Id
            // 
            this.Id.Location = new System.Drawing.Point(283, 86);
            this.Id.Name = "Id";
            this.Id.Size = new System.Drawing.Size(304, 20);
            this.Id.TabIndex = 3;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.Location = new System.Drawing.Point(221, 123);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(56, 24);
            this.label3.TabIndex = 4;
            this.label3.Text = "Nom:";
            // 
            // Nom
            // 
            this.Nom.Location = new System.Drawing.Point(283, 128);
            this.Nom.Name = "Nom";
            this.Nom.Size = new System.Drawing.Size(304, 20);
            this.Nom.TabIndex = 5;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label4.Location = new System.Drawing.Point(190, 167);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(87, 24);
            this.label4.TabIndex = 6;
            this.label4.Text = "Prenom: ";
            // 
            // Prenom
            // 
            this.Prenom.Location = new System.Drawing.Point(283, 171);
            this.Prenom.Name = "Prenom";
            this.Prenom.Size = new System.Drawing.Size(304, 20);
            this.Prenom.TabIndex = 7;
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label5.Location = new System.Drawing.Point(192, 206);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(85, 24);
            this.label5.TabIndex = 8;
            this.label5.Text = "Adresse:";
            // 
            // Adresse
            // 
            this.Adresse.Location = new System.Drawing.Point(283, 211);
            this.Adresse.Name = "Adresse";
            this.Adresse.Size = new System.Drawing.Size(304, 20);
            this.Adresse.TabIndex = 9;
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label6.Location = new System.Drawing.Point(162, 246);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(115, 24);
            this.label6.TabIndex = 10;
            this.label6.Text = "Code postal:";
            // 
            // CP
            // 
            this.CP.Location = new System.Drawing.Point(283, 251);
            this.CP.Name = "CP";
            this.CP.Size = new System.Drawing.Size(304, 20);
            this.CP.TabIndex = 11;
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label7.Location = new System.Drawing.Point(226, 288);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(51, 24);
            this.label7.TabIndex = 12;
            this.label7.Text = "Ville:";
            // 
            // Ville
            // 
            this.Ville.Location = new System.Drawing.Point(284, 291);
            this.Ville.Name = "Ville";
            this.Ville.Size = new System.Drawing.Size(303, 20);
            this.Ville.TabIndex = 13;
            // 
            // Retour
            // 
            this.Retour.BackColor = System.Drawing.Color.Lime;
            this.Retour.Location = new System.Drawing.Point(166, 355);
            this.Retour.Name = "Retour";
            this.Retour.Size = new System.Drawing.Size(166, 23);
            this.Retour.TabIndex = 14;
            this.Retour.Text = "Retour";
            this.Retour.UseVisualStyleBackColor = false;
            this.Retour.Click += new System.EventHandler(this.Retour_Click);
            // 
            // Enregistrer
            // 
            this.Enregistrer.BackColor = System.Drawing.Color.Lime;
            this.Enregistrer.Location = new System.Drawing.Point(370, 354);
            this.Enregistrer.Name = "Enregistrer";
            this.Enregistrer.Size = new System.Drawing.Size(217, 23);
            this.Enregistrer.TabIndex = 15;
            this.Enregistrer.Text = "Enregistrer:";
            this.Enregistrer.UseVisualStyleBackColor = false;
            this.Enregistrer.Click += new System.EventHandler(this.Enregistrer_Click);
            // 
            // creerMedecin
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Silver;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.Enregistrer);
            this.Controls.Add(this.Retour);
            this.Controls.Add(this.Ville);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.CP);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.Adresse);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.Prenom);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.Nom);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.Id);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.pictureBox1);
            this.Name = "creerMedecin";
            this.Text = "creerMedecin";
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox Id;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox Nom;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.TextBox Prenom;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.TextBox Adresse;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.TextBox CP;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.TextBox Ville;
        private System.Windows.Forms.Button Retour;
        private System.Windows.Forms.Button Enregistrer;
    }
}