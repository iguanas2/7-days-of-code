let carreira = prompt("Você vai seguir qual carreira na programação? front-end ou back-end?");
if (carreira == 'frontend' || carreira == 'FrontEnd'|| carreira == 'front-end' || carreira == 'Front-end'|| carreira == 'front end' || carreira == 'Front end'){
    let programaf = prompt("Você quer aprender React ou Vue?");
    let profundidadef = prompt("Você quer seguir se especializando em front-end ou seguir se desenvolvendo para se tornar Full Stack?");
}
if (carreira == 'backend' || carreira == 'back-end' || carreira == 'back end'){
    let programab = prompt("Você quer aprender C# ou Java?");
    let profundidadeb = prompt("Você quer seguir se especializando em back-end ou seguir se desenvolvendo para se tornar Full Stack?");
}
let tecnologias = prompt("Quais tecnologias você gostaria de se especializar ou de conhecer?");
    let simNao = (confirm("Deseja aprender mais alguma tecnologia?"));
    while (simNao == true){
        let tecnologias = prompt("Cite outra tecnologia");
        let simNao2 = (confirm("Deseja aprender mais alguma tecnologia?"))
        if (simNao2 == false)
            { break; }
}
