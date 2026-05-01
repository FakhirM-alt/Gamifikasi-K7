const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const filteredScores = highScores.filter(score => score.category.includes("PixelPals"));

highScoresList.innerHTML = filteredScores
.map( score => {

    return `<div class="high-score-item">
        <li class="high-score">${score.name} - ${score.category} - ${score.score} </li>
    </div>`;
})
.join("");