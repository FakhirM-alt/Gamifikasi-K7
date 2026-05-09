const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const recentScore = localStorage.getItem("recentScore");

const listScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 15;

finalScore.innerText = recentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("Score saved!");
    e.preventDefault();

    const currentScore = localStorage.getItem("recentScore");

    const score = {
        score: currentScore,
        category: quizCategory,
        name: username.value,
    };

    listScores.push(score);

    listScores.sort((a, b) => b.score - a.score);

    listScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(listScores));

    location.reload();
}