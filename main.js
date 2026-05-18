// main.js

// =============================
// BOTÃO SAIBA MAIS
// =============================

const botaoSaibaMais = document.getElementById("saibaMais");

botaoSaibaMais.addEventListener("click", () => {

    alert("O futuro sustentável depende da tecnologia e da preservação ambiental!");

});

// =============================
// DARK MODE
// =============================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

// =============================
// QUIZ
// =============================

const respostas = document.querySelectorAll(".answer");
const resultado = document.getElementById("quizResult");

respostas.forEach((botao) => {

    botao.addEventListener("click", () => {

        if(botao.innerText === "Drones agrícolas"){

            resultado.innerHTML =
            "✅ Resposta correta! A tecnologia ajuda na agricultura sustentável.";

        } else {

            resultado.innerHTML =
            "❌ Resposta incorreta. Tente novamente.";

        }

    });

});