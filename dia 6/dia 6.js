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
