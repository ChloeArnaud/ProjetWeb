DROP SCHEMA IF EXISTS projetWeb;
CREATE SCHEMA projetWeb;

CREATE TABLE Commande(
   idCommande INTEGER AUTO_INCREMENT,
   dateCommande DATETIME,
   PRIMARY KEY(idCommande)
);

CREATE TABLE Categorie(
   idCategorie INTEGER AUTO_INCREMENT,
   couleurCategorie VARCHAR(50) NOT NULL,
   NomCategorie VARCHAR(50) NOT NULL,
   DescriptionCategorie VARCHAR(50) NOT NULL,
   imgCategorie VARCHAR(150),
   PRIMARY KEY(idCategorie)
);

CREATE TABLE Paiement(
   idPaiement INTEGER AUTO_INCREMENT,
   montantPaiement DECIMAL(15,2) NOT NULL,
   idCommande INTEGER,
   PRIMARY KEY(idPaiement),
   FOREIGN KEY(idCommande) REFERENCES Commande(idCommande)
);

CREATE TABLE Client(
   idClient INTEGER AUTO_INCREMENT,
   NomClient DATETIME NOT NULL,
   PrenomClient VARCHAR(50) NOT NULL,
   DateDeNaissanceClient DATE NOT NULL,
   AdresseClient VARCHAR(50) NOT NULL,
   idCommande INTEGER,
   PRIMARY KEY(idClient),
   UNIQUE(NomClient),
   UNIQUE(PrenomClient),
   FOREIGN KEY(idCommande) REFERENCES Commande(idCommande)
);

CREATE TABLE Administrateur(
   idAdmin INTEGER AUTO_INCREMENT,
   NomAdmin VARCHAR(50) NOT NULL,
   PrenomAdmin VARCHAR(50) NOT NULL,
   idClient INTEGER,
   PRIMARY KEY(idAdmin),
   UNIQUE(NomAdmin),
   UNIQUE(PrenomAdmin),
   FOREIGN KEY(idClient) REFERENCES Client(idClient)
);

CREATE TABLE Produit(
   idProduit INTEGER AUTO_INCREMENT,
   NomProduit VARCHAR(50) NOT NULL,
   uniteStockProduit INT,
   prixProduit DECIMAL(15,2) NOT NULL,
   imageProduit VARCHAR(150),
   idCategorie INTEGER,
   PRIMARY KEY(idProduit),
   UNIQUE(NomProduit),
   FOREIGN KEY(idCategorie) REFERENCES Categorie(idCategorie)
);

CREATE TABLE Composer(
   idProduit INTEGER AUTO_INCREMENT,
   idCommande INTEGER,
   Prix DECIMAL(15,2) NOT NULL,
   Quantite DECIMAL(15,2),
   Total_HT DECIMAL(15,2),
   TVA INT,
   Total_TTC DECIMAL(15,2),
   PRIMARY KEY(idProduit, idCommande),
   FOREIGN KEY(idProduit) REFERENCES Produit(idProduit),
   FOREIGN KEY(idCommande) REFERENCES Commande(idCommande)
);