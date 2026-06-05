const contadores = document.querySelectorAll(".comunidade__numeros__area__caixa__numero");

const modal

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