const cards = document.querySelectorAll(".faq__perguntas__card");

cards.forEach(card =>{
    const question = card.querySelector(".faq__perguntas__card__pergunta");
    const answer = card.querySelector(".faq__perguntas__card__resposta")
    
    question.classList.add("inativo")
    answer.classList.add("inativo");
    card.classList.add("inativo")

    question.addEventListener("click", () =>{
        answer.classList.toggle("inativo");
        question.classList.toggle("inativo");
        card.classList.toggle("inativo");
    });

});