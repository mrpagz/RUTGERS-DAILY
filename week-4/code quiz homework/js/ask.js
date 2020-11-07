// Var with array and object for questions 
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
];
// Declared variables
var score = 0;
var questionIndex = 0;
var holdInterval;
var secondsLeft = 75;
var penalty = 10;

startQuiz.addEventListener("click", function () {
    
    startPage.classList.add("hide")
    questionPage.classList.remove("hide")
    runTimer()
    render();
});

highScore.onclick = redirectHighscores
getInitials.onclick = handleScores

function redirectHighscores() {
    redirect.click()
}

function runTimer() {
    timer.textContent = "Time: " + secondsLeft;

    holdInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;

        if (secondsLeft <= 0) {
            allDone();
            timer.textContent = "Time's up!";
        }
    }, 1000);
}

// Renders questions and choices to page: 
function render() {
    question.textContent = questions[questionIndex].title

    answerList.innerHTML = '';
    for (var choice of questions[questionIndex].choices) {
        var btn = document.createElement('button')
        btn.textContent = choice
        btn.onclick = compare

        answerList.appendChild(btn)
    }    
}

function compare() {
    var correct = questions[questionIndex].answer
    if (this.textContent === correct) {
        score++;
    }

    questionIndex++;
    if (questionIndex < questions.length) {
        render()
    } else {
        allDone()
    }
}

function allDone() {
    clearInterval(holdInterval)
    questionPage.classList.add('hide')
    resultsPage.classList.remove('hide')
}

function handleScores(){
    var inits = initials.value
    console.log(inits, score)
    

    
    redirectHighscores()
}

