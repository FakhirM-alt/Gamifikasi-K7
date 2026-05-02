const highScoresList_1 = document.getElementById("highScoresList-PixelPals");
const highScoresList_2 = document.getElementById("highScoresList-Designer");
const highScoresList_3 = document.getElementById("highScoresList-Artist");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const textScores = document.getElementById("textScores");

const filteredScore_1 = highScores.filter(score => score.category.includes("PixelPals"));
const filteredScore_2 = highScores.filter(score => score.category.includes("Designer"));
const filteredScore_3 = highScores.filter(score => score.category.includes("Artist"));  

highScoresList_1.innerHTML = filteredScore_1
.map( score => {
    return `<div class="high-score-item">
        <li class="high-score" id="textScores">${score.name} - ${score.score} </li>
    </div>`;
})
.join("");

highScoresList_2.innerHTML = filteredScore_2
.map( score => {

    return `<div class="high-score-item">
        <li class="high-score" id="textScores">${score.name} - ${score.score} </li>
    </div>`;
})
.join("");

highScoresList_3.innerHTML = filteredScore_3
.map( score => {

    return `<div class="high-score-item">
        <li class="high-score" id="textScores">${score.name} - ${score.score} </li>
    </div>`;
})
.join("");

const openPixelPals = document.querySelector(".PixelPals-category");
openPixelPals.addEventListener("click", () => {
  document.querySelector("#highScoresList-PixelPals").classList.add("active");
  document.querySelector("#highScoresList-Designer").classList.remove("active");
  document.querySelector("#highScoresList-Artist").classList.remove("active");

  document.getElementById("score-category").textContent = "PixelPals";
});

const openDesigner = document.querySelector(".Designer-category");
openDesigner.addEventListener("click", () => {
  document.querySelector("#highScoresList-Designer").classList.add("active");
  document.querySelector("#highScoresList-PixelPals").classList.remove("active");
  document.querySelector("#highScoresList-Artist").classList.remove("active");

  document.getElementById("score-category").textContent = "Designer";
});

const openArtist = document.querySelector(".Artist-category");
openArtist.addEventListener("click", () => {
  document.querySelector("#highScoresList-Artist").classList.add("active");
  document.querySelector("#highScoresList-PixelPals").classList.remove("active");
  document.querySelector("#highScoresList-Designer").classList.remove("active");

  document.getElementById("score-category").textContent = "Artist";
});