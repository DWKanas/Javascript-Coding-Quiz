var startButton = document.getElementById("startBtn")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answerBtns")
var countdownTimer = document.getElementById("countdownTimer")
var shuffledQuestions, currentQuestions
var btn1= document.getElementById("Btn1")
var btn2= document.getElementById("Btn2")
var btn3= document.getElementById("Btn3")
var btn4= document.getElementById("Btn4")


var questions = [
    {
      question: "What type refers to a tue or false value? ",
      answers: [
          {text: "Boolean", correct: true},
          {text: "variable", correct: false},
          {text: "integer", correct: false},
          {text: "string", correct: false}
      ]  
    },
    {
        question: "What is used to create a name that holds information?",
        answers: [
            {text: "variable", correct: true},
            {text: "string", correct: false},
            {text: "boolean", correct: false},
            {text: "object", correct: false}
        ]  
    },
    {
        question: "What is called when an app rescales to fit screen size?",
        answers: [
            {text: "Responsive Web Design", correct: true},
            {text: "Scaling Design", correct: false},
            {text: "Screen Resizing", correct: false},
            {text: "Shrinking/Growing", correct: false}
        ]  
    },
    {
        question: "What is a section of code that will run repeatedly until conditions are met?",
        answers: [
            {text: "Loop", correct: true},
            {text: "Array", correct: false},
            {text: "Object", correct: false},
            {text: "If/Else", correct: false}
        ]  
    }


]


var timeleft = 60;
var timer = setInterval(function(){
if(timeleft <= 0){
clearInterval(timer);
window.alert("Time is Up! Refresh to try again.");
} else {
countdownTimer.innerHTML = timeleft;
}
timeleft -= 1;
console.log(timeleft)
return;
}, 1000);
startButton.addEventListener("click", startGame)

function startGame() {
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestions = 0
    console.log("Started")
    startButton.style.display = 'none'

    askQuestion()
};



function askQuestion() {
    
    var getQuestions = (questions[0].question);
     questionElement.innerHTML = getQuestions
        btn1.innerHTML = questions[0].answers[0].text
        btn2.innerHTML = questions[0].answers[1].text
        btn3.innerHTML = questions[0].answers[2].text
        btn4.innerHTML = questions[0].answers[3].text
     btn1.setAttribute("data-choice", questions[0].answers[0].correct)
     btn2.setAttribute("data-choice", questions[0].answers[1].false)
     btn3.setAttribute("data-choice", questions[0].answers[2].false)
     btn4.setAttribute("data-choice", questions[0].answers[3].false)
     console.log(getQuestions)
     checkAnswer()
     checkAnswer1()
     checkAnswer2()
     checkAnswer3()
};
    
   




function checkAnswer() {
    btn1.onclick = function(){
        
    var btnAttribute = btn1.getAttribute("data-choice")

    console.log(btnAttribute)

    if (btnAttribute === "true") {
        btn1.style.color = "green";
        console.log("CLICKED!");
        startGame()
    }
    if (btnAttribute === "false") {
        btn2.style.color = "red"
        btn3.style.color = "red"
        btn4.style.color = "red"
    } 
    
}};

function checkAnswer1() {
    btn2.onclick = function(){
        
    var btnAttribute2 = btn2.getAttribute("data-choice")

    console.log(btnAttribute2)

    if (btnAttribute2 === "false") {
        btn2.style.color = "green";
        console.log("CLICKED!");
        startGame()
    }
    if (btnAttribute2 === "false") {
        btn2.style.color = "red"
        btn3.style.color = "red"
        btn4.style.color = "red"
    } 
    
}};

function checkAnswer2() {
    btn3.onclick = function(){
        
    var btnAttribute3 = btn3.getAttribute("data-choice")

    console.log(btnAttribute3)

    if (btnAttribute3 === "false") {
        btn3.style.color = "green";
        console.log("CLICKED!");
        startGame()
    }
    if (btnAttribute3 === "false") {
        btn2.style.color = "red"
        btn3.style.color = "red"
        btn4.style.color = "red"
    } 
    
}};

function checkAnswer3() {
    btn4.onclick = function(){
        
    var btnAttribute4 = btn4.getAttribute("data-choice")

    console.log(btnAttribute4)

    if (btnAttribute4 === "false") {
        btn1.style.color = "green";
        console.log("CLICKED!");
        startGame()
    }
    if (btnAttribute4 === "false") {
        btn2.style.color = "red"
        btn3.style.color = "red"
        btn4.style.color = "red"
    } 
    
}};

        
        
       
      
    
  


















