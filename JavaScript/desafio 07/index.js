/*
Crie um array com 5 items (tipos variados).
*/
// ?
var arr = ["one", true, undefined, 5, { idade: 18 }];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
// ?
function addItem(item) {
  arr.push(item);
  return arr;
}
console.log(arr);
/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

console.log(addItem(3, "hello", true));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// ?
console.log(`O segundo elemento do segundo array é ${arr[5][1]}.`);
/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
// ?
console.log(`O primeiro array tem ${arr.length} itens.`);
/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// ?
console.log(`O segundo array tem ${arr[5].length} itens.`);
/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log("Números pares entre 10 e 20:");
// ?
var numPar = 10;
while (numPar <= 20) {
  numPar % 2 === 0 ? console.log(numPar, "par") : "";
  numPar++;
}
/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log("Números ímpares entre 10 e 20:");
// ?
var numImpar = 10;

while (numImpar < 20) {
  numImpar % 2 === 1 ? console.log(numImpar, "impar") : "";
  numImpar++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log("Números pares entre 100 e 120:");
// ?
for (var num = 100; num <= 120; num++) {
  num % 2 === 0 ? console.log(num, "par") : "";
}
console.log("Números ímpares entre 111 e 125:");
// ?
for (var num = 111; num <= 125; num++) {
  num % 2 === 1 ? console.log(num, "Impar") : "";
}
