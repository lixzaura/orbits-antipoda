const hamburguer = document.querySelector(".header__button");
const headerMenu = document.querySelector(".header__menu");

headerMenu.classList.add("inativo")

hamburguer.addEventListener("click", () =>{
    headerMenu.classList.toggle("inativo")

});