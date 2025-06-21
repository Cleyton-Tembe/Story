const questions = [
    {
        num: 1,
        question: "She stayed __ home because of her illness.",
        answser: "c) at",
        options: ["a) on", "b) in", "c) at", "d) out"]
    },
    {
        num: 2,
        question: "He apologized __ being late.",
        answser: "b) for",
        options: ["a) with", "b) for", "c) by", "d) that"]
    },
    {
        num: 3,
        question: "He paid __ cash.",
        answser: "b) in",
        options: ["a) with", "b) in", "c) by", "d) for"]
    },
    {
        num: 4,
        question: "He was prized ___ his hard work.",
        answser: "c) for",
        options: ["a) in", "b) by", "c) for", "d) to"]
    },
    {
        num: 5,
        question: "She is famous __ his paintings.",
        answser: "b) for",
        options: ["a) on", "b) for", "c) in", "d) with"]
    },
    {
        num: 6,
        question: "The train went ____ the tunnel.",
        answser: "c) through",
        options: ["a) in", "b) under", "c) through", "d) on"]
    },
    {
        num: 7,
        question: "She walked ___ the door and left.",
        answser: "a) out of",
        options: ["a) out of", "b) across", "c) for", "d) for"]
    },
    {
        num: 8,
        question: "We need to ___ a decision soon.",
        answser: "c) make",
        options: ["a) have", "b) do", "c) make", "d) let"]
    },
    {
        num: 9,
        question: "She will come ___ Monday.",
        answser: "b) on",
        options: ["a) at", "b) on", "c) for", "d) up"]
    },
    {
        num: 10,
        question: "The road goes ___ the river.",
        answser: "b) across",
        options: ["a) at", "b) across", "c) along", "d) down"]
    },
    {
        num: 11,
        question: "She has been living here ___ 2015.",
        answser: "c) since",
        options: ["a) from", "b) for", "c) since", "d) past"]
    },
    {
        num: 12,
        question: "We traveled ___ car.",
        answser: "a) by",
        options: ["a) by", "b) under", "c) in", "d) on"]
    },
    {
        num: 13,
        question: "The dog ran __ the garden.",
        answser: "c) across",
        options: ["a) in", "b) under", "c) across", "d) under"]
    },
    {
        num: 14,
        question: "The bridge is ___ the river.",
        answser: "b) over",
        options: ["a) under", "b) over", "c) in", "d) beyond"],
    },
    {
        num: 15,
        question: "He jumped ___ the river.",
        answser: "c) into",
        options: ["a) at", "b) on", "c) into", "d) below"],
    },
    {
        num: 16,
        question: "The meeting starts ___ 9 am.",
        answser: "b) at",
        options: ["a) in", "b) at", "c) by", "d) over"],
    },
    {
        num: 17,
        question: "He is good ___ mathematics.",
        answser: "c) at",
        options: ["a) by", "b) in", "c) at", "d) over"],
    },
    {
        num: 18,
        question: "He ran __ the streets to catch the bus.",
        answser: "b) along",
        options: ["a) by", "b) along", "c) across", "d) on"]
    },
    {
        num: 19,
        question: "He is suffering ___ a bad cold.",
        answser: "c) from",
        options: ["a) with", "b) by", "c) from"]
    },
    {
        num: 20,
        question: 'Which question was most likely asked based on the following reply? "I have to work tomorrow"',
        answser: "d) he said he had to work the following day.",
        options: [
            "a) He said he has to work tomorrow.",
            "b) He says he had to work tomorrow.",
            "c) he is saying he had to work tomorrow.",
            "d) he said he had to work the following day."
        ]
    },
    {
        num: 21,
        question: "He ____ have said that to you, but at least he apologised.",
        answser: "b) shouldn't",
        options: ["a) wouldn't", "b) shouldn't", "c) couldn't", "d) will not"]
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

        quizResult.textContent = `${progressValeu}%`;
        quizProgress.style.background = `conic-gradient(#c40094 ${progressValeu* 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

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