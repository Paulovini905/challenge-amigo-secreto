let amigos = [];


function adicionarAmigo() {
    const inputNome = document.getElementById('amigo');
    const nome = inputNome.value.trim();  


    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

 
    amigos.push(nome);


    atualizarListaAmigos();


    inputNome.value = '';
}


function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    amigos.forEach(function(nome) {
        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, adicione ao menos um amigo antes de sortear.');
        return;
    }


    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];


    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li><strong>O amigo secreto é: ${amigoSorteado}</strong></li>`;
}
0,
