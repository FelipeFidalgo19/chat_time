const e = require('express');
const repository = require('./../database/repository/authrepository.js')

module.exports = {
    async registerindex(req, res) {
        return res.json(await repository.create(req, res));
    },
    async getUser(req, res) {
        return res.json(await repository.get(req, res));
    },

    async login(req, res) {
        try {
            var user = await repository.login(req, res);
            console.log(user);
            return res.status(200).json(user);
        } catch (err) {
            return res.status(404).json(err.message);
        }




    }
}