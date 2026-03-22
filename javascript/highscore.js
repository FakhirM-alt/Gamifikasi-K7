const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn')

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

saveScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();
};