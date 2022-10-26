// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(num1, num2) {
  return num1 + num2;
}
// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultado = soma(3, 9);
resultado + 5;
// Qual o valor atualizado dessa variável?
17;
// Declare uma nova variável, sem valor.
var num;
/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addValue() {
  num = 5;
  return "O valor da variável agora é: " + num;
}
// Invoque a função criada acima.
console.log(addValue());

// Qual o retorno da função? (Use comentários de bloco).
/* "O valor da variável agora é: 5" */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function verification1(a, b, c) {
  if (a && b && c) {
    return a * b * c + 2;
  } else {
    return "preencha  todos os campos";
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log(verification1(2, 3));
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//"preencha todos os campos!"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(verification1(2, 5, 6));
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//62

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function verification2(x, y, z) {
  // repondida com a revisão
  if (x !== undefined && y === undefined && z === undefined) {
    return x;
  } else if (x !== undefined && y !== undefined && z === undefined) {
    return x + y;
  } else if (x !== undefined && y !== undefined && z !== undefined) {
    return (x + y) / z;
  } else if (x === undefined && y === undefined && z === undefined) {
    return false;
  } else {
    return null;
  }
}
// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

console.log(verification2()); // falso

console.log(verification2(1)); // 1

console.log(verification2(1, 2)); // 3

console.log(verification2(1, 2, 3)); // 1 + 2 = 3 / 3 = 1
