$(document).ready(function() {
    cargarLista();
});

const lista = [
    {"name":"GardieMaker", "link":"https://gardiemaker.github.io", "icon":"https://gardiemaker.github.io/assets/img/favicon.png"},
    {"name":"Custom Sucrette", "link":"https://customsucrette.glitch.me", "icon":"https://customsucrette.glitch.me/assets/favicon-w.png"},
    {"name":"BlobbyDex", "link":"https://blobbydex.onrender.com", "icon":"https://blobbydex.onrender.com/assets/img/favicon.png"},
    {"name":"Pokédex", "link":"https://zunaay.github.io/pkmn/", "icon":"https://zunaay.github.io/pkmn/icon.jpg" }
]

function cargarLista() {
    for (i = 0; i < lista.length; i++) {
        $("#page-list").append('<a class="page-item" href="' + lista[i].link + '" target="_blank"><span class="item-img"><img src="' + lista[i].icon + '"></span><span class="item-name">' + lista[i].name + '</span></a>');
    };
}