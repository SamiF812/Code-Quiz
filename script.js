// variable for time remaining
var secondsLeft = 76;

// this displays the time
var timer = document.getElementById("timer");

// Scores div
var scoresDiv = document.getElementById("scores-div");
var buttonsDiv = document.getElementById("buttons");

// button to view the high scores
var viewScoresBtn = document.getElementById("view-scores");

// start button
var startButton = document.getElementById("start-button");

var buttonAEL = document.getElementById("A");
var buttonBEL = document.getElementById("B");
var buttonCEL = document.getElementById("C");
var buttonDEL = document.getElementById("D"); 

var questionDiv = document.getElementById("question-div");

var resultsEl = document.getElementById("results");
var finalScore = document.getElementById("final-score");
var saveInitals = document.getElementById("saveInitals");
var scores = document.getElementById("scores");
var userInitals = document.getElementById("user-initals");

// questions
var questionsArray = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        option1: "<js>",
        option2: "<script>",
        option3: "<index>",
        option4: "<p>",
        correct: "<script>"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        option1: "X",
        option2: "-",
        option3: "*",
        option4: "=",
        correct: "="
    },
    {
        question: "is JavaScript case-sensitive?",
        option1: "No",
        option2: "Yes",
        option3: "Sometimes",
        option4: "Only for Homework",
        correct: "Yes"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        option1: "onclick",
        option2: "onmouseclick",
        option3: "onchange",
        option4: "onmouseover",
        correct: "onclick"
    }, 
    {
        question: "How can you add a comment in JavaScript?",
        option1: "// this is a comment",
        option2: "* this is a comment",
        option3: "<!- this is a comment",
        option4: "'this is a comment'",
        correct: "// this is a comment"
    }
]

var currentQuestion = 0
questionsArray[currentQuestion]

function displayQuestion() {
    var questionEl = document.getElementById("question");
    questionEl.innerText = questionsArray[currentQuestion].question
    // TODO do this for the 4 button options
    buttonAEL.innerText = questionsArray[currentQuestion].option1
    buttonBEL.innerText = questionsArray[currentQuestion].option2
    buttonCEL.innerText = questionsArray[currentQuestion].option3
    buttonDEL.innerText = questionsArray[currentQuestion].option4
}
// function to check the answer
function checkAnswer(answer) {
    if (answer !== questionsArray[currentQuestion].correct) {
        secondsLeft = secondsLeft -5
        timer.textContent = `Time:${secondsLeft}s`;
    }
  
}

// if buttons text !== correct than -5 from the time

// function for the timer/interval
function setTime() {
    timer.style.display="block";
    timer.innerText = "Time: " + secondsLeft +"s";
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.innerText = "Time: " + secondsLeft +"s";

        if (secondsLeft === 0 || currentQuestion === questionsArray.length) {
            clearInterval(timerInterval);
            questionDiv.style.display = "none";
            resultsEl.style.display = "flex";
            //display none timer
// take final score p tag and put seconds left (inner text)
        }
    },1000
    )}
// add event listener to save initals button
// get the value or innertext of the user initals input
// {
    // score:secondsLeft,
    // initals:value from input
//}
// add object to highscores array
// save that array to local storage (stringify)
// get it out of local storage (parse)
// if there is an item in local storage then the highscore array = that item else the HS array is an empty array


startButton.addEventListener("click", function(event){
event.preventDefault()
questionDiv.style.display = "flex";
startButton.style.display = "none";
setTime()
displayQuestion()
});
buttonAEL.addEventListener("click" , function(event) {
    event.preventDefault()
    //check answer function will be called here
    checkAnswer(event.target.innerText);
    currentQuestion++
    displayQuestion()
})
buttonBEL.addEventListener("click" , function(event) {
    event.preventDefault()
    checkAnswer(event.target.innerText);
    currentQuestion++
    displayQuestion()
})
buttonCEL.addEventListener("click" , function(event) {
    event.preventDefault()
    checkAnswer(event.target.innerText);
    currentQuestion++
    displayQuestion()
})
buttonDEL.addEventListener("click" , function(event) {
    event.preventDefault()
    checkAnswer(event.target.innerText);
    currentQuestion++
    displayQuestion()
})



// results and options
var results = document.getElementById("results");
var choices = document.getElementById("choices");

// store highscore
var scoresArray = [];
