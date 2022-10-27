(function () {
  /*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

  /*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
  // ?
  var person = { name: "jefin", latsName: "souza", age: 90 };

  console.log('Propriedades de "person":');
  /*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
  // ?
  console.log(Object.keys(person));
  /*
Crie um array vazio chamado `books`.
*/
  // ?
  var books = [];
  /*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
  // ?
  books.push({ name: "titanic", pages: 20 });
  books.push({ name: "stand by me", pages: 90 });
  books.push({ name: "O Incrível Hulk", pages: 30 });

  console.log("\nLista de livros:");

  /*
Mostre no console todos os livros.
*/
  // ?
  console.log(books);

  /*
Remova o último livro, e mostre-o no console.
*/
  // ?

  console.log(`Livro que está sendo removido: ${books.pop()}`);

  /*
Mostre no console os livros restantes.
*/
  // ?
  console.log(`Agora sobraram somente os livros: ${books}`);
  /*
Converta os objetos que ficaram em `books` para strings.
*/
  // ?
  books = JSON.stringify(books);
  console.log("\nLivros em formato string:");

  /*
Mostre os livros nesse formato no console:
*/
  // ?
  console.log(books);
  /*
Converta os livros novamente para objeto.
*/
  // ?
  books = JSON.parse(books);
  console.log("\nAgora os livros são objetos novamente:");

  /*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
  // ?
  for (var i = 0; i < Object.keys(books).length; i++) {
    for (var prop in books[i]) {
      console.log(`${prop} ${books[i][prop]}`);
    }
  }
  /*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
  // ?
  var myName = ["N", "a", "t", "ã", "M", "a", "r", "t", "i", "n", "s"];
  console.log("\nMeu nome é:");

  /*
Juntando todos os itens do array, mostre no console seu nome.
*/
  // ?
  myName.join("");
  console.log(`Meu nome invertido é: ${myName}`);

  /*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
  // ?
  myName.reverse();
  console.log(myName);
  /*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
  // ?
  myName.sort();
  console.log(`Agora em ordem alfabética: ${myName}`);
})();
