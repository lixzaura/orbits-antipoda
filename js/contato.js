const form = document.querySelector(".contato__formulario");

const nameInput = document.getElementById("name");
const mailInput = document.getElementById("mail");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

const status = document.querySelector(".contato__status");

const modal = document.querySelector(".contato__modal-fundo"); //modal
const modalFechar = document.querySelector(".contato__modal__fechar"); //modal

const userList = [];

function fecharModal() {
    modal.classList.remove("ativo"); //modal
}

modalFechar.addEventListener("click", fecharModal); //modal

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

    const cliente = {
        nome: name,
        email: mail,
        telefone: phone,
        mensagem: message
    };

    userList.push(cliente);

    console.log(userList);

    status.textContent = "Status: Mensagem enviada com sucesso!";

    form.reset();

    modal.classList.add("ativo"); //modal
});