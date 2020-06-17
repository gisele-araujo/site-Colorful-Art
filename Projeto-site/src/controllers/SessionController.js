const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { email, pass } = request.body;

        connection.query(`SELECT Nome FROM Cadastro WHERE Email = "${email}" AND Senha = "${pass}"`, function (error, result) {
            if (error) throw error;
            response.send(result);
        });
    }
}