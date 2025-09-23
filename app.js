let amigos = [];
let listaAmigoSorteado = [];
let listaAmigoSorteando = [];

function adicionarAmigo() {
    let input = document.querySelector('input').value.trim();
    if (input == '') {
        alert('Por favor, você precisa digitar um nome!');
        return;
    } else {
        amigos.push(input);
        console.log(amigos);
        exibirLista();
        limparCampo();
    }
}

function limparCampo() {
    input = document.querySelector('input');
    input.value = '';
}

function exibirLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 
    for (let i = 0; i < amigos.length; i++) {
        let nome = document.createElement("li"); 
        nome.textContent = amigos[i];
        listaAmigos.appendChild(nome);
    }  
}

function limparLista() {
    document.getElementById("listaAmigos").innerHTML = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos para sortear!");
        return;
    } 
    let nome = prompt("Vamos sortear o amigo secreto! Qual o seu nome?");
    if (listaAmigoSorteando.includes(nome)) {
        alert("Você ja sorteou seu Amigo Secreto!")
        return;
    }
    if (!amigos.includes(nome)) {
        alert("Você não está na lista de amigos!");
        return;
    }
    amigos.splice(amigos.indexOf(nome), 1);
    listaAmigoSorteando.push(nome);

    let amigosDisponiveis = amigos.filter(a => !listaAmigoSorteado.includes(a));

    if (amigosDisponiveis.length === 0) {
        alert("Todos os amigos já foram sorteados!");
        amigos.push(nome);
        return;
    }
    
    let amigoSorteado = amigosDisponiveis[Math.floor(Math.random() * amigosDisponiveis.length)];
    listaAmigoSorteado.push(amigoSorteado);
    document.getElementById("resultado").innerText = `O amigo sorteado é: ${amigoSorteado}`;
    amigos.push(nome);

    if (listaAmigoSorteado.length === amigos.length) {
        fimDeSorteio();
    }
}

function fimDeSorteio() {
    alert("Todos já foram sorteados! Agora é esperar o presente.");
    limparLista();
    amigos = [];
    listaAmigoSorteado = [];
    listaAmigoSorteando = [];
}
