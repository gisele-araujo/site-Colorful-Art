const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        connection.query('SELECT Nome, Email, Senha FROM Cadastro', function (error, result) {
            if (error) throw error;
            response.send(result)
        });
    },

    async create(request, response) {
        const { nome, email, senha } = request.body;
        let data = new Date();

        sql = 'INSERT INTO Cadastro (Nome, Email, Senha, DataCadastro) VALUES (?, ?, ?, ?)';

        connection.query(sql, [nome, email, senha, data], function (error, result) {
            if (error) throw error;
            response.send(result);
        });
    }
}