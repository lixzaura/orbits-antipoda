const contadores = document.querySelectorAll(".comunidade__numeros__area__caixa__numero");
// NUMEROS CRESCENDO
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

//tags
const tags = document.querySelectorAll('.comunidade__tag');
const search = document.querySelector('.comunidade__tags__search');
const tagsContainer = document.querySelector('.comunidade__tags');

const iniciativas = document.querySelectorAll(".comunidade__iniciativas__iniciativa__caixa")
iniciativas.forEach(iniciativa =>{
    iniciativa.setAttribute("filtrosAtivos", 0);
});
const activeTags = [];

tags.forEach((tag, index) => {
    tag.style.viewTransitionName = `tag-${index}`;
    tag.style.order = index;
});

tagsContainer.addEventListener('click', (e) => {
    const tag = e.target.closest('button');
    if (!tag) return;

    activeTags.push(tag.dataset.tag);
    render()
    document.startViewTransition(() => {
        search.appendChild(tag);
    });
});

search.addEventListener('click', (e) => {
    const span = e.target.closest('span');
    if (!span) return;

    
    const tag = span.closest('button');
    const index = activeTags.indexOf(tag.dataset.tag);
    if (index !== -1){
        activeTags.splice(index, 1);
    }
    render();
    document.startViewTransition(() => {
        tagsContainer.appendChild(tag);
    });
});

function renderIniciativa(iniciativa){
    const filtros = iniciativa.querySelectorAll(".comunidade__iniciativas__iniciativa__caixa__filtros__filtro");
    let activefilters = 0;
    filtros.forEach(filtro =>{
        if (activeTags.includes(filtro.dataset.tag)){
            filtro.classList.add("filtro--destaque");
            activefilters = activefilters + 1;
        } else{
            filtro.classList.remove("filtro--destaque");
        }
        
    });
    iniciativa.setAttribute("filtrosAtivos", activefilters);

}

function renderIniciativasList(){
    let maior = 0
    iniciativas.forEach(iniciativa =>{
        renderIniciativa(iniciativa);
        if (iniciativa.getAttribute("filtrosAtivos") > maior){
            maior = iniciativa.getAttribute("filtrosAtivos");
        }
    });

    iniciativas.forEach(iniciativa =>{
        if (iniciativa.getAttribute("filtrosAtivos") >= maior && maior > 0){
            iniciativa.classList.add("comunidade__iniciativa--destaque");
        } else{
            iniciativa.classList.remove("comunidade__iniciativa--destaque");
        }
    });
}

function render(){
    renderIniciativasList();
}