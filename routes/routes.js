const express = require('express');
const router = express.Router();
const authController = require('./../controllers/auth.js');

router.post('/cadastro.html', authController.registerindex);

router.get('/', (req, res) => {
    res.render('./../public/index.html');
});

router.get('/user', authController.getUser);

router.post('/login', authController.login);


router.get('/cadastro', (req, res) => {
    res.render('./../public/cadastro.html');
});

router.get('/main', (req, res) => {
    res.render('./../public/chat.html');
});



module.exports = router;