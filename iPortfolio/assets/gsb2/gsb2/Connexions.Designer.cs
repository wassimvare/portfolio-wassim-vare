namespace gsb2
{
    partial class Connexions
    {
        /// <summary>
        /// Variable nécessaire au concepteur.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Nettoyage des ressources utilisées.
        /// </summary>
        /// <param name="disposing">true si les ressources managées doivent être supprimées ; sinon, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Code généré par le Concepteur Windows Form

        /// <summary>
        /// Méthode requise pour la prise en charge du concepteur - ne modifiez pas
        /// le contenu de cette méthode avec l'éditeur de code.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Connexions));
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.entreId = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.entreMdp = new System.Windows.Forms.TextBox();
            this.connex = new System.Windows.Forms.Button();
            this.quitter = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.SuspendLayout();
            // 
            // pictureBox1
            // 
            this.pictureBox1.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox1.Image")));
            this.pictureBox1.Location = new System.Drawing.Point(303, 12);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(192, 124);
            this.pictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox1.TabIndex = 0;
            this.pictureBox1.TabStop = false;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(297, 154);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(220, 31);
            this.label1.TabIndex = 1;
            this.label1.Text = "Connectez-vous:";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(303, 207);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(93, 24);
            this.label2.TabIndex = 2;
            this.label2.Text = "Identifiant:";
            // 
            // entreId
            // 
            this.entreId.Location = new System.Drawing.Point(403, 210);
            this.entreId.Name = "entreId";
            this.entreId.Size = new System.Drawing.Size(114, 20);
            this.entreId.TabIndex = 3;
            this.entreId.TextChanged += new System.EventHandler(this.entreId_TextChanged);
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.Location = new System.Drawing.Point(307, 256);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(123, 24);
            this.label3.TabIndex = 4;
            this.label3.Text = "Mot de passe";
            // 
            // entreMdp
            // 
            this.entreMdp.Location = new System.Drawing.Point(437, 259);
            this.entreMdp.Name = "entreMdp";
            this.entreMdp.PasswordChar = '*';
            this.entreMdp.Size = new System.Drawing.Size(122, 20);
            this.entreMdp.TabIndex = 5;
            this.entreMdp.TextChanged += new System.EventHandler(this.entreMdp_TextChanged);
            // 
            // connex
            // 
            this.connex.BackColor = System.Drawing.Color.Lime;
            this.connex.Location = new System.Drawing.Point(140, 333);
            this.connex.Name = "connex";
            this.connex.Size = new System.Drawing.Size(256, 23);
            this.connex.TabIndex = 6;
            this.connex.Text = "Connexion";
            this.connex.UseVisualStyleBackColor = false;
            this.connex.Click += new System.EventHandler(this.connex_Click);
            // 
            // quitter
            // 
            this.quitter.BackColor = System.Drawing.Color.Lime;
            this.quitter.Location = new System.Drawing.Point(452, 332);
            this.quitter.Name = "quitter";
            this.quitter.Size = new System.Drawing.Size(268, 23);
            this.quitter.TabIndex = 7;
            this.quitter.Text = "Quitter";
            this.quitter.UseVisualStyleBackColor = false;
            this.quitter.Click += new System.EventHandler(this.quitter_Click);
            // 
            // Connexions
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Silver;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.quitter);
            this.Controls.Add(this.connex);
            this.Controls.Add(this.entreMdp);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.entreId);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.pictureBox1);
            this.Name = "Connexions";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Connexions_Load);
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox entreId;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox entreMdp;
        private System.Windows.Forms.Button connex;
        private System.Windows.Forms.Button quitter;
    }
}

