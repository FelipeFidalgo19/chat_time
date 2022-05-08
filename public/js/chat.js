(function(){

const localhost = 'http://localhost:5000/cadastro.html';
const web = 'https://chatapsunip.herokuapp.com'
var socket = io( web);

$(document).ready(function(){
    var query = location.search.slice(1);
    var partes = query.split('&');
    var data = {};
    partes.forEach(function (parte) {
       var chaveValor = parte.split('=');
        var chave = chaveValor[0];
        var valor = chaveValor[1];
        data[chave] = valor;

        $('#username').val(data.name).attr('disabled','disabled');
    });
});

function scroll(){
    $('.messages').animate({
        scrollTop: '1888888888px' // aqui introduz o numero de px que quer no scroll, neste caso é a altura da propria div, o que faz com que venha para o fim
    }, 100);
}

function renderMessage(message) {
    if(message.author == $('input[name=username]').val()){
        $('.messages').append('<div class="message-author"><div class="msg_area bg_author"><strong>'+ message.author +'</strong>: '+ message.message+'</div></div>');
    }else{
        $('.messages').append('<div class="message"><div class="msg_area bg"><strong>'+ message.author +'</strong>: '+ message.message+'</div></div>');
    }
}

document.querySelector("#file-input").addEventListener("change", function(e){
    let file = e.target.files[0];
    if(!file){
        return;
    }
    let reader = new FileReader();
    reader.onload = function(e){
        let buffer = new Uint8Array(reader.result);
        let el = document.createElement("div");
        el.classList.add("item");
        el.innerHTML = `
            <div class="progress">0%</div>
            <div class="filename">${file.name}</div>
        `;
        document.querySelector(".files-list").appendChild(el);
        shareFile({
            filename:file.name,
            total_buffer_size:buffer.length,
            buffer_size:2048
        },buffer,el.querySelector(".progress"));
    }
    reader.readAsArrayBuffer(file);
});

function shareFile(metadata,buffer,progress_node){
    socket.emit("file-meta",{
        metadata:metadata
    });
    socket.on("fs-share", function(){
        let chunk = buffer.slice(0,metadata.buffer_size);
        buffer = buffer.slice(metadata.buffer_size, buffer.length);
        progress_node.innerText = Math.trunc((metadata.total_buffer_size - buffer.length) / metadata.total_buffer_size * 100) + "%";
            socket.emit("file-raw",{
                buffer: chunk
            });
    })
}


socket.on("fs-meta",function(metadata){
    fileShare.metadata = metadata;
    fileShare.transmitted = 0;
    fileShare.buffer = [];

    let el = document.createElement("div");
    el.classList.add("item");
    el.innerHTML = `
        <div class="progress">0%</div>
        <div class="filename">${metadata.filename}</div>
    `;
    document.querySelector(".files-list").appendChild(el);

    fileShare.progress_node = el.querySelector(".progress");

    socket.emit("fs-start",{
        uid:"usu"
    });
});

let fileShare = {};


socket.on("file-raw", function(buffer){
        fileShare.buffer.push(buffer);
        fileShare.transmitted += buffer.byteLength;
        fileShare.progress_node.innerText = Math.trunc(fileShare.transmitted / fileShare.metadata.total_buffer_size * 100)+"%";
        if(fileShare.transmitted == fileShare.metadata.total_buffer_size){
            download(new Blob(fileShare.buffer),fileShare.metadata.filename);
            fileShare = {};
        }else{
            socket.emit("fs-start",{
                uid:"else"
            });
        }
})


socket.on('previousMessages', function(messages) {
    for (message of messages) {
        scroll();
        renderMessage(message);
    }
});

socket.on('recivedMessage', function(message) {
    renderMessage(message);
});

$('#chat').submit(function(event) {
    event.preventDefault();
    scroll();

    var author = $('input[name=username]').val();
    var message = $('input[name=message]').val();

    if (author.length && message.length) {
            var messageObject = {
                author: author,
                message: message
            };

        renderMessage(messageObject);
        
        socket.emit('sendMessage', messageObject);
        var message = $('input[name=message]').val("");//limpa o campo 
    }
});

})();
