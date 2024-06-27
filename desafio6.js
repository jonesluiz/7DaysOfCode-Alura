let perguntaAdicionar = prompt('Deseja adicionar produtos a sua lista de compras? Responda com "sim" ou "não", mas se deseja deletar algo da sua lista, digite "deletar".');
let listaCategorias = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: []
};

while(perguntaAdicionar.toLowerCase() === 'sim') {
    let perguntaCompras = prompt('Escolha a categoria de produto que deseja adicionar: "Frutas", "Laticínios", "Congelados" ou "Doces".');

    switch(perguntaCompras.toLowerCase()) {
        case 'frutas':
            listaCategorias.frutas.push(prompt('Qual Fruta deseja adicionar?'));
            break;
        case 'laticínios':
            listaCategorias.laticinios.push(prompt('Qual Laticínio deseja adicionar?'));
            break;
        case 'congelados':
            listaCategorias.congelados.push(prompt('Qual Congelado deseja adicionar?'));
            break;
        case 'doces':
            listaCategorias.doces.push(prompt('Qual Doce deseja adicionar?'));
            break;
        default:
            alert('Categoria inválida.');
    }

    perguntaAdicionar = prompt('Deseja adicionar mais produtos? Responda com "sim" ou "não" ou "deletar".');
}

while(perguntaAdicionar === 'deletar'){
    let removerCat = prompt(`Sua Lista de Compras é:\n Frutas: ${listaCategorias.frutas}\n Laticínios: ${listaCategorias.laticinios}\n Congelados: ${listaCategorias.congelados}\n Doces: ${listaCategorias.doces}\n\n Deseja remover o item de qual categoria?`);

    switch(removerCat.toLowerCase()) {
        case 'frutas':
            listaCategorias.frutas.pop(prompt(`Qual Fruta deseja remover?\n\n Frutas: ${listaCategorias.frutas}`));
            break;
        case 'laticínios':
            listaCategorias.laticinios.pop(prompt(`Qual Laticínio deseja remover?\n\n Laticínio: ${listaCategorias.laticinios}`));
            break;
        case 'congelados':
            listaCategorias.congelados.pop(prompt(`Qual Congelado deseja remover?\n\n Congelados: ${listaCategorias.congelados}`));
            break;
        case 'doces':
            listaCategorias.doces.pop(prompt(`Qual Doce deseja remover?\n\n Doces: ${listaCategorias.doces}`));
            break;
        default:
            alert('Categoria inválida.');
    }

    alert(`Sua Lista de Compras ficou assim:\n\nFrutas: ${listaCategorias.frutas}\nLaticínios: ${listaCategorias.laticinios}\nCongelados: ${listaCategorias.congelados}\nDoces: ${listaCategorias.doces}`)

    perguntaAdicionar = prompt('Deseja adicionar mais produtos? Responda com "sim" ou "não" ou "deletar".');


}

// Exibição da lista final
alert(`Sua Lista de Compras ficou assim:\n\nFrutas: ${listaCategorias.frutas}\nLaticínios: ${listaCategorias.laticinios}\nCongelados: ${listaCategorias.congelados}\nDoces: ${listaCategorias.doces}`);