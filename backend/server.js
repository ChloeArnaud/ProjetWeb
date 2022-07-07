const express = require('express');
const app = express();
const port = 3000;
const router = express.Router()
const mysql = require('mysql')
const cors = require('cors');
app.use(cors());

//------------------- MySQL -------------------//
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'projetWeb',
    port: 3307,

})

//----- CONNECT -----//
connection.connect();

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
})

//-------------------------------------------------------------------//
//---------------------------- CATEGORIE ----------------------------//
//-------------------------------------------------------------------//

//----- INSERT ---- //
let InsertCategorie = (data, result) => {

    // Query to insert multiple rows
    let query = 'INSERT INTO CATEGORIE(couleurCategorie, NomCategorie, DescriptionCategorie, imgCategorie) VALUES ?;';

    connection.query(query, [
        [data]
    ], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("InsertCategorie: ", res);
        result(null, res);
    });

};

// TEST INSERT  
var dataCatg = [
    ['#EDAD9E', 'Ecriture', 'Description de la catégorie écriture', ''],
    ['#A4CBC3', 'Cahier, carnet, feuille', 'Description de la catégorie écriture cahiers, carnets, feuilles', ''],
    ['#E5BB70', 'Agenda', 'Description de la catégorie agenda', ''],
    ['#599391', 'Bureau', 'Description de la catégorie bureau', ''],
    ['#E17F58', 'Adhésifs', 'Description de la catégorie adhésif', ''],
    ['#EDAD9E', 'Peinture', 'Description de la catégorie peinture', '']
];
// for (let i = 0; i < dataCatg.length; i++) {
//     console.log(InsertCategorie(dataCatg[i]))
// }


//------ GET ALL CATEGORIES -----//
let getLesCategories = (result) => {
    let query = "SELECT * FROM CATEGORIE";
    connection.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        //console.log("LesCategories: ", res);
        result(null, res);
    });
};

//-------- GET CATEGORIE BY ID------//

let getCategoriebyID = (id, result) => {

    // Query to select all rows
    let query = 'SELECT * FROM CATEGORIE WHERE idCategorie = ' + id + ' ;';

    connection.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("getCategorieByID: ", res);
        result(null, res);
    });
};


//-------- REMOVE CATEGORIE BY ID------//

let removeCategorieByID = (id, result) => {

    // Query to select all rows
    let query = 'DELETE FROM CATEGORIE WHERE idCategorie = ' + id + ' ;';

    connection.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("removeCategorieByID: ", res);
        result(null, res);
    });
};


//-------------------------------------------------------------------//
//----------------------------  PRODUIT  ----------------------------//
//-------------------------------------------------------------------//

//----- INSERT -----//
let InsertProduit = (data, result) => {

    // Query to insert multiple rows
    var query = 'INSERT INTO PRODUIT (NomProduit, uniteStockProduit, prixProduit, imgProduit, idCategorie) VALUES ?;';

    connection.query(query, [
        [data]
    ], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("InsertProduit: ", res);
        result(null, res);
    });

};

//----- GET ALL PRODUITS -----//
let getLesProduits = (result) => {
    // Query to select all rows
    var query = 'SELECT * FROM PRODUIT;';

    connection.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("LesProduits: ", res);
        result(null, res);
    });
};


//-------- GET PRODUIT BY ID------//

let getProduitByID = (id, result) => {

    // Query to select all rows
    var query = 'SELECT * FROM PRODUIT WHERE idProduit = ' + id + ' ;';

    connection.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("getProduitByID: ", res);
        result(null, res);
    });
};


//-------- REMOVE PRODUIT BY ID------//

let removeProduitByID = (id, result) => {

    // Query to select all rows
    var query = 'DELETE FROM PRODUIT WHERE idProduit = ' + id + ' ;';

    connection.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("removeByID: ", res);
        result(null, res);
    });
};


//-------------------------------------------------------------------//
//---------------------------- PAIEMENT -----------------------------//
//-------------------------------------------------------------------//

//----- INSERT -----//
let InsertPaiement = (data, result) => {

    // Query to insert multiple rows
    var query = 'INSERT INTO PAIEMENT (montantPaiement, idCommande) VALUES ?;';

    connection.query(query, [
        [data]
    ], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("InsertPaiement: ", res);
        result(null, res);
    });

};


//----- GET ALL PAIEMENTS -----//
let getLesPaiements = (result) => {
    // Query to select all rows
    var query = 'SELECT * FROM PAIEMENT;';

    connection.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("LesPaiements: ", res);
        result(null, res);
    });
};

//-------- GET PAIEMENT BY ID------//

let getPaiementByID = (id, result) => {

    // Query to select all rows
    var query = 'SELECT * FROM PAIEMENT WHERE idPaiement = ' + id + ' ;';

    connection.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("getPaiementByID: ", res);
        result(null, res);
    });
};

//-------- REMOVE PAIEMENT BY ID------//

let removePaiementByID = (id, result) => {

    // Query to select all rows
    var query = 'DELETE FROM PAIEMENT WHERE idPaiement = ' + id + ' ;';

    connection.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("removePaiementByID: ", res);
        result(null, res);
    });
};

//-------------------------------------------------------------------//
//----------------------------   CLIENT  ----------------------------//
//-------------------------------------------------------------------//

//----- INSERT CLIENT -----//
let InsertClient = (data, result) => {

    // Query to insert multiple rows
    var query = 'INSERT INTO CLIENT (NomClient, prenomClient, DateDeNaissanceClient, AdresseClient, idCommande) VALUES ?;';

    connection.query(query, [
        [data]
    ], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("InsertClient: ", res);
        result(null, res);
    });

};

//----- GET ALL CLIENT -----//
let getLesClients = (result) => {
    // Query to select all rows
    var query = 'SELECT * FROM CLIENT;';

    connection.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("LesClients: ", res);
        result(null, res);
    });
};

//-------- GET CLIENT BY ID------//

let getClientbyID = (id, result) => {

    // Query to select all rows
    var query = 'SELECT * FROM CLIENT WHERE idClient = ' + id + ' ;';

    connection.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("getClientByID: ", res);
        result(null, res);
    });
};


//-------- REMOVE CLIENT BY ID------//

let removeClientByID = (id, result) => {

    // Query to select all rows
    var query = 'DELETE FROM CLIENT WHERE idClient = ' + id + ' ;';

    connection.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("removeClientByID: ", res);
        result(null, res);
    });
};

//-------------------------------------------------------------------//
//----------------------------  COMMANDE ----------------------------//
//-------------------------------------------------------------------//

//----- INSERT COMMANDE-----//
let InsertCommande = (data, result) => {

    // Query to insert multiple rows
    var query = 'INSERT INTO COMMANDE (dateCommande) VALUES ?;';

    connection.query(query, [
        [data]
    ], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("InsertCommande: ", res);
        result(null, res);
    });

};

//----- GET ALL CLIENT -----//
let getLesCommandes = (result) => {
    // Query to select all rows
    var query = 'SELECT * FROM COMMANDE;';

    connection.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("LesCommandes: ", res);
        result(null, res);
    });
};


//-------- GET COMMANDE BY ID------//

let getCommandebyID = (id, result) => {

    // Query to select all rows
    var query = 'SELECT * FROM COMMANDE WHERE idCommande = ' + id + ' ;';

    connection.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("getCommandeByID: ", res);
        result(null, res);
    });
};


//-------- REMOVE COMMANDE BY ID------//

let removeCommandeByID = (id, result) => {

    // Query to select all rows
    var query = 'DELETE FROM COMMANDE WHERE idCommande = ' + id + ' ;';

    connection.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("removeCommandeByID: ", res);
        result(null, res);
    });
};





//----------- END CONNEXION --------//
// connection.end();

//----------------------------------------------------//
//----------------- APP GET --------------------------//
//----------------------------------------------------//

//---------------------- Categories ------------------//
//insert
app.post('/insertcategorie', (req, res) => {
    InsertCategorie(data, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        else res.send(data);
    });
});

//getAll
app.get('/allcategories', (req, res) => {
    getLesCategories((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        else res.send(data);
    });
});

//getByID
app.get('/getcategoriebyid', (req, res) => {
    getCategoriebyID(id, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        else res.send(data);
    });
});

//removeByID
app.get('/removecategoriesbyid', (req, res) => {
    removeCategorieByID(id, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        else res.send(data);
    });
});

//---------------------- Produits ------------------//
//insert
app.get('/insertproduit', (req, res) => {
    InsertProduit(data, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        else res.send(data);
    });
});

//getAll
app.get('/allproduits', (req, res) => {
    getLesProduits((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        else res.send(data);
    });
});

//getByID
app.get('/getproduitbyid', (req, res) => {
    getProduitByID(id, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        else res.send(data);
    });
});

//removeByID
app.get('/removeproduitsbyid', (req, res) => {
    removeProduitByID(id, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        else res.send(data);
    });
});


//---------------------- Paiement ------------------//
//insert
app.get('/insertpaiement', (req, res) => {
    InsertProduit(data, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        else res.send(data);
    });
});

//getAll
app.get('/allpaiements', (req, res) => {
    getLesPaiements((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        else res.send(data);
    });
});

//getByID
app.get('/getpaiementbyid', (req, res) => {
    getPaiementByID(id, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        else res.send(data);
    });
});

//removeByID
app.get('/removepaiementbyid', (req, res) => {
    removePaiementByID(id, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        else res.send(data);
    });
});

//---------------------- Client ------------------//
//insert
app.get('/insertclient', (req, res) => {
    InsertClient(data, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        else res.send(data);
    });
});

//getAll
app.get('/allclients', (req, res) => {
    getLesClients((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        else res.send(data);
    });
});

//getByID
app.get('/getclientbyid', (req, res) => {
    getClientbyID(id, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        else res.send(data);
    });
});

//removeByID
app.get('/removeclientbyid', (req, res) => {
    removeClientByID(id, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        else res.send(data);
    });
});

//---------------------- Commande ------------------//
//insert
app.get('/insertcommande', (req, res) => {
    InsertCommande(data, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        else res.send(data);
    });
});

//getAll
app.get('/allcommandes', (req, res) => {
    getLesCommandes((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        else res.send(data);
    });
});

//getByID
app.get('/getcommandebyid', (req, res) => {
    getCommandebyID(id, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        else res.send(data);
    });
});

//removeByID
app.get('/removecommandebyid', (req, res) => {
    removeCommandeByID(id, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        else res.send(data);
    });
});

// // Add Access Control Allow Origin headers
// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.fetch('http://localhost:8080', { mode: 'no-cors' });
//     next();
// });

//---- TEST IF THE APP IS RUNNING ----//
app.listen(port, () => console.log('app running'));