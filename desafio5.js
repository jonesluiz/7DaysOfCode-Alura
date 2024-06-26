let perguntaAdicionar = prompt('Deseja adicionar produtos a sua lista de compras? Responda com "sim" ou "não".');
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

    perguntaAdicionar = prompt('Deseja adicionar mais produtos? Responda com "sim" ou "não".');
}

// Exibição da lista final formatada
console.log('Lista de Compras:');
Object.keys(listaCategorias).forEach(categoria => {
    if (listaCategorias[categoria].length > 0) {
        console.log(`  ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${listaCategorias[categoria].join(', ')}`);
    }
});