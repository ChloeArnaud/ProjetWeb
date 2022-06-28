CREATE TABLE Produit(
   idProduit VARCHAR(5),
   NomProduit VARCHAR(50) NOT NULL,
   unitéStockProduit INT,
   prixProduit DECIMAL(15,2) NOT NULL,
   imageProduit img,
   PRIMARY KEY(idProduit),
   UNIQUE(NomProduit)
);

CREATE TABLE Commande(
   idCommande VARCHAR(5),
   dateCommande DATETIME,
   PRIMARY KEY(idCommande)
);

CREATE TABLE Catégorie(
   idCatégorie VARCHAR(50),
   NomCatégorie VARCHAR(50) NOT NULL,
   DescriptionCatégorie VARCHAR(50) NOT NULL,
   imgCatégorie img NOT NULL,
   idProduit VARCHAR(5) NOT NULL,
   PRIMARY KEY(idCatégorie),
   FOREIGN KEY(idProduit) REFERENCES Produit(idProduit)
);

CREATE TABLE Paiement(
   idPaiement VARCHAR(5),
   montantPaiement DECIMAL(15,2) NOT NULL,
   idCommande VARCHAR(5) NOT NULL,
   PRIMARY KEY(idPaiement),
   FOREIGN KEY(idCommande) REFERENCES Commande(idCommande)
);

CREATE TABLE Client(
   idClient VARCHAR(50),
   IdentifiantClient VARCHAR(50),
   NomClient DATETIME NOT NULL,
   PrénomClient VARCHAR(50) NOT NULL,
   DateDeNaissanceClient DATE NOT NULL,
   AdresseClient VARCHAR(50) NOT NULL,
   MdpClient VARCHAR(8) NOT NULL,
   idCommande VARCHAR(5) NOT NULL,
   PRIMARY KEY(idClient, IdentifiantClient),
   UNIQUE(NomClient),
   UNIQUE(PrénomClient),
   FOREIGN KEY(idCommande) REFERENCES Commande(idCommande)
);

CREATE TABLE Administrateur(
   idAdmin VARCHAR(50),
   IdentifiantAdmin VARCHAR(50),
   NomAdmin VARCHAR(50) NOT NULL,
   PrénomAdmin VARCHAR(50) NOT NULL,
   MdpAdmin VARCHAR(8) NOT NULL,
   idClient VARCHAR(50) NOT NULL,
   IdentifiantClient VARCHAR(50) NOT NULL,
   PRIMARY KEY(idAdmin, IdentifiantAdmin),
   UNIQUE(NomAdmin),
   UNIQUE(PrénomAdmin),
   FOREIGN KEY(idClient, IdentifiantClient) REFERENCES Client(idClient, IdentifiantClient)
);

CREATE TABLE Composer(
   idProduit VARCHAR(5),
   idCommande VARCHAR(5),
   Prix DECIMAL(15,2) NOT NULL,
   Quantité DECIMAL(15,2),
   Total_HT DECIMAL(15,2),
   TVA INT,
   Total_TTC DECIMAL(15,2),
   PRIMARY KEY(idProduit, idCommande),
   FOREIGN KEY(idProduit) REFERENCES Produit(idProduit),
   FOREIGN KEY(idCommande) REFERENCES Commande(idCommande)
);

