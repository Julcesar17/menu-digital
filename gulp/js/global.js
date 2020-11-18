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
        '<p>' +
            '<a href="https://www.google.com/maps/dir/?api=1&destination=19.0629382,-98.1349393&travelmode=driving" target="_blank">' +
            'Dirección: Boulevard Puebla, esquina 4c, col. Bosques de San Sebastián, 72310, Puebla, Puebla.' +
            '</a>' +
        '</p>' +
    '</div>' +
    '</footer>';

const contentHeader = document.getElementById('contentHeader'),
    contentFooter = document.getElementById('contentFooter');

contentHeader.innerHTML = headerHTML;
contentFooter.innerHTML = footerHTML;

const specifiedElement = document.getElementById('toggle-btn'),
    inputElement = document.getElementById('toggle');

document.addEventListener('click', function(e) {
    let isClickInside = specifiedElement.contains(e.target);
    if (!isClickInside) {
        if(inputElement.checked){
            inputElement.checked = false;
        }
    } else {
        e.preventDefault();
        if(inputElement.checked){
            inputElement.checked = false;
        } else {
            inputElement.checked = true;
        }
    }
});