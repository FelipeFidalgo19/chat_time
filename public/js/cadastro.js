const form = document.querySelector('.form');
const username = document.querySelector('.username');
const password = document.querySelector('.password');
const email = document.querySelector('.email');
const confirmPassword = document.querySelector('.confirmPassword');
const text = document.querySelector('.text');
const p = document.querySelector('.p');



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
    if (password.value !== confirmPassword.value) {
        message = "Senha e confirmação de senha deve ser as mesmas";
        p.innerHTML = message;
        text.appendChild(p);

    } else if (username.length < 3) {
        message = "Usuário deve ser maior do que 3 caracteres";
        p.innerHTML = message;
        text.appendChild(p);

    } else if (password.length < 8) {
        message = "Senha deve ser igual ou maior do que 8 caracteres";
        p.innerHTML = message;
        text.appendChild(p);

    } else if (email.value === "") {
        message = "Email é requerido";
        p.innerHTML = message;
        text.appendChild(p);
    }

}

const validateForm = () => {
    if (password.value !== confirmPassword) {
        timeShowmessage();
        return false;
    } else if (username.length < 3) {
        timeShowmessage();
        return false;
    } else if (password.length < 8) {
        timeShowmessage();
        return false;
    } else if (email.value === "") {
        timeShowmessage();
        return false;
    }
    return true;
}

//form.addEventListener('submit', evento => {
 //   evento.preventDefault();
//});

