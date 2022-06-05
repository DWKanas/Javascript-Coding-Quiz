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
      question: "What is 2+2?",
      answers: [
          {text: "4", correct: true},
          {text: "22", correct: false},
          {text: "18", correct: false},
          {text: "5", correct: false}
      ]  
    },
    {
        question: "What is 5+5?",
        answers: [
            {text: "10", correct: true},
            {text: "2", correct: false},
            {text: "34", correct: false},
            {text: "8", correct: false}
        ]  
    },
    {
        question: "What is 2-1?",
        answers: [
            {text: "1", correct: true},
            {text: "0", correct: false},
            {text: "56", correct: false},
            {text: "idk", correct: false}
        ]  
    },
    {
        question: "What is 6*2?",
        answers: [
            {text: "12", correct: true},
            {text: "83", correct: false},
            {text: "2.3", correct: false},
            {text: "no", correct: false}
        ]  
    }


]


startButton.addEventListener("click", startGame)

function startGame() {
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestions = 0
    console.log("Started")
    startButton.style.display = 'none'
    var timeleft = 10;
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

        
        
       
      
    
  


















