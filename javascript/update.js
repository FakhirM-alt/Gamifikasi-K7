const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const finalScoreValue = localStorage.getItem("Score");

const listScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 15;

finalScore.innerText = finalScoreValue;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("Score saved!");
    e.preventDefault();

    const score = {
        score: finalScoreValue,
        category: quizCategory,
        name: username.value,
    };

    location.reload();

    listScores.push(score);

    listScores.sort((a, b) => b.score - a.score);

    listScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(listScores));
}