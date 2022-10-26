/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var desafio5 = [2, "elemento1", 3, "teste", { rua: "logo ale", numero: 509 }];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function valor(array) {
  return array;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
console.log(valor(desafio5)[1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
function twoparams(arr, index) {
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var five = ["teste", 1, true, [true, 1230, "hello"], { name: "naruto" }];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
console.log(twoparams(five, 0)); // 'teste'
console.log(twoparams(five, 1)); // 1
console.log(twoparams(five, 2)); // true
console.log(twoparams(five, 3)); // [true, 1230, "hello"]
console.log(twoparams(five, 4)); // { name: "naruto" }
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?

function book(books) {
  var bookslist = {
    HTML: { quantidadePaginas: 200, autor: "turbarkmnamà", editor: "EUS" },
    CSS: { quantidadePaginas: 100, autor: "tubaramone", editor: "NVY" },
    JavaScript: { quantidadePaginas: 400, autor: "coffee", editor: "BR" },
  };
  return !books ? bookslist : bookslist[books];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
console.log(book());
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
var filmeName = "HTML";

function imprimirLivro() {
  return `O livro ${filmeName} tem ${
    book(filmeName).quantidadePaginas
  } páginas.`;
}

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

// ?
function imprimirAutor() {
  return `O autor do livro ${filmeName} é ${book(filmeName).autor} `;
}

console.log(imprimirAutor());
// 'O autor do livro HTML é turbarkmnamà '

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
function imprimirEditor() {
  return `O livro ${filmeName} foi publicado pela editora ${
    book(filmeName).editor
  }`;
}

console.log(imprimirEditor());
// 'O livro HTML foi publicado pela editora EUS'
