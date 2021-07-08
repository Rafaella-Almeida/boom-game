// [FEITO] capturar o elemento html em que vamos inserir os baloes
// [FEITO] adicionar o balão no container
// [FEITO] determinar um intervalo de tempo para adicionar os baloes sequencialmente

// BOTÃO JOGAR
const buttonIniciarJogo = document.querySelector(".button-iniciar-jogo");

buttonIniciarJogo.addEventListener("click", () => {
  buttonIniciarJogo.remove();
  setInterval(adicionarBalao, 2000); //2000 milesegundos = 2 segundos
});
let pontução = 0;

// BALÕES
const containerBaloes = document.querySelector(".container-baloes");
function adicionarBalao() {
  const elementoImg = document.createElement("img");

  elementoImg.setAttribute("src", "./assets/balao.png");

  elementoImg.setAttribute("class", "balao");

  const valorLeft = Math.round(Math.random() * 90);
  const valorTop = Math.round(Math.random() * 90);

  elementoImg.style.left = valorLeft + "vw";
  elementoImg.style.top = valorTop + "vh";

  console.log("left=>", valorLeft);
  console.log("Top=>", valorTop);

  containerBaloes.appendChild(elementoImg);

  console.log("Elemento Img =>", elementoImg);

  elementoImg.addEventListener("click", () => {
    elementoImg.remove();

    pontuacao = pontuacao + 1;
    elementPontuacao.textContent = pontuação;
  });
}
function removerBalao(element) {}

// adicionarBalao();
