const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const resultScore = document.getElementById('resultScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;
console.log(highScores);

resultScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value    
    };
    highscores.push(score);

    highscores.sort((a, b) => b.score - a.score);

    highscores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highscores));

    console.log(highscores);
};