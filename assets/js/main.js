let page = document.querySelector('.page');
let card = document.querySelector('.info-menu');
let themeButton = document.querySelector('.btn-theme');
let body = document.querySelector('.light-theme');
// закрытие модального окна
let closeButton = document.querySelector('.modal-close-button');
let modalContainer = document.querySelector('.modal-container');
// открытие модального окна
let openButton = document.querySelector('.btn-log-in');
// бургер меню
let burgerMenu = document.querySelector('.menu-icon');
let headerLink = document.querySelector('.header-link');

themeButton.onclick = function() {
    page.classList.toggle('dark-theme');
    page.classList.toggle('light-theme');
    card.classList.toggle('dark-theme');
    card.classList.toggle('light-theme');
    if (body.classList.contains('light-theme')){
        document.querySelector(".git").src="assets/img/GH.png";
    }else{
        document.querySelector(".git").src="assets/img/GitHub-Mark-Light-120px-plus.png";
    }
};
closeButton.onclick = function (){
    modalContainer.classList.toggle('modal-container-close');
    page.classList.toggle('lock');
}
openButton.onclick = function (){
    modalContainer.classList.toggle('modal-container-close');
    page.classList.toggle('lock');
}

if(burgerMenu){
    let headerMenu = document.querySelector('.header-nav');
    burgerMenu.addEventListener("click", function (){
        burgerMenu.classList.toggle('active');
        headerMenu.classList.toggle('active');
        page.classList.toggle('lock');
    });
    headerLink.addEventListener("click", function (){
        burgerMenu.classList.remove('active');
        headerMenu.classList.remove('active');
        page.classList.remove('lock');
    });
}
