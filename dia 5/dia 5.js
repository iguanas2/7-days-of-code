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