let valor1;
let valor2;

let operacaoEscolhida = prompt('Boas Vindas a Calculadora JS Básica!\n\nEscolha sua operação desejada:\nSoma\nSubtração\nMultiplicação\nDivisão\n\nou Sair.');

switch(operacaoEscolhida){
    case 'soma':
        soma();
        operacaoEscolhida = prompt('Boas Vindas a Calculadora JS Básica!\n\nEscolha sua operação desejada:\nSoma\nSubtração\nMultiplicação\nDivisão\n\nou Sair.');
    case 'subtração':
        subtracao();
        operacaoEscolhida = prompt('Boas Vindas a Calculadora JS Básica!\n\nEscolha sua operação desejada:\nSoma\nSubtração\nMultiplicação\nDivisão\n\nou Sair.');
    case 'multiplicação':
        multiplicacao();
        operacaoEscolhida = prompt('Boas Vindas a Calculadora JS Básica!\n\nEscolha sua operação desejada:\nSoma\nSubtração\nMultiplicação\nDivisão\n\nou Sair.');
    case 'divisão':
        divisao();
        operacaoEscolhida = prompt('Boas Vindas a Calculadora JS Básica!\n\nEscolha sua operação desejada:\nSoma\nSubtração\nMultiplicação\nDivisão\n\nou Sair.');
    case 'sair':
        alert('Até a Próxima.');
        break;
    default:
        alert('Digite uma opção válida.');
        operacaoEscolhida = prompt('Boas Vindas a Calculadora JS Básica!\n\nEscolha sua operação desejada:\nSoma\nSubtração\nMultiplicação\nDivisão\n\nou Sair.');
}

function soma(){
    valor1 = parseInt(prompt('Digite o primeiro número:'));
    valor2 = parseInt(prompt('Digite o segundo valor:'));
    let somarValor = valor1 + valor2;
    alert(`O resultado da Soma de ${valor1} + ${valor2} = ${somarValor}.`);
}
function subtracao(){
    valor1 = parseInt(prompt('Digite o primeiro número:'));
    valor2 = parseInt(prompt('Digite o segundo valor:'));

    while(valor1 < valor2){
        alert('Em uma subtração o primeiro valor deve ser maior que o segundo, então retorne a operação e coloque os valores corretos.');
        valor1 = parseInt(prompt('Digite o primeiro número:'));
        valor2 = parseInt(prompt('Digite o segundo valor:'));
    }

    let subtrairValor = valor1 - valor2;
        alert(`O resultado da Soma de ${valor1} - ${valor2} = ${subtrairValor}.`);
}
function multiplicacao(){
    valor1 = parseInt(prompt('Digite o primeiro número:'));
    valor2 = parseInt(prompt('Digite o segundo valor:'));
    let multiplicarValor = valor1 * valor2;
    alert(`O resultado da Soma de ${valor1} x ${valor2} = ${multiplicarValor}.`);
}
function divisao(){
    valor1 = parseInt(prompt('Digite o primeiro número:'));
    valor2 = parseInt(prompt('Digite o segundo valor:'));
    let dividirValor = valor1 / valor2;
    alert(`O resultado da Soma de ${valor1} / ${valor2} = ${dividirValor}.`);
}