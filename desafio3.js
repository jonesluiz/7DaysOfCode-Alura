let listFront = ['React', 'Vue'];
let listBack = ['C#', 'Java'];

let perguntaPrincipal = parseInt(prompt('No mundo Dev, qual área você deseja seguir, Front-End (Digite 1) ou Back-End (Digite 2)?'));

if(perguntaPrincipal === 1){
    alert('Legal! O Front-End é muito importante, pois é o que o Usuário Final irá ver.');
    let perguntaFront = prompt('Dentro do Front-End você poderá aprender o React (Digite 1) ou o Vue (Digite 2), qual você quer aprender?');

    if(perguntaFront === '1'){
        alert('Desejamos muita sorte e garra em seu caminho!');
    }else if(perguntaFront === '2'){
        alert('Desejamos muita sorte e garra em seu caminho!');
    }else{
        
    }
}else if(perguntaPrincipal === 2){
    alert('Muito Bom! O Back-End é a estrutura de tudo o que aparece para o Usuário, será o cérebro por trás da lógica!');
        
    let perguntaBack = prompt('Dentro do Back-End você poderá aprender o C# (Digite 1) ou o Java (Digite 2), qual você quer aprender?');

    if(perguntaBack === '1'){
        alert('Desejamos muita sorte e garra em seu caminho!');
    }else if(perguntaBack === '2'){
        alert('Desejamos muita sorte e garra em seu caminho!');
    }else{
        
    }

}else{  
    alert('Você inseriu uma informação invalida!');
}

let areaOuFullStack = parseInt(prompt('Você deseja se especializar em sua área escolhida (Digite 1) ou se tornar um Fullstack (Digite 2)?'));

if(areaOuFullStack === 1){
    alert('Então se esforce o máximo e nunca deixe de ler sobre novos avanços!');
}else if(areaOuFullStack === 2){
    alert('Isso é um grande passo, pois um Dev FullStack domina tanto o Back-End como o Front-End, então, estude muito, se esforce e pratique!');
}else{
    alert('Você inseriu uma informação invalida!');
}

let listaTech = [];

let novaTech = prompt('Tem mais alguma tecnologia que pretente aprender? Se sim, digite "ok", se não, digite "não".');

while(novaTech === 'ok'){
    let addTech = prompt('Qual nova Tecnologia gostaria de aprender ou se aprofundar?');
    listaTech.push(addTech);
    novaTech = prompt('Tem mais alguma tecnologia que pretente aprender? Se sim, digite "ok", se não, digite "não".');
}

if(listaTech.length === 0){
    alert('Isso não é um problema, pois terá como se aprofundar mais no que já está aprendendo!');
}else{
    alert(`Você terá muito Futuro, pois busca aprender ${listaTech.length} novas tecnologias! Uau!`);
}