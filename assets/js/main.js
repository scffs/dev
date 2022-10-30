
const page = document.querySelector('.page');
const themeButton = document.querySelector('.btn-theme');
const bodyTheme = document.querySelector('.dark-theme');
// бургер меню
const burgerMenu = document.querySelector('.header-menu-icon');
const headerLink = document.querySelectorAll('.header-link');
const headerMenu = document.querySelector('.header-nav');

const slider = document.getElementById("carouselExampleDark");
themeButton.onclick = function() {
    page.classList.toggle('light-theme');
    page.classList.toggle('dark-theme');
    if (bodyTheme.classList.contains('light-theme')){
        document.querySelector(".git").src="assets/img/GH.png";
    }else{
        document.querySelector(".git").src="assets/img/GitHub-Mark-Light-120px-plus.png";
    }
};
if(burgerMenu){
    burgerMenu.addEventListener("click", function (){
        burgerMenu.classList.toggle('active');
        headerMenu.classList.toggle('active');
        page.classList.toggle('lock');
        if(!page.classList.contains("lock")){
            slider.style.display = "block"
        }
        else{
            slider.style.display = "none";
        }
        for(let i = 0; i<headerLink.length; i++){
            headerLink[i].addEventListener("click", function (){
                burgerMenu.classList.remove('active');
                headerMenu.classList.remove('active');
                page.classList.remove('lock');
                slider.style.display = "block"
            });
        }
    });
}

let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'));
popoverTriggerList.map( function (popoverTiger){
   return new bootstrap.Popover(popoverTiger);
});