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
