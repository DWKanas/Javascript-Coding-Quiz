var startButton = document.getElementById("startBtn")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answerBtns")
var shuffledQuestions, currentQuestions

var questions = [
    {
      question: "What is 2+2?",
      answers: [
          {text: "4", correct: true},
          {text: "22", correct: false},
          {text: "18", correct: false},
          {text: "4", correct: false}
      ]  
    },
    {
        question: "What is 5+5?",
        answers: [
            {text: "2", correct: true},
            {text: "10", correct: false},
            {text: "34", correct: false},
            {text: "8", correct: false}
        ]  
      }


]


startButton.addEventListener("click", startGame)
function startGame() {
    console.log("Started")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestions = 0
    nextQuestion()
}

function nextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestions])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer =>{
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
           button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}

function resetState() {

}
  

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
       setStatusClass(button, button.dataset.correct) 
    })

}