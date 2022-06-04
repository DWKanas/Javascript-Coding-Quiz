var startButton = document.getElementById("startBtn")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answerBtns")
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
            {text: "2", correct: false},
            {text: "10", correct: true},
            {text: "34", correct: false},
            {text: "8", correct: false}
        ]  
      }


]


startButton.addEventListener("click", startGame)
function startGame() {
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestions = 0
    console.log("Started")
    askQuestion()
}

function askQuestion() {
    // var incomingArrays = JSON.stringify(questions[0])
    // var incomingQuestions =JSON.parse(incomingArrays)
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
}//get attribute 


// function showQuestion(question) {
//     questionElement.innerText = question.question
//     question.answers.forEach(answer =>{
//         var button = document.createElement("button")
//         button.innerText = answer.text
//         button.classList.add("btn")
//         button.addEventListener("click", selectAnswer)
//         answerButtonsElement.appendChild(button)
        
//     })

// }



// function selectAnswer(e) {
//     var selectedButton = e.target
//     var correct = selectedButton.dataset.correct
//     setStatusClass(document.body, correct)
//     Array.from(answerButtonsElement.children).forEach(button => {
//        setStatusClass(button, button.dataset.correct) 
//     })

// }












// showQuestion(shuffledQuestions[currentQuestions])

// nextQuestion()



// resetState()








// function resetState() {

// }
  


// function setStatusClass() {
    
// }
