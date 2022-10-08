let page = document.querySelector('.page');
let card = document.querySelector('.info-menu');
let themeButton = document.querySelector('.btn-theme');

themeButton.onclick = function() {
    page.classList.toggle('dark-theme');
    page.classList.toggle('light-theme');
    card.classList.toggle('dark-theme');
    card.classList.toggle('light-theme');
};
