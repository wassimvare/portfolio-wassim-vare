﻿namespace gsb2
{
    partial class afficheRdv
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(afficheRdv));
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.label1 = new System.Windows.Forms.Label();
            this.button1 = new System.Windows.Forms.Button();
            this.button2 = new System.Windows.Forms.Button();
            this.dataGridView1 = new System.Windows.Forms.DataGridView();
            this.login = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.date = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.heure = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.lieu = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.motif = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.nomMedecin = new System.Windows.Forms.DataGridViewTextBoxColumn();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).BeginInit();
            this.SuspendLayout();
            // 
            // pictureBox1
            // 
            this.pictureBox1.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox1.Image")));
            this.pictureBox1.Location = new System.Drawing.Point(12, 12);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(194, 125);
            this.pictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox1.TabIndex = 0;
            this.pictureBox1.TabStop = false;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(212, 12);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(223, 31);
            this.label1.TabIndex = 1;
            this.label1.Text = "Les rendez-vous:";
            this.label1.Click += new System.EventHandler(this.label1_Click);
            // 
            // button1
            // 
            this.button1.BackColor = System.Drawing.Color.Lime;
            this.button1.Location = new System.Drawing.Point(485, 349);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(224, 23);
            this.button1.TabIndex = 3;
            this.button1.Text = "Retour.";
            this.button1.UseVisualStyleBackColor = false;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // button2
            // 
            this.button2.BackColor = System.Drawing.Color.Lime;
            this.button2.Location = new System.Drawing.Point(61, 349);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(242, 23);
            this.button2.TabIndex = 5;
            this.button2.Text = "Afficher";
            this.button2.UseVisualStyleBackColor = false;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // dataGridView1
            // 
            this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView1.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.login,
            this.date,
            this.heure,
            this.lieu,
            this.motif,
            this.nomMedecin});
            this.dataGridView1.Location = new System.Drawing.Point(61, 172);
            this.dataGridView1.Name = "dataGridView1";
            this.dataGridView1.Size = new System.Drawing.Size(727, 150);
            this.dataGridView1.TabIndex = 6;
            this.dataGridView1.CellContentClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dataGridView1_CellContentClick_1);
            // 
            // login
            // 
            this.login.HeaderText = "Login";
            this.login.Name = "login";
            this.login.SortMode = System.Windows.Forms.DataGridViewColumnSortMode.NotSortable;
            // 
            // date
            // 
            this.date.HeaderText = "Date";
            this.date.Name = "date";
            // 
            // heure
            // 
            this.heure.HeaderText = "Heure";
            this.heure.Name = "heure";
            // 
            // lieu
            // 
            this.lieu.HeaderText = "Lieu";
            this.lieu.Name = "lieu";
            // 
            // motif
            // 
            this.motif.HeaderText = "Motif";
            this.motif.Name = "motif";
            // 
            // nomMedecin
            // 
            this.nomMedecin.HeaderText = "Nom medecin";
            this.nomMedecin.Name = "nomMedecin";
            // 
            // afficheRdv
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Silver;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.pictureBox1);
            this.Controls.Add(this.dataGridView1);
            this.Name = "afficheRdv";
            this.Text = "afficheRdv";
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.DataGridView dataGridView1;
        private System.Windows.Forms.DataGridViewTextBoxColumn login;
        private System.Windows.Forms.DataGridViewTextBoxColumn date;
        private System.Windows.Forms.DataGridViewTextBoxColumn heure;
        private System.Windows.Forms.DataGridViewTextBoxColumn lieu;
        private System.Windows.Forms.DataGridViewTextBoxColumn motif;
        private System.Windows.Forms.DataGridViewTextBoxColumn nomMedecin;
    }
}