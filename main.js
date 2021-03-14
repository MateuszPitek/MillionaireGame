const data = {
    "quizcontent": [
        { "question": "What is the name of the power unit?", "correct": 3, "answers": ["decibel", "volt", "watt", "bor"] },
        { "question": "Which animal is under special care in China?", "correct": 4, "answers": ["tapir", "koala", "monkey", "panda"] },
        { "question": "Which technology does not belong to Web Core?", "correct": 1, "answers": ["Java", "HTML", "JavaScript", "CSS"] },
         { "question": "What is the name of the light phenomenon observed especially at the pole?", "correct": 1, "answers": ["aurora", "rainbow", "glow", "mirage"] },
    ]
};

const button = document.querySelector("button");
const answers = document.querySelectorAll(".answer");
const questionElement = document.querySelector("#question");
let question


button.addEventListener("click", randomQuestion);
answers.forEach(answer => answer.addEventListener("click", checkAnswer));

function randomQuestion(){
    const index = Math.floor(Math.random()*data.quizcontent.length);
    question = data.quizcontent[index];

    questionElement.innerHTML = question.question;

    let i = 0;
    answers.forEach(answer => {
        answer.innerHTML = question.answers[i++]
    });
}

function checkAnswer(){
    if (this.id == question.correct){
        alert("Correct!");
        randomQuestion();
    }
}