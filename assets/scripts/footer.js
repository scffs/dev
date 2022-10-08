let footerText = `
         <div class="container">
            <a href="https://github.com/scffs" target="_blank"><img id="Git" src="assets/img/GH.png" height="48" alt="GitHub"></a>
            <a href="https://t.me/sc0ffs" target="_blank"><img src="assets/img/TGW.png" height="48" alt="TG"></a>
            <a href="https://vk.com/scoffs" target="_blank"><img src="assets/img/VKW.svg" height="48" alt="VK"></a>
        </div>
        <div class="copyright gray">
            <i>2022 &copy; by Scoffs</i>
        </div>`;

function setFooter() {
    let footer =  document.createElement("footer");
    footer.classList.add("footer");
    footer.innerHTML = footerText ;
    document.body.insertAdjacentElement('beforeend', footer);
}
console.log("FOOTER DONE");
setFooter();