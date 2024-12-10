
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1 

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}
function exibirMensagemInicial() {
    exibirTextoNaTela ('h1', 'jogo do numero secreto');
    exibirTextoNaTela ('p', 'escolha o numero de 1 a 100');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector ('input').value;
    
   
    if (chute == numeroSecreto){
        exibirTextoNaTela ('h1', 'acertou');
        let palavraTentativa = tentativas > 1 ?'tentativas' : 'tentativa';
        let mensagemTentativas = `parabens voce ganhou com ${tentativas} ${palavraTentativa}`
         console.log ( chute == numeroSecreto );
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p','o numero secreto e menor');
        } else {
            exibirTextoNaTela ('p','o numero secreto e maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   return parseInt(Math.random () *100+1);
    }
    function limparCampo() {
        chute = document.querySelector('input');
        chute.value = '';
    }
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial ();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
