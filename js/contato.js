const form = document.querySelector(".contato__formulario");

const nameInput = document.getElementById("name");
const mailInput = document.getElementById("mail");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

const status = document.querySelector(".contato__status");

const userList = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const mail = mailInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "") {
        status.textContent = "Status: Preencha seu nome!";
        return;
    }

    if (mail === "") {
        status.textContent = "Status: Preencha seu e-mail!";
        return;
    }

    if (phone === "") {
        status.textContent = "Status: Preencha seu telefone!";
        return;
    }

    if (message === "") {
        status.textContent = "Status: Preencha sua mensagem!";
        return;
    }

    const usuario = {
        nome: name,
        email: mail,
        telefone: phone,
        mensagem: message
    };

    userList.push(usuario);

    console.log(userList);

    status.textContent = "Status: Mensagem enviada com sucesso!";

    nameInput.value = "";
    mailInput.value = "";
    phoneInput.value = "";
    messageInput.value = "";
});