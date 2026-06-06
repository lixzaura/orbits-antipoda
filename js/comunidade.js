const contadores = document.querySelectorAll(".comunidade__numeros__area__caixa__numero");

const emails = [];

const modal = document.querySelector(".comunidade__iniciativas__modal");
const modalInput = document.querySelector(".comunidade__iniciativas__formulario__input");
const modalLabel = document.querySelector(".comunidade__iniciativas__formulario__label");
const modalForm = document.querySelector(".comunidade__iniciativas__modal__formulario");
const modalButton = modal.querySelector("button");
const modalFechar = modal.querySelector(".comunidade__iniciativas__modal__fechar");
const modalStatus = modal.querySelector(".comunidade__iniciativas__modal__status")
const iniciativaBotoes = document.querySelectorAll(".comunidade__iniciativas__iniciativa__caixa__botao");

modal.classList.add("inativo");
modalStatus.classList.add("inativo");


iniciativaBotoes.forEach(botao =>{
    botao.addEventListener("click", () =>{
        let ini = botao.dataset.iniciativa;
        modal.classList.remove("inativo");
        modalLabel.textContent = modalLabel.dataset.texto + ini;
    });
});

function removeModal(){
    modal.classList.add("inativo");
}

modalFechar.addEventListener("click", removeModal);

modalForm.addEventListener("submit", (e) =>{
    console.log(e.target)
    e.preventDefault();
    if (!modalInput.value.trim()){
        modalStatus.classList.remove("inativo");
        setTimeout(() =>{
            modalStatus.classList.add("inativo");
        }, 10000);
    }

    emails.push(modalInput.value.trim());
    modalInput.value = "";
    removeModal();
});





//Cria um observador para checar QUANDO o elemento entra na tela
const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if (entry.isIntersecting){
            animarContador(entry.target);
            observer.unobserve(entry.target); // Pra executar uma vez só
        }
    });
});

contadores.forEach(contador =>{
    observer.observe(contador);
})

//função pra mudar o valor
function animarContador(elem){
    const valorAlvo = Number(elem.dataset.valor);
    const valorInicio = .7; //70% do valorAlvo
    const duracao = 1500; //em ms
    const inicio = performance.now(); //quando comecou

    //declara dentro pra evitar comflito
    function atualizar(tempoAtual){
        
        const progresso = Math.min((tempoAtual - inicio) / duracao, 1);
        

        elem.textContent = Math.floor((progresso * valorAlvo * (1 - valorInicio)) + (valorAlvo * valorInicio)).toLocaleString("pt-BR"); //arredondar

        if (progresso < 1){
            requestAnimationFrame(atualizar);
        } else{
            elem.textContent = valorAlvo.toLocaleString("pt-BR");
        }
    }

    requestAnimationFrame(atualizar);
}