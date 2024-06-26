
let numeroMax = 10;
let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
let tentativas = 1;
console.log(numeroSecreto);

let numeroChute = parseInt(prompt(`Escolha um número entre 1 e ${numeroMax}`));

while(numeroChute !== numeroSecreto){
    if(numeroChute > numeroSecreto){
        alert('O número secreto é menor.');
        numeroChute = parseInt(prompt(`Escolha um número entre 1 e ${numeroMax}`));
    }else{
        alert('O número secreto é maior.');
        numeroChute = parseInt(prompt(`Escolha um número entre 1 e ${numeroMax}`));
    }
    tentativas++;
}

let msgTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Parabéns, você descobriu o Número Secreto (${numeroSecreto}) em ${tentativas} ${msgTentativa}!`);
