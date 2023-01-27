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
