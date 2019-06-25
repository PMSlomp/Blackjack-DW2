'use strict';
(function() {
    let botaoComecar = document.getElementById('botao-comecar');
    botaoComecar.addEventListener('mouseover', function() {
        botaoComecar.style.backgroundColor = '#7fff00';
        botaoComecar.style.color = '#000000';
    });
    $('#botao-comecar').mouseleave(function() {
        botaoComecar.style.backgroundColor = '#007F0E';
        botaoComecar.style.color = '#FFFFFF';
    });

    $('#botao-comecar').text('começar');

    $('.maiuscula').css('display', 'inline');

    $('h1').text('Blackjack DW2');
})();
