let nome = prompt('Digite seu nome:');
let idade = parseInt(prompt('Quantos anos você tem?'));
let linguagemProgramacao = prompt('Qual linguagem de programação que você está estudando no momento?');

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagemProgramacao}!`);


function opiniaoLing(){

    let gostaLinguagem = parseInt(prompt(`Você gosta de estudar ${linguagemProgramacao}? Responda com o número 1 para SIM ou 2 para NÃO.`));

        if(gostaLinguagem === 1){
            alert('Muito bom! Continue estudando e você terá muito sucesso.');
        }else if(gostaLinguagem === 2){
            prompt('Ahh que pena... Já tentou aprender outras linguagens?');
            alert('Entendi, espero que consiga encontrar seu caminho!');
        }else{
            alert('Não entendi sua resposta.');
            return opiniaoLing();
        }   
}

opiniaoLing();