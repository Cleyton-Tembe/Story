const questions = [
    {
    num: 1,
    question: "I was born ____ July",
    answser: "A. in",
    options: [
        "A. in",
        "B. on",
        "C. at",
        "D. by",
    ],
},

{
    num: 2,
    question: "Cleyton is allergic ___ peanuts",
    answser: "C. to",
    options: [
        "A. with",
        "B. for",
        "C. to",
        "D. at",
    ],
},

{
    num: 3,
    question: "The cat is hiding ___ the bed",
    answser: "B. under",
    options: [
        "A. on",
        "B. under",
        "C. behind",
        "D. over",
    ],
},

{
    num: 4,
    question: "___ you married?",
    answser: "A. Are",
    options: [
        "A. Are",
        "B. Is",
        "C. Do",
        "D. Were",
    ],
},

{
    num: 5,
    question: "____ windy today?",
    answser: "C. Is it",
    options: [
        "A. Are you",
        "B. Does it",
        "C. Is it",
        "D. Has it",
    ],
},
    
    {
    num: 6,
    question: "____ she sad?",
    answser: "A. Is",
    options: [
        "A. Is",
        "B. Are",
        "C. Do",
        "D. Did"
    ],
},
{
    num: 7,
    question: "____ the boat sinking?",
    answser: "B. Is",
    options: [
        "A. Are",
        "B. Is",
        "C. Does",
        "D. Was"
    ],
},
{
    num: 8,
    question: "____ you coming to the party?",
    answser: "C. Are",
    options: [
        "A. Is",
        "B. Do",
        "C. Are",
        "D. Did"
    ],
},
{
    num: 9,
    question: "____ is knocking at the door?",
    answser: "D. Who",
    options: [
        "A. What",
        "B. Why",
        "C. Where",
        "D. Who"
    ],
},
{
    num: 10,
    question: "____ does she go every morning?",
    answser: "A. Where",
    options: [
        "A. Where",
        "B. Who",
        "C. When",
        "D. What"
    ],
},
{
    num: 11,
    question: "____ is your favorite color?",
    answser: "C. What",
    options: [
        "A. Why",
        "B. Who",
        "C. What",
        "D. Which"
    ],
},
{
    num: 12,
    question: "____ do they eat for breakfast?",
    answser: "D. What",
    options: [
        "A. Why",
        "B. When",
        "C. Which",
        "D. What"
    ],
},
{
    num: 13,
    question: "____ she play guitar?",
    answser: "B. Does",
    options: [
        "A. Do",
        "B. Does",
        "C. Is",
        "D. Are"
    ],
},
{
    num: 14,
    question: "____ you like pizza?",
    answser: "C. Do",
    options: [
        "A. Are",
        "B. Is",
        "C. Do",
        "D. Does"
    ],
},
{
    num: 15,
    question: "You are coming, ____?",
    answser: "A. aren’t you",
    options: [
        "A. aren’t you",
        "B. are they",
        "C. isn’t he",
        "D. wasn’t she"
    ],
},
{
    num: 16,
    question: "He can't swim, ____?",
    answser: "B. can he",
    options: [
        "A. isn’t he",
        "B. can he",
        "C. does he",
        "D. did he"
    ],
},
{
    num: 17,
    question: "They were late, ____ they?",
    answser: "D. weren’t",
    options: [
        "A. isn’t",
        "B. didn’t",
        "C. won’t",
        "D. weren’t"
    ],
},
{
    num: 18,
    question: "She ____ know the answer.",
    answser: "C. doesn’t",
    options: [
        "A. don’t",
        "B. did",
        "C. doesn’t",
        "D. do"
    ],
},
{
    num: 19,
    question: "They ____ want to go home.",
    answser: "B. don’t",
    options: [
        "A. didn’t",
        "B. don’t",
        "C. does",
        "D. aren’t"
    ],
},

];

const startButton = document.querySelector('.btn-start');
const popup = document.querySelector('.popup-info');
const exitButton = document.querySelector('.exit');
const main = document.querySelector('main');
const continueButton = document.querySelector('.continue');
const quizSection = document.querySelector('.section-quiz');
const quizForm = document.querySelector('.form-quiz');
const numberQuestion = document.querySelector('.number-question');
const nextButton = document.querySelector('.next');
const scoreChange = document.querySelector('.score');
const questionText = document.querySelector('.question-txt');
const options = document.querySelectorAll('.option');
const resultQuiz = document.querySelector('.quiz-result');
const resetButton = document.querySelector('.try-again');
const goHomeButton = document.querySelector('.go-Home');
const bxNav = document.querySelector('.bx-nav');
const menuButton = document.querySelector('.menu-btn');
const closeButton = document.querySelector('.close-btn');
const container= document.querySelector('.container');

let questionCount = 0;

startButton.addEventListener('click', (e) =>{
    e.preventDefault();
    popup.classList.add('active');
    main.classList.add('active');
})

exitButton.addEventListener('click', (e)=>{
    e.preventDefault();
    popup.classList.remove('active');
    main.classList.remove('active');
})

continueButton.addEventListener('click', (e)=>{
    e.preventDefault();
    questionCount = 0;
    score = -1;
    updateScore();
    cleanningOptions();
    popup.classList.remove('active');
    main.classList.remove('active');
    quizSection.classList.add('active');
    quizForm.classList.remove('deactive');
    showQuestion(questionCount);
    showOption(questionCount);
    showQuestionCount(questionCount);
    nextButton.setAttribute("disabled", "true");

})

nextButton.addEventListener('click', (e) =>{

    e.preventDefault();

    if(questionCount === questions.length -1){

        nextButton.setAttribute('disabled', 'true');
        quizForm.classList.add('deactive');
        resultQuiz.classList.add('active');
        calculateResult();

    }else{

        cleanningOptions();
        questionCount++;
        showQuestion(questionCount);
        showOption(questionCount);
        showQuestionCount(questionCount);

    }
    

})

resetButton.addEventListener('click', (e)=>{

    e.preventDefault();
    reset();

})

goHomeButton.addEventListener('click', (e)=>{

    e.preventDefault();
    resultQuiz.classList.remove('active');
    quizSection.classList.remove('active');

})

menuButton.addEventListener('click', (e)=>{

    if(bxNav.className === 'bx-nav active'){

        bxNav.classList.remove('active');
        container.classList.remove('active');
        menuButton.style.opacity = "1";
        menuButton.removeAttribute('disabled');
        startButton.removeAttribute('disabled');

    }else{

        bxNav.classList.add('active');
        container.classList.add('active');
        menuButton.style.opacity = "0";
        menuButton.setAttribute('disabled', 'true');
        startButton.setAttribute('disabled', 'true');

    }
    
})

closeButton.addEventListener('click', ()=> menuButton.click());



function showQuestion(ind){

    questionText.textContent = `${questions[ind].num}. ${questions[ind].question}`;

}

function checkOption(e){

    if(e.textContent === questions[questionCount].answser){
        e.classList.add('active');
        updateScore();
    }else{
        e.classList.add('wrong');
        showCorrect();
    }

    disableButtons();
    nextButton.removeAttribute('disabled');
    nextButton.classList.add('active');
}

function showOption(index){
    
    options.forEach((opt, i)=>{
        opt.setAttribute('onclick', 'checkOption(this)');
        opt.textContent = `${questions[index].options[i]}`;
    })  
}

function showQuestionCount(count){
    numberQuestion.textContent = `${count+1} of ${questions.length}`;
}

function updateScore(){
    score++;
    scoreChange.textContent = `Score: ${score} / ${questions.length}`;
}

function disableButtons(){
    options.forEach((button)=>{
        button.classList.add('disable');
    })
}

function cleanningOptions(){
    nextButton.setAttribute('disabled', 'true');
    nextButton.classList.remove('active');

    options.forEach((opt)=>{
        opt.classList.remove('disable')
        opt.classList.remove('active');
        opt.classList.remove('wrong');
    })
}

function showCorrect(){

    options.forEach((ops)=>{
        if(ops.textContent === questions[questionCount].answser){
            ops.classList.add('active');
        }
    })

}

function calculateResult(){

    const quizScore = document.querySelector('.quiz-score');
    const quizResult = document.querySelector('.progress-bar');
    const quizProgress = document.querySelector('.circular-progress');
    let result = (score/questions.length)*100;
    result = Math.floor(result);
    
    let progressValeu = 0;

    let loadingProgress = setInterval(()=>{

        progressValeu++;

        quizResult.textContent = `${result}%`;
        quizProgress.style.background = `conic-gradient(#c40094 ${result* 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

        if(progressValeu === result){

            clearInterval(loadingProgress)

        }

    }, 20);
    
    
    quizScore.textContent = `Your Score is ${score} out of ${questions.length}`;

}

function reset(){
    cleanningOptions();
    score = -1;
    questionCount = 0;
    updateScore();
    quizForm.classList.remove('deactive');
    resultQuiz.classList.remove('active');
    
    showQuestion(questionCount);
    showOption(questionCount);
    showQuestionCount(questionCount);

}

var score = 0;