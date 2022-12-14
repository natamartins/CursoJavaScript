"use-strict";

/*
Vamos estruturar um pequeno app utilizando módulos.
Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
A primeira etapa vai ser o cadastro de veículos, que deverá funcionar da
seguinte forma:
- No início do arquivo, deverá ter as informações da sua empresa - nome e
telefone (já vamos ver como isso vai ser feito)
- Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
um formulário para cadastro do carro, com os seguintes campos:
  - Imagem do carro (deverá aceitar uma URL)
  - Marca / Modelo
  - Ano
  - Placa
  - Cor
  - e um botão "Cadastrar"
Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
aparecer no final da tabela.
Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
Dê um nome para a empresa e um telefone fictício, preechendo essas informações
no arquivo company.json que já está criado.
Essas informações devem ser adicionadas no HTML via Ajax.
Parte técnica:
Separe o nosso módulo de DOM criado nas últimas aulas em
um arquivo DOM.js.
E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
que será nomeado de "app".
*/

function app($) {
  return {
    init: function init() {
      this.companyInfo();
      this.initEvevnt();
    },
    initEvevnt: function initEvevnt() {
      $('[data-js="btn-submit"]').on("click", this.handleSubmit);
    },

    handleSubmit: function handleSubmit(e) {
      e.preventDefault();

      const $table = new DOM('[data-js="table-car"]').get();
      $table.appendChild(app().createNewCar());
    },

    createNewCar: function createNewCar() {
      const $fragment = document.createDocumentFragment();
      const $tr = document.createElement("tr");
      const $tdimg = document.createElement("img");
      const $tdmarca = document.createElement("tr");
      const $ano = document.createElement("tr");
      const $cor = document.createElement("tr");
      const $placa = document.createElement("tr");

      $ano.textContent = new DOM('[data-js="ano"]').get().value;
      $cor.textContent = new DOM('[data-js="cor"]').get().value;
      $placa.textContent = new DOM('[data-js="placa"]').get().value;
      $tdimg.setAttribute("src", new DOM('[data-js="img"]').get().value);
      $tdmarca.textContent = new DOM('[data-js="marca"]').get().value;

      $tr.appendChild($ano);
      $tr.appendChild($cor);
      $tr.appendChild($placa);
      $tr.appendChild($tdimg);
      $tr.appendChild($tdmarca);

      return $fragment.appendChild($tr);
    },
    companyInfo: function companyInfo() {
      const ajax = new XMLHttpRequest();
      ajax.open("GET", "./company.json", true);
      ajax.send();
      ajax.addEventListener("readystatechange", this.getCompanyInfo, false);
    },

    getCompanyInfo: function getCompanyInfo() {
      if (!app().isReady.call(this)) return;
      const data = JSON.parse(this.responseText);
      const $companyName = $('[data-js="company_name"]').get();
      const $companyPhone = $('[data-js="company_phone"]').get();

      $companyName.textContent = data.name;
      $companyPhone.textContent = data.phone;
    },

    isReady: function isReady() {
      return this.readyState === 4 && this.status === 200;
    },
  };
}

app((window.DOM = DOM)).init();
