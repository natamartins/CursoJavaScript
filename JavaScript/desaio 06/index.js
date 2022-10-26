/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
// ?
var championsship = "Brasileirão";
console.log(championsship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// ?
var teams = ["flamengo", "são paulo", "palmeiras", "bahia", "santos"];

console.log("Times que estão participando do campeonato:", teams);

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
// ?
function showTeamPosition(num) {
  if (num < 1 || num > 5) {
    return "Não temos a informação do time que está nessa posição.";
  }
  return `O time que está em ${num}º lugar é o ${teams[num - 1]}`;
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
// ?
console.log(showTeamPosition(5)); //'O time que está em 1º lugar é o flamengo'
// console.log(showTeamPosition(2)); //'O time que está em 2º lugar é o são paulo'
// console.log(showTeamPosition(5)); //'O time que está em 5º lugar é o santos'
// console.log(showTeamPosition(3)); //'O time que está em 3º lugar é o palmeiras'
// console.log(showTeamPosition(9)); //'Não temos a informação do time que está nessa posição.'
/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
// ?
var counter = 20;

while (counter <= 30) {
  console.log(counter++);
}
/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
// ?

function convertToHex(cor) {
  switch (cor) {
    case "red":
      console.log(`O hexadecimal para a cor ${cor} é #FF2D00.`);
      break;
    case "grenn":
      console.log(`O hexadecimal para a cor ${cor} é #07FF00.`);
      break;
    case "yellow":
      console.log(`O hexadecimal para a cor ${cor} é #FEFE00.`);
      break;
    case "oranje":
      console.log(`O hexadecimal para a cor ${cor} é #F5B604.`);
      break;
    case "white":
      console.log(`O hexadecimal para a cor ${cor} é [#FFFFFF.`);
      break;

    default:
      console.log(`Não temos o equivalente hexadecimal para ${cor}.`);
  }
}
/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
// ?
console.log(convertToHex("red")); // "O hexadecimal para a cor [red] é [#FF2D00]."
console.log(convertToHex("grenn")); // "O hexadecimal para a cor [grenn] é [#07FF00]."
console.log(convertToHex("yellow")); // "O hexadecimal para a cor [yellow] é [#FEFE00]."
console.log(convertToHex("oranje")); // "O hexadecimal para a cor [oranje] é [#F5B604]."
console.log(convertToHex("white")); // "O hexadecimal para a cor [white] é [#FFFFFF]."
console.log(convertToHex("black")); // "Não temos o equivalente hexadecimal para [black]."
console.log(convertToHex("pink")); // "Não temos o equivalente hexadecimal para [pink]."
console.log(convertToHex("blue")); // "Não temos o equivalente hexadecimal para [blue]."
