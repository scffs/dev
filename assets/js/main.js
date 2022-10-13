let page = document.querySelector('.page');
let card = document.querySelector('.info-menu');
let themeButton = document.querySelector('.btn-theme');
let body = document.querySelector('.light-theme');

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
