# Blackjack-DW2
Projeto de Web 2 - GitHub Pages: https://pmslomp.github.io/Blackjack-DW2/

QUALIDADE DO CÓDIGO
- [x] Usar um Style Guide - apresentar o uso de pelo menos 10 regras do style escolhido (sugerido AirBnb)
  * Require capitalized names for constructor functions
  * Prohibit use of explicitly undeclared variables*
  * Warn when variables are defined but never used
  * Enforce tab width of 2 spaces
  * Force all variable names to use either camelCase
- [x] Usar um lint - mostrar a correção de pelo menos 5 problemas informados pelo lint (sugerido JSHint - usar o arquivo .jshintrc disponível no moodle)
  * aspas duplas por aspas simples
  * 'use strict'
  * declaração de variável antes do uso (card.js)
  * término com ';'
  * uso de '===' ou '!=='
- [x] Usar strict mode
- [x] Usar Module Pattern
- [x] Usar pasta assets e subpastas resources e libraries para organizar o código
- [x] Usar let ao invés de var
- [x] Nomes de arquivos minúsculos e separados por hífen (dashed-case)

CAIXAS DE DIÁLOGO
- [x] prompt (main.js - linha 7)
- [x] alert (main.js - linha 28)
- [x] confirm (opinion.js - linha 59)

TEMPORIZADORES
- [x] setInterval (interface.js - linha 123)
- [x] setTimeout (main.js - linha 94)

FUNÇÕES
- [x] Função anônima com argumento (deck.js - linha 17)
- [x] Função anônima sem argumento (main.js - linha 115)
- [x] Função anônima com retorno (deck.js - linha 17)
- [x] Função auto-executável (main.js) 
- [x] Função com nome (deck.js - linha 20)
- [x] Função aninhada/local - declarar uma função dentro de outra (deck.js - linha 17/20) 
- [x] Passagem de uma função como parâmetro (main.js - linha 16)
- [x] Função Flecha - Arrow Function (card.js - linha 1)

EVENTOS
- [x] Evento de carregamento do documento (onload) (main.js - linha 16)
- [x] Evento de movimento do mouse (index.js - linha 4 e 8)
- [x] Evento de teclado - usar charCode ou keyCode (opinion.js - linha 23)
- [x] Eventos de formulário - onfocus e onblur (opinion.js - linha 38 e 41)
- [x] Imprimir alguma propriedade do objeto event recebido como parâmetro (opinion.js - linha 26)

ACESSO AOS ELEMENOS DOM DO HTML
- [x] Via acesso direto pelo id do elemento HTML (interface.js - linha 101)
- [x] Via getElementByID() (index.js - linha 3)
- [x] Via getElementsByName() (scoreboard.js - linha 3)
- [x] Via getElementsByTagName() (interface.js - linha 99)
- [x] Via seletores CSS usados na função querySelector() ou querySelectorAll() (interface.js - linha 63)

TRATADORES DE EVENTO
- [x] Especificar o tratador de evento inline (opinion.html - linha 22)
- [x] Especificar o tratador de evento no carregamento da página HTML no modo tradicional - no onload (opinion.js - linha 6)
- [x] Especificar o tratador de evento no carregamento da página HTML com a função addEventListener - no onload (main.js - linha 16)
- [x] Usar o operador this em funções tratadoras de eventos (main.js - linha 52/56)

FORMULÁRIO
- [x] Validação de formulário com onsubmit usando os métodos tradicionais (opinion.js - linha 87)
- [x] Validação de formulário com HTML5 API
  - Customizar as mensagens nos balões de mensagem (opinion.js - linha 69)
  - Usar os atributos de validação dos inputs (opinion.js - linha 91)
  - Usar expressões regulares (opinion.html - linha 24)
- [x] Ler e escrever em elementos input com a propriedade value (opinion.js - linha 26 e 98)
- [x] Alterar o conteúdo de elementos div ou p com a propriedade innerHTML ou textContent (scoreboard.js - linha 28)
- [x] Manipulação de elemento de listagem, como checkbox, radio ou select (opinion.html - linha 27)
- [x] Acesso aos elementos de um formulário via hierarquia (caminho) de objetos, ou seja, array forms e elements (opinion.js - linha 22)

OBJETOS NATIVOS
- [x] Usar pelo menos 3 métodos de manipulação de array
  * (deck.js - linha 22 / length)
  * (deck js - linha 32 / push)
  * (hand.js - linha 13 / shift)
- [x] Usar laço de repetição (for..in ou for..of ou forEach) (deck.js - linha 21 / for in)
- [x] Usar pelo menos 3 métodos para manipulação de string
  * (scoreboard.js - linha 19 / charAt)
  * (scoreboard.js - linha 20 / toUpperCase)
  * (scoreboard.js - linha 21 / replace)
  * (scoreboard.js - linha 24 / substring)

OBJETOS
- [x] Criar objeto usando função construtora ou notação literal (scoreboard.js - linha 31)
- [x] Usar herança prototipal (opinion.html - linha 53)

JQUERY
- [x] Uso de seletores CSS - id, classe e tag
  * (index.js - linha 15)
  * (index.js - linha 17)
  * (opinion.js - linha 13) 
- [ ] Uso de seletores hierárquicos estáticos - ancestral/descendente, pai/filho, anterior/próximo
- [ ] Uso de seletores hierárquicos dinâmicos - parent/children/next
- [x] Efeitos fade ou slide (interface.js - linha 121)
- [x] Especificar o tratador de algum evento via jQuery (index.js - linha 8)
- [ ] Manipulação do CSS via função css() e addClass()/removeClass()
- [x] Manipulação do conteúdo de um input e div usando jQuery
  * (index.js - linha 13)
  * (opinion.js - linha 13) 

WEB STORAGE
- [x] LocalStorage ou SessionStorage
  * (main.js - linha 21)
  * (opinion.js - linha 8)
  * (scoreboard.js - linha 18)
- [x] Leitura e escrita de dados simples
  * (main.js - linha 21 / getItem)
  * (opinion.js - linha 8 / .name)
  * (scoreboard.js - linha 18 / setItem)
- [x] Leitura e escrita de JSON (opinion.js - linha 13 e 57)
