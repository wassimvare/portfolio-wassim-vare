namespace gsb2
{
    partial class afficheCompta
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(afficheCompta));
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.label1 = new System.Windows.Forms.Label();
            this.afficheRdv = new System.Windows.Forms.Button();
            this.deconnexion = new System.Windows.Forms.Button();
            this.button1 = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.SuspendLayout();
            // 
            // pictureBox1
            // 
            this.pictureBox1.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox1.Image")));
            this.pictureBox1.Location = new System.Drawing.Point(13, 13);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(190, 124);
            this.pictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox1.TabIndex = 0;
            this.pictureBox1.TabStop = false;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(238, 13);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(302, 31);
            this.label1.TabIndex = 1;
            this.label1.Text = "Gestion de rendez-vous";
            // 
            // afficheRdv
            // 
            this.afficheRdv.BackColor = System.Drawing.Color.Lime;
            this.afficheRdv.Location = new System.Drawing.Point(87, 227);
            this.afficheRdv.Name = "afficheRdv";
            this.afficheRdv.Size = new System.Drawing.Size(247, 23);
            this.afficheRdv.TabIndex = 3;
            this.afficheRdv.Text = "Afficher les rendez-vous";
            this.afficheRdv.UseVisualStyleBackColor = false;
            this.afficheRdv.Click += new System.EventHandler(this.afficheRdv_Click);
            // 
            // deconnexion
            // 
            this.deconnexion.BackColor = System.Drawing.Color.Lime;
            this.deconnexion.Location = new System.Drawing.Point(244, 318);
            this.deconnexion.Name = "deconnexion";
            this.deconnexion.Size = new System.Drawing.Size(296, 23);
            this.deconnexion.TabIndex = 4;
            this.deconnexion.Text = "Deconnexion";
            this.deconnexion.UseVisualStyleBackColor = false;
            this.deconnexion.Click += new System.EventHandler(this.deconnexion_Click);
            // 
            // button1
            // 
            this.button1.BackColor = System.Drawing.Color.Lime;
            this.button1.Location = new System.Drawing.Point(476, 227);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(254, 23);
            this.button1.TabIndex = 5;
            this.button1.Text = "Enregistrer un medecin";
            this.button1.UseVisualStyleBackColor = false;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // afficheCompta
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Silver;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.deconnexion);
            this.Controls.Add(this.afficheRdv);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.pictureBox1);
            this.Name = "afficheCompta";
            this.Text = "afficheCompta";
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button afficheRdv;
        private System.Windows.Forms.Button deconnexion;
        private System.Windows.Forms.Button button1;
    }
}