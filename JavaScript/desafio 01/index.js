// Declarar uma variável chamada `myvar`, sem valor.
var myvar;
// Após declarada, atribua o valor 10 à variável `myvar`.
var mayvar = 10;
//Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
var soma = 15 + 8;
// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
console.log((soma = soma++));
// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
console.log((soma = soma *= 3));
// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
var souninja = true;
// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
var comida = ["arroz", "feijao", "ovo"];
// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
console.log(comida[1]);
// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
console.log(soma === mayvar);
// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
console.log(mayvar <= soma);
// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function divisao(n1, n2) {
  return n1 / n2;
}
// Invoque a função criada acima, passando os parâmetros 10 e 2.
console.log(divisao(10, 2));
