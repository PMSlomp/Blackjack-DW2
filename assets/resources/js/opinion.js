'use strict';
(function () {
    let formArray = new Array();
    let textBox = $("texto");

    window.onload = function () {
        textBox.value = "";

        formArray = ["Falta nome", "Falta email"];
        $("name").focus();
    };

    $("name").addEventListener("keypress", function (e) {
        if (!((e.charCode >= 65 && e.charCode <= 90) || (e.charCode >= 97 && e.charCode <= 122) || (e.charCode == 32))) {
            textBox.value = "";
            textBox.value += `Não é autorizado o caracter ${e.key}`;
            e.preventDefault();
        }
        $("but-conferir").disabled = false;
    });
    $("name").addEventListener("blur", function () {
        if(this.value != "") {
            textBox.value = "";
            formArray[0] = "Nome: " + this.value;
        }
    });

    $("email").addEventListener("focus", function () {
        textBox.value = "";
    });
    $("email").addEventListener("blur", function () {
        if ((this.value.indexOf("@") == -1) || (this.value.lastIndexOf(".") < this.value.indexOf("@"))) {
            this.style.borderColor = "red";
            textBox.value = "";
            textBox.value += `E-mail inválido`;
        } else {
            this.style.borderColor = "";
            formArray[1] = "E-mail: " + this.value;
        }
    });

    $("but-conferir").addEventListener("click", function () {
        let selection = document.getElementsByName("opinion");
        textBox.value = "";

        for(let key in selection) {
            if(selection[key].checked == true) {
                formArray[2] = "Opinião: " + selection[key].value;
            }
        }

        textBox = $("texto");
        for(let i = 0 ; i < 3; i++) {
            textBox.value += formArray[i];
            textBox.value += "\n";
        }

        if(formArray[0] != "Falta nome" && formArray[1] != "Falta email" && formArray[2] != "") {
            this.disabled = true;
            $("enviar").disabled = false;
        }
    });

})();