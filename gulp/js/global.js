const headerHTML = '<header id="header-menu" class="header-menu">' +
    '<a class="logo-content" href="./index.html">' +
        '<h1>Tamales<br>Fiesta</h1>' +
    '</a>' +
    '<input id="toggle" type="checkbox">' +
    '<label id="toggle-btn" for="toggle"></label>' +
    '<div class="nav-icon"></div>' +
    '<nav>' +
        '<ul id="listMenu">' +
            '<li class="item">' +
                '<a href="./salados.html">Salados</a>' +
            '</li>' +
            '<li class="item">' +
                '<a href="./dulces.html">Dulces</a>' +
            '</li>' +
            '<li class="item">' +
                '<a href="./especiales.html">Especiales</a>' +
            '</li>' +
            '<li class="item">' +
                '<a href="./atoles.html">Atoles</a>' +
            '</li>' +
        '</ul>' +
    '</nav>' +
    '</header>';

const footerHTML = '<footer id="footer-menu" class="footer-menu">' +
    '<div class="container">' +
        '<div class="rrss-content">' +
            '<a target="_blank" href="#" title="Ir a Facebook de Tamales Fiesta">' +
                '<img src="./assets/images/icons/facebook.png" alt="Logo Facebook">' +
            '</a>' +
            '<a target="_blank" href="#" title="Ir a Instagram de Tamales Fiesta">' +
                '<img src="./assets/images/icons/instagram.png" alt="Logo Instagram">' +
            '</a>' +
        '</div>' +
        '<p>Menú digital por' +
            '<a target="_blank" href="https://julcesar.com/" title="Ir a julcesar.com"> Julio Herrera</a>' +
        '</p>' +
    '</div>' +
    '</footer>';

const contentHeader = document.getElementById('contentHeader'),
    contentFooter = document.getElementById('contentFooter');

contentHeader.innerHTML = headerHTML;
contentFooter.innerHTML = footerHTML;