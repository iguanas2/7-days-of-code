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

<p>Depois abri a chave de script dentro do html, porquê o codigo não é grande o suficiente para necessitar de um arquivo próprio</p>

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

<p>Após isso adicionei as variáveis de nome, anos e linguagem com o alert da resposta</p>

~~~html
    <script>
    let nome = prompt ('Qual é o seu nome?');
    let anos = prompt ('Quantos anos você tem?');
    let linguagem = prompt ('Qual linguagem de programação você está estudando?');

    alert('Olá ' + nome + ' você tem ' + anos + ' anos e já está aprendendo ' + linguagem);
    </script>
~~~

<p>Nesse ponto o codigo já estava funcional, porém decidi adicionar o desafio extra, então o codigo ficou assim.</p>

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
