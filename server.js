const express = require('express');
const path = require('path');

const rotas = require('./routes/routes.js');

const app = express();

app.use(express.json());
app.use(rotas);
const cors = require('cors');
const { application } = require('express');
const { config } = require('dotenv');
app.use(cors());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.use(express.static(path.join(__dirname, 'public'))); //pasta public é onde vai ficar o front end
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('views engine', 'html');

const server = require('http').Server(app);
const io = require('socket.io')(server);


let messages = []; //array que vai armazenar todas as mensagens

io.on('connection', socket => {
    console.log(`Socket conectado: ${socket.id}`);

    socket.emit('previousMessages', messages);

    socket.on('sendMessage', data => {
        messages.push(data);
        socket.broadcast.emit('recivedMessage', data);
    });

    socket.on('file-meta', function(data){
        console.log(data);
        socket.broadcast.emit('fs-meta', data.metadata);
    });
    socket.on('fs-start', function(data){
        console.log(data);
        socket.broadcast.emit('fs-share', {});
    });
    socket.on('file-raw', function(data){
        console.log(data);
        socket.broadcast.emit('file-raw', data.buffer);
    });
});

const port = process.env.PORT || 5000 ;
//const host = '192.168.0.31';

server.listen(port, () => {
    console.log("Servidor Online")
});
