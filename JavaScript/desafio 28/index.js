/*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."
  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

function buscaCep() {
  function DOM(elements) {
    this.element = this.getDOMElements(elements);
  }

  DOM.prototype.getDOMElements = function getDOMElements(elements) {
    return document.querySelectorAll(elements);
  };

  DOM.prototype.on = function on(eventType, callback) {
    Array.prototype.forEach.call(this.element, (element) => {
      element.addEventListener(eventType, callback);
    });
  };
  DOM.prototype.off = function off(eventType, callback) {
    Array.prototype.forEach.call(this.element, (element) => {
      element.removeEventListener(eventType, callback);
    });
  };
  DOM.prototype.get = function get() {
    return this.element;
  };

  var $formCEP = new DOM('[data-js="formulario"]');
  var $inputFormv = new DOM('[data-js="input-cep"]');
  var $logradouro = new DOM('[data-js="logradouro"]');
  var $bairro = new DOM('[data-js="bairro"]');
  var $estado = new DOM('[data-js="estado"]');
  var $cidade = new DOM('[data-js="cidade"]');
  var $cep = new DOM('[data-js="cep"]');
  var $status = new DOM('[data-js="status"]');
  var ajax = new XMLHttpRequest();

  $formCEP.on("submit", handleForm);

  function handleForm(e) {
    e.preventDefault();
    var url = getUrl();
    ajax.open("GET", url);
    ajax.send();
    getMessage("loading");
    ajax.addEventListener("readystatechange", handleReayState);
  }

  function getUrl() {
    return replaceCEP("https://viacep.com.br/ws/[CEP]/json");
  }

  function clearCep() {
    return $inputFormv.get()[0].value.replace(/\D/g, "");
  }

  function handleReayState() {
    if (isResquest()) fillRequestOk();
    getMessage("ok");
  }

  function isResquest() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function fillRequestOk() {
    var data = parseData();
    if (!data) getMessage("error");

    $logradouro.get()[0].textContent = data.logradouro;
    $bairro.get()[0].textContent = data.bairro;
    $estado.get()[0].textContent = data.uf;
    $cidade.get()[0].textContent = data.localidade;
    $cep.get()[0].textContent = data.cep;
  }

  function parseData() {
    var result;
    try {
      result = JSON.parse(ajax.responseText);
    } catch (e) {
      result = null;
    }
    return result;
  }

  function getMessage(type) {
    var message = {
      loading: replaceCEP("Buscando informações para o CEP ${cep}..."),
      ok: replaceCEP("Endereço referente ao CEP [CEP]:"),
      error: replaceCEP("Não encontramos o endereço para o CEP [CEP]."),
    };
    $status.get()[0].textContent = message[type];
  }
  function replaceCEP(message) {
    var cep = clearCep();
    return message.replace("[CEP]", cep);
  }
}
buscaCep();
