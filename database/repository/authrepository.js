const connection = require('../connection.js')
module.exports = {
    async create(request, response) {
        const { name, email, senha } = request.body;
        await connection('user').insert({ name, email, senha })
    },
    async get(request, response) {
        const user = await connection('user').select('name', 'email', 'senha');
        return user;
    },

    async login(request, response) {
        const { email, senha } = request.body;

        const user = await connection('user').select('name', 'email').whereRaw('email = ? and senha = ?', [email, senha]);

        if (user.length == 0) {
            throw new "Usuario nao encontrado"
        }
        return user;
    }
}