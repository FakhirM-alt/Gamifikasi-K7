const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');

const latestScore = localStorage.getItem("latestScore");
const finalScore = document.getElementById('finalScore');
finalScore.innerText = latestScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("Score saved!");
    e.preventDefault();
}