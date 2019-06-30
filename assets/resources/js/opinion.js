'use strict';
(function () {
    //let formArray = [];
    let textBox = $id('texto');

    window.onload = function () {

        if(sessionStorage.name) {
            $id('name').value = sessionStorage.getItem('name');
        }

        if(JSON.parse(localStorage.getItem('email') !== null)) {
            $('#email').val(JSON.parse((localStorage.getItem('email'))).email);
        }

        textBox.value = '';

        //formArray = ['Falta nome', 'Falta email'];
        $id('name').focus();
    };

    window.document.forms[0].elements[0].addEventListener('keypress', function (e) {
        if (!((e.charCode >= 65 && e.charCode <= 90) ||
            (e.charCode >= 97 && e.charCode <= 122) || (e.charCode === 32))) {
            textBox.value = '';
            textBox.value += `Não é autorizado o caracter $id{e.key}`;
            e.preventDefault();
        }
        $id('but-conferir').disabled = false;
    });
    $id('name').addEventListener('blur', function () {
        if(this.value !== '') {
            textBox.value = '';
            //formArray[0] = 'Nome: ' + this.value;
        }
    });

    $id('email').addEventListener('focus', function () {
        textBox.value = '';
    });
    $id('email').addEventListener('blur', function () {
        if ((this.value.indexOf('@') === -1) ||
            (this.value.lastIndexOf('.') < this.value.indexOf('@'))) {
            this.style.borderColor = 'red';
            textBox.value = '';
            textBox.value += `E-mail inválido`;
        } else {
            this.style.borderColor = '';
            //formArray[1] = 'E-mail: ' + this.value;
        }
    });

    let form = $id('form');
    form.onsubmit = function () {
        let emailObj = {};
        emailObj.email = $id('email').value;
        localStorage.setItem('email', JSON.stringify(emailObj));

        let con = confirm('Enviar a avaliação. Confirma?');

        if(con) {
            alert('Avaliação enviada. Obrigado');
            return true;
        }

        return false;
    };

    $id('email').addEventListener('invalid', function () {

        if(this.validity.valueMissing) {
            this.setCustomValidity('Escrever um e-mail');
        } else if (this.validity.typeMismatch) {
            this.setCustomValidity('E-mail inválido');
        } else {
            this.setCustomValidity('');
            form.onsubmit();
        }
    });

    $id('name').addEventListener('invalid', function () {

        if(this.validity.valueMissing) {
            this.setCustomValidity('Escreva seu nome');
        } else {
            this.setCustomValidity('');
            form.onsubmit();
        }
    });

    $id('idade').addEventListener('invalid', function () {

        if(this.validity.valueMissing) {
            this.setCustomValidity('Idade necessária');
        } else if(this.validity.patternMismatch) {
            this.setCustomValidity('Idade válida apenas entre 3 e 129 anos');
            console.log(this.value);
            textBox.value = 'A idade não pode ser ' + this.value;
        } else {
            this.setCustomValidity('');
            //formArray[2] = 'Idade: ' + this.value;
            form.onsubmit();
        }
    });

    $id('idade').addEventListener('valid', function () {
        textBox.value = '';
    });

})();