document.addEventListener("DOMContentLoaded", () => {
    const botao = document.querySelector("button");
  
    botao.addEventListener("click", (e) => {
      botao.classList.add("pulse");
  
      setTimeout(() => {
        botao.classList.remove("pulse");
      }, 300); // duração da animação
    });
  });