const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");


finalScore.innerText = mostRecentScore;

username.addEventListener("input", () => {
    console.log(username.value.length > 0);

    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    console.log("Saving high score...");
    e.preventDefault();
}