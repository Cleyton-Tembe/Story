const questions = [
    {
        num: 1,
        question: "are you?",
        answser: "A. Your Hpwoate",
        options: [
            "A. Your Hpwoate",
            "B. Your Knightmare",
            "C. Your Fear",
            "D. Your Demon",
        ],
    },

    {
        num: 2,
        question: "Who are you?",
        answser: "B. Your Knightmare",
        options: [
            "A. Something",
            "B. Your Knightmare",
            "C. Your Fel;kar",
            "D. Your Demon",
        ],
    },

    {
        num: 3,
        question: "Who are you?",
        answser:  "D. Your Demon",
        options: [
            "A. Really",
            "B. Your Knightmare",
            "C. Your Fiear",
            "D. Your Demon",
        ],
    },

    {
        num: 4,
        question: "Who are you?",
        answser: "C. Your Fear",
        options: [
            "A. Your Hate",
            "B. Your Knipjmightmare",
            "C. Your Fear",
            "D. Somehow",
        ],
    },

    {
        num: 5,
        question: "Who are you?",
        answser: "A. Your Hate",
        options: [
            "A. Your Hate",
            "B. Your Knightmare",
            "C. Your Get Angry",
            "D. Your Demon",
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

    }else{

        bxNav.classList.add('active');
        container.classList.add('active');
        menuButton.style.opacity = "0";
        menuButton.setAttribute('disabled', 'true');


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
    console.log(count)
    numberQuestion.textContent = `${count+1} of 5`;
}

function updateScore(){
    score++;
    scoreChange.textContent = `Score: ${score} / 5`;
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
    let result = (score/5)*100;
    let progressValeu = 0;

    let loadingProgress = setInterval(()=>{

        progressValeu++;

        quizResult.textContent = `${result}%`;
        quizProgress.style.background = `conic-gradient(#c40094 ${result* 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

        if(progressValeu === result){

            clearInterval(loadingProgress)

        }

    }, 20);
    
    
    quizScore.textContent = `Your Score is ${score} out of 5`;

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