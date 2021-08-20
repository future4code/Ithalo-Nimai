/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de BlackJack!");

let jogo = confirm("Quer iniciar uma nova rodada?");

if (jogo) {
  let cartaUmUsuario = comprarCarta();
  let cartaDoisUsuario = comprarCarta();
  let cartaUmPc = comprarCarta();
  let cartaDoisPc = comprarCarta();

  let pontuacaoUsuario = cartaUmUsuario.valor + cartaDoisUsuario.valor;
  let pontuacaoPc = cartaUmPc.valor + cartaDoisPc.valor;

  if (pontuacaoUsuario > pontuacaoPc) {
    console.log("O usuário ganhou :)");
  } else if (pontuacaoPc > pontuacaoUsuario) {
    console.log("O computador ganhou :(");
  } else if (pontuacaoUsuario === pontuacaoPc) {
    console.log("O jogo empatou '0'");
  }

  console.log(
    `Usuário - cartas: ${cartaUmUsuario.texto} ${cartaDoisUsuario.texto} ${pontuacaoUsuario}`
  );
  console.log(
    `Usuário - cartas: ${cartaUmPc.texto} ${cartaDoisPc.texto} ${pontuacaoPc}`
  );
} else {
  console.log("O jogo acabou! :(");
}
//Essa semana infelizmente perdi muitas aulas e pretendo recuperar elas assistindo nesse final de semana. Por isso
//demorei pra entregar o projeto, esperei a videoaula com resolução para entender melhor e assim conseguir entregar.