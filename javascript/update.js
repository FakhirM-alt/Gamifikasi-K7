const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const resultScore = localStorage.getItem("latestScore");

const listScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 30;

finalScore.innerText = resultScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("Score saved!");
    e.preventDefault();

    location.reload();

    const score = {
        score: resultScore,
        name: username.value,
        category: quizCategory,
    };

    listScores.push(score);

    listScores.sort((a, b) => b.score - a.score);

    listScores.splice(10);

    localStorage.setItem("highScores", JSON.stringify(listScores));
}