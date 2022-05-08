
const form = document.querySelector('.form');
const username = document.querySelector('.username');
const password = document.querySelector('.password');
const text = document.querySelector('.text');
const p = document.querySelector('.p');

var userLogged;

const timeShowmessage = () => {
    let timeout;
    showMessage();
    timeout = setTimeout(clearMessage, 3000);
}

const clearMessage = () => {
    let message;
    message = "";
    p.innerHTML = message;
}

const showMessage = () => {
    let message;
    if (username.value == "" && password.value == "") {
        message = "Usuário e senha são requerido";
        p.innerHTML = message;
    } else if (username.value == "") {
        message = "Campo usuário em branco";
        p.innerHTML = message;
    } else if (password.value == "") {
        message = "Campo senha em branco";
        p.innerHTML = message;
    }

}

const validateForm = () => {
    if (username.value === "" && password.value == "") {
        timeShowmessage();
        return false;
    } else if (password.value === "") {
        timeShowmessage();
        return false;
    } else if (username.value == "") {
        timeShowmessage();
        return false;
    }
    return true;
}

form.addEventListener('submit', evento => {
    evento.preventDefault();
});
//
 //   if (validateForm()) {
 //       params = {
///            username: $('#username').val(),
 //           passaword: $('#password').val()
 //       }
 //       window.location.replace(`main?name=${params.username}`);
//window.location.href = "../chat.html";
//        // $post(params, '', (res) => {
 ////       //     console.log(res);
//        // });
 //   }

//});

