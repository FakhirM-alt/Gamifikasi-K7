const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What application does artists use for designing?",
        choice1: "Adobe Photoshop",
        choice2: "Adobe Illustrator",
        choice3: "Adobe InDesign",
        choice4: "Adobe Premiere Pro",
        answer: 1
    },
    {
        question: "How do you give 3D effect to a 2D drawing?",
        choice1: "Shading",
        choice2: "Hatching",
        choice3: "Cross-Hatching",
        choice4: "Stippling",
        answer: 1
    },
    {
        question: "What is one of the Core Streams of PixelPals (PIPA)?",
        choice1: "Engineer",
        choice2: "Artist",
        choice3: "Project Manager",
        choice4: "Data Analyst",
        answer: 2
    }
];


const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        return window.location.assign("/end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    
    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    
    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);
        getNewQuestion();
    });
});

startGame();