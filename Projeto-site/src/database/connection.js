const mysql = require('mysql');

const config = {
    host: "localhost",
    port: "3306",
    user: "NuvemExotica",
    password: "Gisele11",
    database: "ColorfulArt"
}

const connection = mysql.createConnection(config);

connection.connect(function (error) {
    if (error) throw error;
    console.log("Conectado com sucesso!");

})

module.exports = connection;