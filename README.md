<h1  >Backend do TESTE KUKAC - VAGA DE DESENVOLVEDOR FULL STACK</h1>
 <hr>
<p align="left">O projeto se baseia em uma API Rest que fornece os métodos (GET,POST) para resolução de desafioa. O front-end que consome esta api se encontra no seguinte repositório: https://github.com/teste-kukac/teste-kukac-frontend/ </p>

<h2>Tecnologias utilizadas</h2>
<div style="display: inline_block">
<img align="center"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width=100 />
<img align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width=100 />

</div>


<h2>Desafios</h2>
  <li>Números palíndromos são aqueles que escritos da direita para esquerda ou da esquerda para
direita tem o mesmo valor. Exemplo: 929, 44, 97379.
Fazer um algoritmo que imprima todos os números palíndromos entre um intervalo que será
escolhido pelo usuário da aplicação.
</li>
  <li>Suponha que um caixa disponha apenas de notas de 1, 10 e 100 reais. Considerando que
alguém está pagando uma compra, escreva um algoritmo que mostre o número mínimo de
notas que o caixa deve fornecer como troco.
Mostre também: o valor da compra, o valor do troco e a quantidade de cada tipo de nota do
troco. Suponha que o sistema monetário não utilize moedas.
O valor da compra e o valor de dinheiro entregue ao caixa deve ser informado pelo usuário.
</li>
  <li>Precisamos controlar melhor os dados de alguns veículos que ficam na nossa garagem e para
isso precisamos que seja feito o seguinte:
a) Crie a interface “Veiculo” com os seguintes atributos:
– Modelo
– Ano de fabricação
– Quantidade de Portas
– Marca
b) Crie a classe “Carro”, que herda de Veículo e tem os seguintes atributos:
– Quantidade de Portas: entre 2 e 4
c) Crie a classe “Moto”, que herda de Veículo, e possui os seguintes atributos:
– Rodas: 2
– Passageiros: entre 1 e 2

Deve ser solicitado ao usuário que preencha as informações sobre o seu veículo, os dados devem ser
salvos em um arquivo JSON (para não precisar trabalhar com banco de dados, até porquê já vai ser
bem próximo de um banco NoSQL);</li>
  <li>Deve ser informado pelo usuário 5 CEP’s, a aplicação deve consumir a api VIACep
(https://viacep.com.br/) e obtiver dados sobre esses CEP’s.
Os CEP’s informados pelo usuário devem ser inicialmente armazenados em um array, e o
consumo da API deve ser de forma síncrona (aguardar a resposta do primeiro para iniciar a
requisição do segundo e assim por diante).
Os dados após o processamento devem ser exibidos na tela./li>


<h2>Endpoints</h2>
  <li><b>localhost:3030/desafio1/:number</b> -- retorna todos os numeros que são palidromos </li>
  <li><b>localhost:3030/desafio2</b> -- retorna o troco e a quantidade de notas necessaria</li>
  <li><b>localhost:3030/desafio3</b> -- realiza o cadastro do veiculo</li>
  <li><b>localhost:3030/desafio4/:cep</b> -- realiza o consumo da api viacep e retorna os dados do local com base no cep</li>
  </ol>
</ol>


<h2>Demonstração da aplicação </h2>
<li>https://drive.google.com/file/d/1aguzMaNdeiEWl49rv3Q3Xgslm6LOFH2I/view?usp=sharing</li>
