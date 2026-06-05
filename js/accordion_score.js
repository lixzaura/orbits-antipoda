const cards = document.querySelectorAll(".score__ranking__mobile__caixa ");

cards.forEach(card =>{
    const conteudos = card.querySelectorAll(".score__ranking__mobile__caixa__conteudo");

    function trocarAtivo(){
        card.classList.toggle("inativo");
        conteudos.forEach(conteudo =>{
            conteudo.classList.toggle("inativo");
        });
    }
    const pos = card.querySelector(".score__ranking__mobile__caixa__posicao");
    const empresa = card.querySelector(".score__ranking__mobile__caixa__empresa");
    
    pos.addEventListener("click", trocarAtivo);
    empresa.addEventListener("click", trocarAtivo);

    card.classList.add("inativo");
    conteudos.forEach(conteudo =>{
        conteudo.classList.add("inativo");
    });
});