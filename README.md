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
