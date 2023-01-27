**<h1 align=center> :ledger: 7-days-of-code</h1>**

**Minha primeira imersão no 7-days-of-code da alura, no curso de Formação Iniciante em Programação.**

<h2 align=center> Primeiro dia 06/01/23 </h2>

**Hoje o desafio foi corrigir esse código**

```js
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
```
**<p>Para fazer a correção eu primeiro removi o "COMPARAR O" dos ifs</p>**
```js
if (numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
```
**<p>Depois eu mudei o "e a" por "=="</p>**
**<p>(importante mencionar que se colocar "===" ele ignora a diferença entre 'x' e apenas x)</p>**
```js
if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (numeroTrinta == stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
```
**<p>Após isso eu alterei o console.log do numeroTrinta.</p>**
```js
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo, mas tipos diferentes')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo valor')
}
```
**<p>Assim, quando eu executo o código mostra:</p>**
```
As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes
As variáveis numeroTrinta e stringTrinta tem o mesmo, mas tipos diferentes
As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes
```
**<p>Se for necessário, eu fiz uma variação do código mostrando os números ao invés do nome das variáveis</p>**
```js
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm == stringUm) {
  console.log("As variáveis " + numeroUm + " e " + stringUm + " tem o mesmo valor, mas tipos diferentes")
} else {
  console.log('As variáveis ' + numeroUm + ' e ' + stringUm + ' não tem o mesmo valor')
}

if (numeroTrinta == stringTrinta) {
  console.log("As variáveis " + numeroTrinta + " e " + stringTrinta + " tem o mesmo, mas tipos diferentes")
} else {
  console.log('As variáveis ' + numeroTrinta + ' e ' + stringTrinta + ' não tem o mesmo valor')
}

if (numeroDez == stringDez) {
  console.log("As variáveis " + numeroDez + " e " + stringDez + " tem o mesmo valor, mas tipos diferentes")
} else {
  console.log('As variáveis ' + numeroDez + ' e ' + stringDez + ' não tem o mesmo valor')
}
```
<h2 align=center> Segundo dia 07/01/23 </h2>

**O desafio de hoje foi fazer três perguntas pro usuário e armazenar a resposta**
<p>(bonus, fazer pergunta com resposta sim ou não)</p>
<p>Eu comecei colocando a base do html usando Emmet.</p>

~~~html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="dia2 7 days of code" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
~~~

**<p>Depois abri a chave de script dentro do html, porquê o codigo não é grande o suficiente para necessitar de um arquivo próprio</p>**

~~~html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="dia2 7 days of code" content="width=device-width, initial-scale=1.0">
    <script>
    </script>
    <title>Document</title>
</head>
<body>
    
</body>
</html>
~~~

**<p>Após isso adicionei as variáveis de nome, anos e linguagem com o alert da resposta</p>**

~~~html
    <script>
    let nome = prompt ('Qual é o seu nome?');
    let anos = prompt ('Quantos anos você tem?');
    let linguagem = prompt ('Qual linguagem de programação você está estudando?');

    alert('Olá ' + nome + ' você tem ' + anos + ' anos e já está aprendendo ' + linguagem);
    </script>
~~~

**<p>Nesse ponto o codigo já estava funcional, porém decidi adicionar o desafio extra, então o codigo ficou assim.</p>**

~~~html
    <script>
    let nome = prompt ('Qual é o seu nome?');
    let anos = prompt ('Quantos anos você tem?');
    let linguagem = prompt ('Qual linguagem de programação você está estudando?');

    alert('Olá ' + nome + ' você tem ' + anos + ' anos e já está aprendendo ' + linguagem);

    let simOuNao = prompt ('Você gosta de estudar ' + linguagem + ' ? Responda com o número 1 para SIM ou 2 para NÃO.');

    if (simOuNao == 1){
        alert('Muito bom! Continue estudando e você terá muito sucesso.');
    }
    if (simOuNao == 2){
        alert('Ahh que pena... Já tentou aprender outras linguagens?');
    }
    if (simOuNao != 1 && simOuNao != 2){
        alert("Não entendi! :(");
    }
    </script>
~~~

<h2 align=center> Terceiro dia 09/01/23 </h2>

**O desafio de hoje foi fazer perguntas pro usuário e mudar as perguntas baseado nas respostas**

**<p>Comecei fazendo as variáveis e perguntas do caminho de front-end</p>**

```js
let carreira = prompt("Você vai seguir qual carreira na programação? front-end ou back-end?");
if (carreira == 'frontend' || carreira == 'FrontEnd'|| carreira == 'front-end' || carreira == 'Front-end'|| carreira == 'front end' || carreira == 'Front end'){
    let programaf = prompt("Você quer aprender React ou Vue?");
    let profundidadef = prompt("Você quer seguir se especializando em front-end ou seguir se desenvolvendo para se tornar Full Stack?");
}
```

**<p>Depois adicionei as variáveis do caminho de back-end</p>**

```js
if (carreira == 'backend' || carreira == 'back-end' || carreira == 'back end'){
    let programab = prompt("Você quer aprender C# ou Java?");
    let profundidadeb = prompt("Você quer seguir se especializando em back-end ou seguir se desenvolvendo para se tornar Full Stack?");
}
```

**<p>E por final coloquei o loop de tecnologias</p>**

```js
let tecnologias = prompt("Quais tecnologias você gostaria de se especializar ou de conhecer?");
    let simNao = (confirm("Deseja aprender mais alguma tecnologia?"));
    while (simNao == true){
        let tecnologias = prompt("Cite outra tecnologia");
        let simNao2 = (confirm("Deseja aprender mais alguma tecnologia?"))
        if (simNao2 == false)
            { break; }
}
```

<h2 align=center>Quarto dia 11/01/23</h2>

  <p>Esse dia foi incrivelmente fácil</p>
 
  **<p>O desafio foi fazer um jogo de tentar acertar o número que o computador definir com três tentativas</p>**
  **<p>Comecei o desafio definindo a variável do número com um gerador de número aleatório entre 1 e 10</p>**
  
```js
  var número = Math.floor(Math.random() * (10 - 1 + 1) + 1);
```
  
  **<p>Em seguida a variável do chute junto com as respostas se errar</p>**
  
```js
  var guess = prompt("Qual número estou pensando? (de 1 a 10)");
if (guess != número){
    guess = prompt("Errado! Tente mais uma vez.");
}
if (guess != número){
    guess = prompt("Errado! Última chance!");
}
if (guess != número){
    alert("O número era " + número);
}
```
  
  **<p>Por fim a resposta se acertar o número</p>**
  
```js
  else{
    alert("Parabéns, você acertou, o número era " + número);
}
```
  
  **<p>Então o código ficou assim</p>**
  
```js
  var número = Math.floor(Math.random() * (10 - 1 + 1) + 1);

var guess = prompt("Qual número estou pensando? (de 1 a 10)");
if (guess != número){
    guess = prompt("Errado! Tente mais uma vez.");
}
if (guess != número){
    guess = prompt("Errado! Última chance!");
}
if (guess != número){
    alert("O número era " + número);
}
else{
    alert("Parabéns, você acertou, o número era " + número);
}
```
  
  **<p>Simples né?</p>**
  
<h2 align=center>Quinto dia 21/01/23</h2>

  **<p>O Desafio de hoje é criar uma lista de compras separadas por tipo de produto!</p>**
  **<p>Comecei o desafio adicionando as variáveis dos tipos de produto</p>**
  
```js
  let frutas = [];
  let laticínios = [];
  let congelados = [];
  let vegetais = [];
  let bebidas = [];
  let outros = [];
```

  **<p>Depois coloquei a pergunta se deseja adicionar mais itens a lista de compras</p>**
  
```js
  var adicionarMais = confirm("Deseja adicionar mais itens a lista de compras?");
  while (adicionarMais == true){
  var item = prompt("Oque deseja adicionar?");
  var tipo = prompt("Qual tipo de item ele é");
```

  **<p>Então eu coloquei os diferentes tipos de variável que o item irá entrar, dependendo do que você escolher</p>**
  
```js
  if (tipo == 'frutas' || tipo == 'fruta'){
        frutas.push(item);
    }
    else if (tipo == 'laticínios' || tipo == 'laticínio' || tipo == 'laticinios' || tipo == 'laticinio'){
        laticínios.push(item);
    }
    else if (tipo == 'congelados' || tipo == 'congelado'){
        congelados.push(item);
    }
    else if (tipo == 'vegetais' || tipo == 'vegetal'){
        vegetais.push(item);
    }
    else if (tipo == 'bebidas' || tipo == 'bebida'){
        bebidas.push(item);
    }
    var continuar = confirm("Deseja adicionar mais algum item?")
        if (continuar == false)
        { break; }
```
  
  **<p>Por fim coloco a lista com as variáveis</p>**
  
```js
alert ("Sua lista é: \nFrutas: " + frutas + " \nLaticínios: " + laticínios + " \nCongelados: " + congelados + " \nVegetais: " + vegetais + " \nBebidas: " + bebidas);
```

  **<p>O Código inteiro ficou desse jeito:</p>**
  
```js
let frutas = [];
let laticínios = [];
let congelados = [];
let vegetais = [];
let bebidas = [];
let outros = [];
var adicionarMais = confirm("Deseja adicionar mais itens a lista de compras?");
    while (adicionarMais == true){
    var item = prompt("Oque deseja adicionar?");
    var tipo = prompt("Qual tipo de item ele é");
    if (tipo == 'frutas' || tipo == 'fruta'){
        frutas.push(item);
    }
    else if (tipo == 'laticínios' || tipo == 'laticínio' || tipo == 'laticinios' || tipo == 'laticinio'){
        laticínios.push(item);
    }
    else if (tipo == 'congelados' || tipo == 'congelado'){
        congelados.push(item);
    }
    else if (tipo == 'vegetais' || tipo == 'vegetal'){
        vegetais.push(item);
    }
    else if (tipo == 'bebidas' || tipo == 'bebida'){
        bebidas.push(item);
    }
    var continuar = confirm("Deseja adicionar mais algum item?")
        if (continuar == false)
        { break; }
}
alert ("Sua lista é: \nFrutas: " + frutas + " \nLaticínios: " + laticínios + " \nCongelados: " + congelados + " \nVegetais: " + vegetais + " \nBebidas: " + bebidas);
```

<h2 align=center>Sexto dia 23/01/23<h2>

  **<p>O desafio do sexto dia foi complementar o quinto dia com a opção de apagar<p>**
  
  **<p>Então eu adicionei a confirmação de se quer remover algum item da lista<p>**
  
```js
  var confirmarRemover = confirm("Deseja remover o último item de alguma lista?")
```
  
  **<p>E se desejar remover:<p>**
  
```js
  if (confirmarRemover == true){
    let remover = prompt("Qual categoria deseja remover?")
```
  
  **<p>Ele pergunta qual categoria deseja retirar o item<p>**
  **<p>Então optei por usar o comando ".pop()" que remove o último ítem da lista<p>**
  
```js
  if (remover == 'frutas'){
                frutas.pop();
            }
            else if (remover == 'laticínios'){
                laticínios.pop();
            }
            else if (remover == 'congelados'){
                congelados.pop();
            }
            else if (remover == 'vegetais'){
                vegetais.pop();
            }
            else if (remover == 'bebidas'){
                bebidas.pop();
            }
            else if (remover == 'outros'){
                outros.pop();
            }
            else alert("Não foi encontrado nenhuma categoria com esse nome :(")
    }
```
  
  **<p>E o final do código continua o mesmo 😁<p>**
  
```js
  let frutas = [];
let laticínios = [];
let congelados = [];
let vegetais = [];
let bebidas = [];
let outros = [];
var adicionarMais = confirm("Deseja adicionar mais itens a lista de compras?");
    while (adicionarMais == true){
    var item = prompt("Oque deseja adicionar?");
    var tipo = prompt("Qual tipo de item ele é");
    if (tipo == 'frutas' || tipo == 'fruta'){
        frutas.push(item);
    }
    else if (tipo == 'laticínios' || tipo == 'laticínio' || tipo == 'laticinios' || tipo == 'laticinio'){
        laticínios.push(item);
    }
    else if (tipo == 'congelados' || tipo == 'congelado'){
        congelados.push(item);
    }
    else if (tipo == 'vegetais' || tipo == 'vegetal'){
        vegetais.push(item);
    }
    else if (tipo == 'bebidas' || tipo == 'bebida'){
        bebidas.push(item);
    }
    alert ("Sua lista é: \nFrutas: " + frutas + " \nLaticínios: " + laticínios + " \nCongelados: " + congelados + " \nVegetais: " + vegetais + " \nBebidas: " + bebidas);
    var confirmarRemover = confirm("Deseja remover o último item de alguma lista?")
    if (confirmarRemover == true){
        let remover = prompt("Qual categoria deseja remover?")
            if (remover == 'frutas'){
                frutas.pop();
            }
            else if (remover == 'laticínios'){
                laticínios.pop();
            }
            else if (remover == 'congelados'){
                congelados.pop();
            }
            else if (remover == 'vegetais'){
                vegetais.pop();
            }
            else if (remover == 'bebidas'){
                bebidas.pop();
            }
            else if (remover == 'outros'){
                outros.pop();
            }
            else alert("Não foi encontrado nenhuma categoria com esse nome :(")
    }
    var continuar = confirm("Deseja adicionar mais algum item?");
        if (continuar == false)
        { break; }
}
alert ("Sua lista é: \nFrutas: " + frutas + " \nLaticínios: " + laticínios + " \nCongelados: " + congelados + " \nVegetais: " + vegetais + " \nBebidas: " + bebidas);
```
  
<h2 align=center>Sétimo dia 26/01/23<h2>
  
  **<p>O desafio do sétimo e último dia foi fazer uma calculadora com suas operações sendi divididas em funções<p>**
  **<p>Comecei o desafio já colocando as variáveis e as funções para ficar mais fácil no futuro de declará-las<p>**
  
```js
  let num1;
  let num2;
  let operacao = "";
function divisao(num1,num2){
    return Number(num1) / Number(num2)
}
function multiplicacao(num1,num2){
    return Number(num1) * Number(num2)
}
function subtracao(num1,num2){
    return Number(num1) - Number(num2)
}
function soma(num1,num2){
    return Number(num1) + Number(num2)
}
```
  
  **<p>Então abri um loop perguntando qual operação fazer e coloquei o alert de operação inválida e sair da operação<p>**
  
```js
  do{
    operacao = prompt(`Qual operação você irá fazer? (soma) (subtração) (multiplicação) (divisão) (nenhuma).`);
    while(operacao != soma && operacao != subtracao && operacao != multiplicacao && operacao != divisao && operacao != nenhuma){
        alert('Essa não é uma operação! :(')
        operacao = prompt(`Qual operação você irá fazer? (soma) (subtração) (multiplicação) (divisão) (nenhuma).`);
    }

    if(operacao == 'sair'){
        break
    }
```
  
  **<p>E também abri o prompt para colocar o primeiro e segundo número<p>**
  
```js
    num1 = prompt(`Primeiro número.`)
    num2 = prompt(`Segundo número.`)
```
  
  **<p>Então abri o "switch" de operação, que é uma boa alternativa ao invés e colocar milhares de if else<p>**
  
```js
  switch(operacao){
        case 'divisão':
            alert(`O resultado da ${operacao} é ${divisao(num1, num2)}`);
            break
        case 'multiplicação':
            alert(`O resultado da ${operacao} é ${multiplicacao(num1, num2)}`);
            break;
        case 'subtração':
            alert(`O resultado da ${operacao} é ${subtracao(num1, num2)}`);
            break;
        case 'soma':
            alert(`O resultado da ${operacao} é ${soma(num1, num2)}`);
            break;
    }
```
  
  **<p>E no final do código coloco a condição do loop<p>**
  
```js
  while(operacao === "soma" || operacao === "subtração" || operacao === "multiplicação" || operacao === "divisão");
```
  
  **<p>E no fim o código ficou assim<p>**
  
```js
  let num1;
let num2;
let operacao = "";
function divisao(num1,num2){
    return Number(num1) / Number(num2)
}
function multiplicacao(num1,num2){
    return Number(num1) * Number(num2)
}
function subtracao(num1,num2){
    return Number(num1) - Number(num2)
}
function soma(num1,num2){
    return Number(num1) + Number(num2)
}
do{
    operacao = prompt(`Qual operação você irá fazer? (soma) (subtração) (multiplicação) (divisão) (nenhuma).`);
    while(operacao != soma && operacao != subtracao && operacao != multiplicacao && operacao != divisao && operacao != nenhuma){
        alert('Essa não é uma operação! :(')
        operacao = prompt(`Qual operação você irá fazer? (soma) (subtração) (multiplicação) (divisão) (nenhuma).`);
    }

    if(operacao == 'sair'){
        break
    }
    num1 = prompt(`Primeiro número.`)
    num2 = prompt(`Segundo número.`)
    switch(operacao){
        case 'divisão':
            alert(`O resultado da ${operacao} é ${divisao(num1, num2)}`);
            break
        case 'multiplicação':
            alert(`O resultado da ${operacao} é ${multiplicacao(num1, num2)}`);
            break;
        case 'subtração':
            alert(`O resultado da ${operacao} é ${subtracao(num1, num2)}`);
            break;
        case 'soma':
            alert(`O resultado da ${operacao} é ${soma(num1, num2)}`);
            break;
    }
} 
while(operacao === "soma" || operacao === "subtração" || operacao === "multiplicação" || operacao === "divisão");
```
  
<h2 align=center>Oque achei do 7DaysOfCode?<h2>
  
<p>Mesmo eu não conseguindo fazer os desafios um dia atrás do outro por problemas pessoais, esse desafio me deu uma clareza melhor sobre as funções (não a função functions, literalmente as funções) do java script para a criação de ferramentas.
\n Durante o curso de Iniciante em Programação eu simplesmente escrevia o que o professor pedia e funcionava, essa imersão do 7 days of code fez eu conseguir ter uma independência na criação de códigos, assim mesmo tendo dúvidas procuro na internet sobre a resolução delas, porém eu consegui fazer grande parte desse desafio sozinho, o que me deu a percepção de que eu estou cada vez mais habilitado para fazer meu códigos.<p>
  
<p>Recomendo o curso da alura para todos meus colégas porquê está dando um grande impacto para minha formação profissional. 😎😎😎<p>
