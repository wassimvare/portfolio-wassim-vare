namespace gsb2
{
    partial class prendreRdv
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(prendreRdv));
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.date = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.heure = new System.Windows.Forms.TextBox();
            this.label4 = new System.Windows.Forms.Label();
            this.lieu = new System.Windows.Forms.TextBox();
            this.label5 = new System.Windows.Forms.Label();
            this.motif = new System.Windows.Forms.TextBox();
            this.rdv = new System.Windows.Forms.Button();
            this.label6 = new System.Windows.Forms.Label();
            this.login = new System.Windows.Forms.TextBox();
            this.retour = new System.Windows.Forms.Button();
            this.dataGridView1 = new System.Windows.Forms.DataGridView();
            this.nom = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.prenom = new System.Windows.Forms.DataGridViewTextBoxColumn();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).BeginInit();
            this.SuspendLayout();
            // 
            // pictureBox1
            // 
            this.pictureBox1.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox1.Image")));
            this.pictureBox1.Location = new System.Drawing.Point(12, 5);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(226, 139);
            this.pictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox1.TabIndex = 0;
            this.pictureBox1.TabStop = false;
            this.pictureBox1.Click += new System.EventHandler(this.pictureBox1_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(244, 13);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(267, 31);
            this.label1.TabIndex = 1;
            this.label1.Text = "Prendre rendez-vous";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(82, 147);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(222, 24);
            this.label2.TabIndex = 2;
            this.label2.Text = "Date: (annee-mois-jours):";
            this.label2.Click += new System.EventHandler(this.label2_Click);
            // 
            // date
            // 
            this.date.Location = new System.Drawing.Point(316, 147);
            this.date.Name = "date";
            this.date.Size = new System.Drawing.Size(478, 20);
            this.date.TabIndex = 3;
            this.date.TextChanged += new System.EventHandler(this.date_TextChanged);
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.Location = new System.Drawing.Point(236, 171);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(68, 24);
            this.label3.TabIndex = 4;
            this.label3.Text = "Heure:";
            // 
            // heure
            // 
            this.heure.Location = new System.Drawing.Point(316, 176);
            this.heure.Name = "heure";
            this.heure.Size = new System.Drawing.Size(459, 20);
            this.heure.TabIndex = 5;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label4.Location = new System.Drawing.Point(250, 195);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(51, 24);
            this.label4.TabIndex = 6;
            this.label4.Text = "Lieu:";
            // 
            // lieu
            // 
            this.lieu.Location = new System.Drawing.Point(316, 202);
            this.lieu.Name = "lieu";
            this.lieu.Size = new System.Drawing.Size(472, 20);
            this.lieu.TabIndex = 7;
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label5.Location = new System.Drawing.Point(250, 219);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(54, 24);
            this.label5.TabIndex = 8;
            this.label5.Text = "Motif:";
            // 
            // motif
            // 
            this.motif.Location = new System.Drawing.Point(310, 228);
            this.motif.Name = "motif";
            this.motif.Size = new System.Drawing.Size(478, 20);
            this.motif.TabIndex = 9;
            // 
            // rdv
            // 
            this.rdv.BackColor = System.Drawing.Color.Lime;
            this.rdv.Location = new System.Drawing.Point(397, 374);
            this.rdv.Name = "rdv";
            this.rdv.Size = new System.Drawing.Size(381, 23);
            this.rdv.TabIndex = 10;
            this.rdv.Text = "Prendre rendez-vous";
            this.rdv.UseVisualStyleBackColor = false;
            this.rdv.Click += new System.EventHandler(this.rdv_Click);
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label6.Location = new System.Drawing.Point(244, 73);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(56, 24);
            this.label6.TabIndex = 11;
            this.label6.Text = "login:";
            // 
            // login
            // 
            this.login.Location = new System.Drawing.Point(310, 73);
            this.login.Name = "login";
            this.login.Size = new System.Drawing.Size(478, 20);
            this.login.TabIndex = 12;
            // 
            // retour
            // 
            this.retour.BackColor = System.Drawing.Color.Lime;
            this.retour.Location = new System.Drawing.Point(12, 374);
            this.retour.Name = "retour";
            this.retour.Size = new System.Drawing.Size(320, 23);
            this.retour.TabIndex = 15;
            this.retour.Text = "Retour";
            this.retour.UseVisualStyleBackColor = false;
            this.retour.Click += new System.EventHandler(this.retour_Click);
            // 
            // dataGridView1
            // 
            this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView1.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.nom,
            this.prenom});
            this.dataGridView1.Location = new System.Drawing.Point(310, 282);
            this.dataGridView1.Name = "dataGridView1";
            this.dataGridView1.Size = new System.Drawing.Size(243, 86);
            this.dataGridView1.TabIndex = 16;
            this.dataGridView1.CellContentClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dataGridView1_CellContentClick);
            // 
            // nom
            // 
            this.nom.HeaderText = "Nom";
            this.nom.Name = "nom";
            // 
            // prenom
            // 
            this.prenom.HeaderText = "Prenom";
            this.prenom.Name = "prenom";
            // 
            // prendreRdv
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Silver;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.dataGridView1);
            this.Controls.Add(this.retour);
            this.Controls.Add(this.login);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.rdv);
            this.Controls.Add(this.motif);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.lieu);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.heure);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.date);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.pictureBox1);
            this.Name = "prendreRdv";
            this.Text = "prendreRdv";
            this.Load += new System.EventHandler(this.prendreRdv_Load);
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox date;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox heure;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.TextBox lieu;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.TextBox motif;
        private System.Windows.Forms.Button rdv;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.TextBox login;
        private System.Windows.Forms.Button retour;
        private System.Windows.Forms.DataGridView dataGridView1;
        private System.Windows.Forms.DataGridViewTextBoxColumn nom;
        private System.Windows.Forms.DataGridViewTextBoxColumn prenom;
    }
}