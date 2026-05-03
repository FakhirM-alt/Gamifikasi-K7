const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const latestScore = localStorage.getItem("latestScore");
const finalScore = document.getElementById('finalScore');

const listScores = JSON.parse(localStorage.getItem("highScores")) || [];

finalScore.innerText = latestScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("Score saved!");
    e.preventDefault();

    const score = {
        score: latestScore,
        name: username.value,
        category: quizCategory,
    };

    listScores.push(score);

    listScores.sort((a, b) => b.score - a.score);

    listScores.splice(15);

    localStorage.setItem("highScores", JSON.stringify(listScores));
}