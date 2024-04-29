const questions =[
    {
        question: "Which of the following is not a continent?",
        answers: [
            {text: "Australia",correct: false},
            {text: "Antarctica",correct: false},
            {text: "Arctic",correct: true},
            {text: "North America",correct: false},
        ],
    },
    {
        question: "When did Kenya gain independence?",
        answers: [
            {text: "1964",correct: false},
            {text: "1970",correct: false},
            {text: "1960",correct: false},
            {text: "1963",correct: true},
        ],

    },


    {
        question: "Which planet is known as red planet?",
        answers: [
            {text: "venus",correct: false},
            {text: "mercury",correct: false},
            {text: "mars",correct: true},
            {text: "pluto",correct: false},
    ],
     
    },
     {
     question: "Which is the tallest mountain in Africa?",
     answers: [
         {text: "Mt.kenya",correct: false},
         {text: "Mt.kilimanjaro",correct: true},
         {text: "Mt.Elgon",correct: false},
         {text: "Mt.Everest",correct: false},
     ],
 },

  {
     question: "What is the chemical symbol for mercury?",
     answers: [
         {text: "Hg",correct: true},
         {text: "Fl",correct: false},
         {text: "Sc",correct: false},
         {text: "Me",correct: false},
     ],
 }, 

 {
     question: "Who was the first president of Kenya?",
     answers: [
         {text: "Jomo Kenyatta",correct: true},
         {text: "Dedan kimathi",correct: false},
         {text: "Tom Mboya",correct: false},
         {text: "Daniel Arap Moi",correct: false},
     ],
 }, {
     question: "In which year did the Titanic sink?",
     answers: [
         {text: "1971",correct: false},
         {text: "1915",correct: false},
         {text: "1912",correct: true},
         {text: "1989",correct: false},
     ],
 },
 
 {
     question: "Who was the first person to step on the moon?",
     answers: [
         {text: "Tom Brady",correct: false},
         {text: "Neil Armstrong",correct: true},
         {text: "Abraham Lincoln",correct: false},
         {text: "Michael Collins",correct: false},
     ],
 }, 
 
 {
     question: "What is the hardest natural substance on Earth?",
     answers: [
         {text: "Diamond",correct: false},
         {text: "Titanium",correct: false},
         {text: "Lonsdaleite",correct: true},
         {text: "Gold",correct: false},
     ],
 },

 {
    question: "Which of the following is not a JavaScript keyword?",
    answers: [
        {text: "function",correct: true},
        {text: "let",correct: false},
        {text: "const",correct: false},
        {text: "var",correct: false},
    ],
},
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }


}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct"); 
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;}
    );
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML ="Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore()
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
})

startQuiz();