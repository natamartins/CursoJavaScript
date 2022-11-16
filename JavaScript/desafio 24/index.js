/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:
- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;
- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
function calc(doc) {
  var $input = doc.querySelector('[data-js="input"]');
  var $btnNumbers = doc.querySelectorAll('[data-js="number"]');
  var $operations = doc.querySelectorAll('[data-js="operations"]');
  var $ce = doc.querySelector('[data-id="ce"]');
  var $equal = doc.querySelector('[data-id="equal"]');

  Array.prototype.forEach.call($btnNumbers, (button) => {
    button.addEventListener("click", handleClickNumber);
  });

  Array.prototype.forEach.call($operations, (button) => {
    button.addEventListener("click", handleClickOperations);
  });

  $ce.addEventListener("click", handleClickCe);
  $equal.addEventListener("click", handleSoma);

  function handleClickNumber() {
    $input.value += this.value;
  }

  function handleClickOperations() {
    $input.value = removeLastItemIfItIsOperation($input.value);
    $input.value += this.value;
  }

  function handleClickCe() {
    $input.value = 0;
  }

  function isLastItemOpeeration(number) {
    var operations = ["+", "-", "x", "/"];
    var lastItem = number.split("").pop();

    return operations.some((operator) => {
      return operator === lastItem;
    });
  }

  function removeLastItemIfItIsOperation(number) {
    if (isLastItemOpeeration(number)) {
      return number.slice(0, -1);
    }
    return number;
  }

  function handleSoma() {
    $input.value = removeLastItemIfItIsOperation($input.value);

    var allValues = $input.value.match(/\d+[+x/-]?/g);

    $input.value = allValues.reduce((accumulated, actual) => {
      var firstValue = accumulated.slice(0, -1);
      var operator = accumulated.split("").pop();
      var lastValue = removeLastItemIfItIsOperation(actual);
      var lastOperation = isLastItemOpeeration(actual)
        ? actual.split("").pop()
        : "";

      switch (operator) {
        case "+":
          return Number(firstValue) + Number(lastValue) + lastOperation;
        case "-":
          return Number(firstValue) - Number(lastValue) + lastOperation;
        case "x":
          return Number(firstValue) * Number(lastValue) + lastOperation;
        case "/":
          return Number(firstValue) / Number(lastValue) + lastOperation;
      }
    });
    console.log(result);
  }
}
calc(document);
