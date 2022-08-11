namespace gsb2
{
    partial class affichageVisit
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(affichageVisit));
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.label1 = new System.Windows.Forms.Label();
            this.prendreRdv = new System.Windows.Forms.Button();
            this.button1 = new System.Windows.Forms.Button();
            this.AfficheMdc = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.SuspendLayout();
            // 
            // pictureBox1
            // 
            this.pictureBox1.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox1.Image")));
            this.pictureBox1.Location = new System.Drawing.Point(13, 13);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(191, 125);
            this.pictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox1.TabIndex = 0;
            this.pictureBox1.TabStop = false;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(244, 13);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(296, 31);
            this.label1.TabIndex = 1;
            this.label1.Text = "gestion de rendez-vous";
            this.label1.Click += new System.EventHandler(this.Label1_Click);
            // 
            // prendreRdv
            // 
            this.prendreRdv.BackColor = System.Drawing.Color.Lime;
            this.prendreRdv.Location = new System.Drawing.Point(129, 206);
            this.prendreRdv.Name = "prendreRdv";
            this.prendreRdv.Size = new System.Drawing.Size(226, 23);
            this.prendreRdv.TabIndex = 2;
            this.prendreRdv.Text = "Prendre rendez-vous";
            this.prendreRdv.UseVisualStyleBackColor = false;
            this.prendreRdv.Click += new System.EventHandler(this.PrendreRdv_Click);
            // 
            // button1
            // 
            this.button1.BackColor = System.Drawing.Color.Lime;
            this.button1.Location = new System.Drawing.Point(250, 301);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(290, 23);
            this.button1.TabIndex = 4;
            this.button1.Text = "Deconnexion";
            this.button1.UseVisualStyleBackColor = false;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // AfficheMdc
            // 
            this.AfficheMdc.BackColor = System.Drawing.Color.Lime;
            this.AfficheMdc.Location = new System.Drawing.Point(436, 206);
            this.AfficheMdc.Name = "AfficheMdc";
            this.AfficheMdc.Size = new System.Drawing.Size(226, 23);
            this.AfficheMdc.TabIndex = 5;
            this.AfficheMdc.Text = "Afficher les medecins";
            this.AfficheMdc.UseVisualStyleBackColor = false;
            this.AfficheMdc.Click += new System.EventHandler(this.AfficheMdc_Click);
            // 
            // affichageVisit
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Silver;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.AfficheMdc);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.prendreRdv);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.pictureBox1);
            this.Name = "affichageVisit";
            this.Text = "affichageVisit";
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button prendreRdv;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Button AfficheMdc;
    }
}