const page = document.querySelector('.page');
const themeButton = document.querySelector('.btn-theme');
const body = document.querySelector('.light-theme');
// бургер меню
const burgerMenu = document.querySelector('.header-menu-icon');
const headerLink = document.querySelector('.header-link');

themeButton.onclick = function() {
    page.classList.toggle('dark-theme');
    page.classList.toggle('light-theme');
    if (body.classList.contains('light-theme')){
        document.querySelector(".git").src="assets/img/GH.png";
    }else{
        document.querySelector(".git").src="assets/img/GitHub-Mark-Light-120px-plus.png";
    }
};
if(burgerMenu){
    const headerMenu = document.querySelector('.header-nav');
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
