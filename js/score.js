const cards = document.querySelectorAll(".score__ranking__mobile__caixa ");
const modalsMobile = document.querySelectorAll(".score__ranking__mobile__modal")
cards.forEach((card, indice) =>{
    const conteudos = card.querySelectorAll(".score__ranking__mobile__caixa__conteudo");
    const cardModal = modalsMobile[indice];
    cardModal.classList.add("inativo")
    function trocarAtivo(){
        card.classList.toggle("inativo");

        cardModal.classList.toggle("inativo");
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


// MODAL DESKTOP
const logos = document.querySelectorAll(".score__ranking__tabela__body__empresa") 
const modals = document.querySelectorAll(".score__ranking__modal")
console.log(modals)

modals.forEach(modal =>{
    modal.classList.add("inativo")
})


logos.forEach((logo, indice) =>{

        const logoModal = modals[indice];

        logo.addEventListener("click", (e) =>{
            
            modals.forEach(modal =>{

                if (modal === logoModal){
                    modal.classList.remove("inativo");
                }
                else{
                    modal.classList.add("inativo")
                    
                }
            })

            logoModal.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

            e.stopPropagation();

        });
});

document.addEventListener("click", () =>{
    modals.forEach(modal =>{
        modal.classList.add("inativo")
    });
});