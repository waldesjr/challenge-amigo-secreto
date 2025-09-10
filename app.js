let listaAmigos = [];

function adicionarAmigo() {
    //document.getElementsByClassName('button-add').disable = true;
    let nomeAmigo = document.querySelector('input').value;
    
    if (nomeAmigo == '') {
        alert('Por favor, você precisa digitar um nome!');
    } else {
        listaAmigos.push(nomeAmigo);
        console.log(listaAmigos);
        limparCampo();
    }
}

function limparCampo() {
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}

// function reiniciarJogo() {
//     numeroSecreto = gerarNumeroAleatorio();
//     limparCampo();
//     tentativas = 1;
//     exibirMensagemInicial();
//     document.getElementById('reiniciar').setAttribute('disabled', true)
// }

// function gerarNumeroAleatorio() {
//     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
//     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

//     if (quantidadeDeElementosNaLista == numeroLimite) {
//         listaDeNumerosSorteados = [];
//     }
//     if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
//         return gerarNumeroAleatorio();
//     } else {
//         listaDeNumerosSorteados.push(numeroEscolhido);
//         console.log(listaDeNumerosSorteados)
//         return numeroEscolhido;
//     }
// }
