let amigos = [];

function adicionarAmigo() {
    //document.getElementsByClassName('button-add').disable = true;
    let input = document.querySelector('input').value.trim();       //impedir que apenas espaços sejam aceitos como nome
    
    if (input == '') {
        alert('Por favor, você precisa digitar um nome!');
        return
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
    let listaAmigos = document.getElementById("listaAmigos");   //acessando o <ul> no HTML pela variavel listaAmigos para criar <li> dentro dela
    listaAmigos.innerHTML = "";                                 //limpar a lista para nao duplicar
    for (let i = 0; i < amigos.length; i++) {
        let nome = document.createElement("li");                    //criando <li> dentro na variavel nome
        nome.textContent = amigos[i];                               //introduzindo no <li> o conteúdo de texto de amigos[i]
        listaAmigos.appendChild(nome);                              //cria na <ul> o elemento <li> e exibe na tela
    }
    
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos para sortear!");
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerText = "O amigo sorteado é: " + amigoSorteado;
}
