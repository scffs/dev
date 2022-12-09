const menu = [
    {
        title: 'Advantages',
        link: '#main-info',
        text: 'advantages'
    },
    {
        title: 'Skills',
        link: '#skills',
        text: 'skills'
    },
    {
        title: 'About me',
        link: '#about',
        text: 'about'
    }
]
const menuItem = document.querySelector('.header-nav__menu')
menuItem.innerHTML = menu.map(
        item=>(
            `<li class="header-nav__item">
                <a class="header-link" href="${item.link}" text="${item.text}">${item.title}</a>
            </li>`
        )
)
    .join('')