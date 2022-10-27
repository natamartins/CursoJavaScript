/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = (unico) => Boolean(unico);

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(0));
console.log(isTruthy(-0));
console.log(isTruthy(false));
console.log(isTruthy(""));
console.log(isTruthy(nan));
console.log(isTruthy(undefined));
console.log(isTruthy(null));
/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy(1));
console.log(isTruthy("0"));
console.log(isTruthy(true));
console.log(isTruthy({}));
console.log(isTruthy([]));
console.log(isTruthy({ a, a, a, a }));
console.log(isTruthy(["ADD", "asdfs", "ads"]));
console.log(isTruthy(9));
console.log(isTruthy("ouhjiner"));
console.log(isTruthy("-0"));
/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
  marca: "BMW",
  modelo: "X5",
  placa: "cdi100",
  ano: 2020,
  cor: "Preto",
  qunatasPortas: 4,
  assentos: 5,
  quantidadesPessoas: 0,
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = (cor) => {
  carro.cor = cor;
};
/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = () => {
  return carro.cor;
};
/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = () => {
  return carro.modelo;
};
/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = () => {
  return carro.marca;
};
/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = () => {
  return `Esse carro é uma ${carro.marca} ${carro.modelo}`;
};
/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.addPessoas = (numeroPessoas) => {
  // respondida com a revisao
  var totalPessoas = carro.quantidadesPessoas + numeroPessoas;
  var pluralOuSingular = totalPessoas === 1 ? "pessoa" : "pessoas";

  if (totalPessoas > carro.assentos) {
    var quantasPessoasCabem = carro.assentos - carro.quantidadesPessoas;

    return `Só cabem mais ${quantasPessoasCabem} ${pluralOuSingular}!`;
  }

  if (totalPessoas > carro.assentos) {
    var quantasPessoasCabem = carro.assentos - carro.quantidadesPessoas;

    return `Só cabem mais ${quantasPessoasCabem} ${pluralOuSingular}!`;
  }

  carro.quantidadesPessoas += numeroPessoas;
  return `já temmos ${carro.quantidadesPessoas} ${pluralOuSingular} no carro!`;
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.obterCor());
// Mude a cor do carro para vermelho.
console.log(carro.mudarCor("vermelho"));
// E agora, qual a cor do carro?
console.log(carro.obterCor());
// Mude a cor do carro para verde musgo.
consoler.log(carro.mudarCor("verde - musgoho"));
// E agora, qual a cor do carro?
console.log(carro.obterCor());
// Qual a marca e modelo do carro?
console.log(carro.modelo);
// Adicione 2 pessoas no carro.
console.log(carro.addPessoas(2)); //'já temmos 2 pessoas no carro!'
// Adicione mais 4 pessoas no carro.
console.log(carro.addPessoas(4)); // 'Só cabem mais 3 pessoas!'
// Faça o carro encher.
console.log(carro.addPessoas(3)); // 'já temos 5 pessoas no carro'
// Tire 4 pessoas do carro.
console.log(carro.addPessoas(-4)); // 'já temmos 1 pessoas no carro!'
// Adicione 10 pessoas no carro.
console.log(carro.addPessoas(10)); // 'Só cabem mais 4 pessoas!'
// Quantas pessoas temos no carro?
console.log(carro.quantidadesPessoas); //'já temmos 1 pessoa no carro!'
