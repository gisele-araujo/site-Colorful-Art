const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        connection.query('SELECT Nome, Email, Senha FROM Cadastro', function (error, result) {
            if (error) throw error;
            response.send(result)
        });
    },

    async create(request, response) {
        const { name, email, pass } = request.body;

        sql = 'INSERT INTO Cadastro (Nome, Email, Senha) VALUES (?, ?, ?)';

        connection.query(sql, [name, email, pass], function (error, result) {
            if (error) throw error;
            response.send(result);
        });
    }
}