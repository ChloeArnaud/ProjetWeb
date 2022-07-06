const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql')

//------------------- MySQL -------------------//
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'projetWeb',
    port: 8889,

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
let InsertCategorie = (data) => {

    // Query to insert multiple rows
    var query = 'INSERT INTO CATEGORIE(couleurCategorie, NomCategorie, DescriptionCategorie, imgCategorie) VALUES ?;';

    // Values to be inserted
    // var values = [
    //     ['#EDAD9E', 'Ecriture', 'Description de la catégorie écriture', ''],
    //     ['#A4CBC3', 'Cahier, carnet, feuille', 'Description de la catégorie écriture cahiers, carnets, feuilles', ''],
    //     ['#E5BB70', 'Agenda', 'Description de la catégorie agenda', ''],
    //     ['#599391', 'Bureau', 'Description de la catégorie bureau', ''],
    //     ['#E17F58', 'Adhésifs', 'Description de la catégorie adhésif', ''],
    //     ['#EDAD9E', 'Peinture', 'Description de la catégorie peinture', '']
    // ];

    // Executing the query
    connection.query(query, [
        [data]
    ], function(err, rows) {
        if (err) throw err;
        console.log("Row inserted with id = " +
            rows.insertId);
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
let getLesCategories = () => {

    // Query to select all rows
    var query = 'SELECT * FROM CATEGORIE;';
    let resquery = []
        // Executing the query
    connection.query(query, function(err, rows, fields) {
        if (err) throw err;
        resquery = Object.values(JSON.parse(JSON.stringify(rows)));
        return resquery
    })
    return resquery;
};
// TEST  
//`console.log(getLesCategories())

//-------- GET CATEGORIE BY ID------//

let getCategoriebyID = (id) => {

    // Query to select all rows
    var query = 'SELECT * FROM CATEGORIE WHERE idCategorie = ' + id + ' ;';

    // Executing the query
    connection.query(query, function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
        return rows;
    })
};
// TEST  
//console.log(getCategoriebyID(10))

//-------- REMOVE CATEGORIE BY ID------//

let removeCategorieByID = (id) => {

    // Query to select all rows
    var query = 'DELETE FROM CATEGORIE WHERE idCategorie = ' + id + ' ;';

    // Executing the query
    connection.query(query, function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
        return rows;
    })
};
// TEST  
// for (let i = 5; i < 21; i++) {
//     console.log(removeCategorieByID(i))
// }


//-------------------------------------------------------------------//
//----------------------------  PRODUIT  ----------------------------//
//-------------------------------------------------------------------//

//----- INSERT -----//
let InsertProduit = (data) => {

    // Query to insert multiple rows
    var query = 'INSERT INTO PRODUIT (NomProduit, uniteStockProduit, prixProduit, imgProduit, idCategorie) VALUES ?;';

    // Executing the query
    connection.query(query, [
        [data]
    ], function(err, rows) {
        if (err) throw err;
        console.log("Row inserted with id = " +
            rows.insertId);
    });

};
// TEST  
//var dataProd = ['#EDAD9E', 'Ecriture', 'Description de la catégorie écriture', 'path'];
//console.log(InsertProduit(data))

//----- GET ALL PRODUITS -----//
let getLesProduits = () => {
    // Query to select all rows
    var query = 'SELECT * FROM PRODUIT;';

    // Executing the query
    connection.query(query, function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
        return rows;
    })
};
// TEST  
//console.log(getLesProduits())

//-------- GET PRODUIT BY ID------//

let getProduitByID = (id) => {

    // Query to select all rows
    var query = 'SELECT * FROM PRODUIT WHERE idProduit = ' + id + ' ;';

    // Executing the query
    connection.query(query, function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
        return rows;
    })
};
// TEST  
//console.log(getProduitByID(10))

//-------- REMOVE PRODUIT BY ID------//

let removeProduitByID = (id) => {

    // Query to select all rows
    var query = 'DELETE FROM PRODUIT WHERE idProduit = ' + id + ' ;';

    // Executing the query
    connection.query(query, function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
        return rows;
    })
};
// TEST   
// for (let i = 5; i < 21; i++) {
//     console.log(removeProduitByID(i))
// }

//-------------------------------------------------------------------//
//---------------------------- PAIEMENT -----------------------------//
//-------------------------------------------------------------------//

//----- INSERT -----//
let InsertPaiement = (data) => {

    // Query to insert multiple rows
    var query = 'INSERT INTO PAIEMENT (montantPaiement, idCommande) VALUES ?;';

    // Executing the query
    connection.query(query, [
        [data]
    ], function(err, rows) {
        if (err) throw err;
        console.log("Row inserted with id = " +
            rows.insertId);
    });

};
// TEST INSERT  
//var dataPaiement = ['#EDAD9E', 'Ecriture', 'Description de la catégorie écriture', 'path'];
//console.log(InsertPaiement(data))

//----- GET ALL PAIEMENTS -----//
let getLesPaiements = () => {
    // Query to select all rows
    var query = 'SELECT * FROM PAIEMENT;';

    // Executing the query
    connection.query(query, function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
        return rows;
    })
};
// TEST  
//console.log(getLesPaiements())

//-------- GET PAIEMENT BY ID------//

let getPaiementByID = (id) => {

    // Query to select all rows
    var query = 'SELECT * FROM PAIEMENT WHERE idPaiement = ' + id + ' ;';

    // Executing the query
    connection.query(query, function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
        return rows;
    })
};
// TEST  
//console.log(getPaiementByID(10))

//-------- REMOVE PAIEMENT BY ID------//

let removePaiementByID = (id) => {

    // Query to select all rows
    var query = 'DELETE FROM PAIEMENT WHERE idPaiement = ' + id + ' ;';

    // Executing the query
    connection.query(query, function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
        return rows;
    })
};
// TEST   
// for (let i = 5; i < 21; i++) {
//     console.log(removePaiementByID(i))
// }

//-------------------------------------------------------------------//
//----------------------------   CLIENT  ----------------------------//
//-------------------------------------------------------------------//

//----- INSERT CLIENT -----//
let InsertClient = (data) => {

    // Query to insert multiple rows
    var query = 'INSERT INTO CLIENT (NomClient, prenomClient, DateDeNaissanceClient, AdresseClient, idCommande) VALUES ?;';

    // Executing the query
    connection.query(query, [
        [data]
    ], function(err, rows) {
        if (err) throw err;
        console.log("Row inserted with id = " +
            rows.insertId);
    });

};
// TEST INSERT  
//var dataClient = ['#EDAD9E', 'Ecriture', 'Description de la catégorie écriture', 'path'];
//console.log(InsertClient(data))

//----- GET ALL CLIENT -----//
let getLesClients = () => {
    // Query to select all rows
    var query = 'SELECT * FROM CLIENT;';

    // Executing the query
    connection.query(query, function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
        return rows;
    })
};
// TEST  
//console.log(getLesClients())

//-------- GET CLIENT BY ID------//

let getClientbyID = (id) => {

    // Query to select all rows
    var query = 'SELECT * FROM CLIENT WHERE idClient = ' + id + ' ;';

    // Executing the query
    connection.query(query, function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
        return rows;
    })
};
// TEST  
//console.log(getClientbyID(10))

//-------- REMOVE CLIENT BY ID------//

let removeClientByID = (id) => {

    // Query to select all rows
    var query = 'DELETE FROM CLIENT WHERE idClient = ' + id + ' ;';

    // Executing the query
    connection.query(query, function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
        return rows;
    })
};
// TEST   
// for (let i = 5; i < 21; i++) {
//     console.log(removeClientByID(i))
// }

//-------------------------------------------------------------------//
//----------------------------  COMMANDE ----------------------------//
//-------------------------------------------------------------------//

//----- INSERT COMMANDE-----//
let InsertCommande = (data) => {

    // Query to insert multiple rows
    var query = 'INSERT INTO COMMANDE (dateCommande) VALUES ?;';

    // Executing the query
    connection.query(query, [
        [data]
    ], function(err, rows) {
        if (err) throw err;
        console.log("Row inserted with id = " +
            rows.insertId);
    });

};
// TEST INSERT  
//var dataCommande = ['#EDAD9E', 'Ecriture', 'Description de la catégorie écriture', 'path'];
//console.log(InsertCommande(data))

//----- GET ALL CLIENT -----//
let getLesCommandes = () => {
    // Query to select all rows
    var query = 'SELECT * FROM COMMANDE;';

    // Executing the query
    connection.query(query, function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
        return rows;
    })
};
// TEST  
//console.log(getLesCommandes())

//-------- GET COMMANDE BY ID------//

let getCommandebyID = (id) => {

    // Query to select all rows
    var query = 'SELECT * FROM COMMANDE WHERE idCommande = ' + id + ' ;';

    // Executing the query
    connection.query(query, function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
        return rows;
    })
};
// TEST  
//console.log(getCommandebyID(10))

//-------- REMOVE COMMANDE BY ID------//

let removeCommandeByID = (id) => {

    // Query to select all rows
    var query = 'DELETE FROM COMMANDE WHERE idCommande = ' + id + ' ;';

    // Executing the query
    connection.query(query, function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
        return rows;
    })
};
// TEST   
// for (let i = 5; i < 21; i++) {
//     console.log(removeCommandeByID(i))
// }




//----------- END CONNEXION --------//
// connection.end();


app.get('/Categories', (req, res) => {
    // for (let i = 0; i < dataCatg.length; i++) {
    //     console.log(InsertCategorie(dataCatg[i]))
    // }
    var lesCategories = getLesCategories();
    res.send(lesCategories);
});

app.listen(port, () => console.log('app running'));