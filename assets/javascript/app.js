/* psuedo code:
- create a var for correct gueses
- create a var for incorrect guesses
- create a timer to start on start button and display first question
    - if not answered in 30 seconds, display message "Time's up! the correct answer was XXX" with a "next question button", add one to incorrect guesses
    - if answered in time alloted, but not correct, display message "Incorrect. The correct answer was xxx" with a "next question button", add one to incorrect guesses
    - if answered in the time alloted and it was correct, display message "Correct!" with a "next question button", add one to correct guesses.
- when "next question" button clicked, move to the next question. iterate through loop 4 more times. 
- on last question, instead of "next question" button, display a "Play again?" button that displays the total numbers in the incorrect guesses and the correct guesses vars. When clicked start game over
*/

var qanda = [{
        question: "What city in the United States is nicknamed Brew City?",
        options: ["St. Louis", "Houston", "Milwaukee", "San Jose"],
        answer: 2,
    },
    // {
    //     question: "Which of the following WWE Superstars goes by the nickname Ric Flair?",
    //     images: ["/assets/images/Ric-Flair-WWE.jpg", "/assets/images/Randy-Savage.jpg", "/assets/images/Hulk-Hogan.jpg", "/assets/images/Andre-the-Giant.jpg"],
    //     answer: 0,
    // },
    {
        question: "Who was the first Supreme Court Justice?",
        options: ["RBG", "Alexandria Ocasio-Cortez", "Sandra Day O'Connor", "Nancy Pelosi"],
        answer: 2,
    },
    {
        question: "At the beginning of GoT, how many Stark children were there?",
        options: ["3", "5", "7", "9"],
        answer: 1,
    },
    {
        question: "Who was Kim Kardashian's first husband?",
        options: ["Jason Momoa", "Kevin Federline", "Kris Humphries", "Damon Thomas"],
        answer: 3,
    },
    {
        question: "What is Charlotte's NBA team?",
        options: ["Lakers", "Hornets", "76ers", "Kings"],
        answer: 1,
    },
    {
        question: "Which of the following is a fruit?",
        options: ["Cucumber", "Tomatoe", "Eggplant", "All of the above"],
        answer: 3,
    },
    {
        question: "Who is the richest of the following?",
        options: ["Warren Buffet", "Bernard Arnault", "Jeff Bezos", "Bill Gates"],
        answer: 2,
    },
]

//question counter var to know when to reset
var questionCounter = 0;

function questionTab() {
    if (questionCounter == 5) {
        $(".emptyMe").empty();
        clearInterval(timerId)
        $("#questionLine").html("Correct Guesses: " + correctGuesses + "<br>" + "Incorrect Guesses: " + incorrectGuesses);
        $("#next").html("<button type='button' class='btn btn-secondary btn-lg btn-block mt-5'>Play Again?</buton>").on("click", function () {
            //questionGenerator();
            $("#next").empty();
            questionCounter = 0;
            correctGuesses = 0;
            incorrectGuesses = 0;
            $("#timer").html("----");
            startButton();
        });
    }
}

//countdown function
var timeLeft = 30;

function countdown() {
    if (timeLeft == 0) {
        clearInterval(timerId)
        alert("You're out of time! The correct answer was " + qanda[questionIndy].options[qanda[questionIndy].answer]);
        incorrectGuesses++;
        console.log("CorrectGuesses: " + correctGuesses);
        console.log("IncorrectGuesses: " + incorrectGuesses);
    } else {
        $("#timer").html(timeLeft + " Seconds remaining")
        timeLeft--;
    }
}

// create a click event for start button
function startButton() {
    $("#popUp").text("Start")
}

//calls start button function
startButton();

//vars to track correct guesses and incorrect guesses
var correctGuesses = 0;
var incorrectGuesses = 0;

//variable to hold the index of the qanda var referenced
var questionIndy;

var timerId;

function questionGenerator() {
    $("#questionLine").html(qanda[questionIndy].question);
    $("#answer1").html(qanda[questionIndy].options[0]);
    $("#answer2").html(qanda[questionIndy].options[1]);
    $("#answer3").html(qanda[questionIndy].options[2]);
    $("#answer4").html(qanda[questionIndy].options[3]);
    questionTab();
    //countdown(); not needed here because the countdown function is called below
    timerId = setInterval(countdown, 1000);
    timeLeft = 30;
}

$("#popUp").on("click", function (event) {
    $("#popUp").hide();

    //generate a random question from the qanda var and assign it to the webpage
    questionIndy = Math.floor(Math.random() * qanda.length);
    questionGenerator();

    //click functions for the answers
    $("#answer1").on("click", function () {
        clearInterval(timerId);
        console.log("answer index: " + qanda[questionIndy].answer);
        if (qanda[questionIndy].answer == 0) {
            questionCounter++;
            console.log("questionCounter: " + questionCounter);
            correctGuesses++;
            console.log("CorrectGuesses: " + correctGuesses);
            console.log("IncorrectGuesses: " + incorrectGuesses);
            questionIndy = (questionIndy + 1) % qanda.length;
            console.log("questionIndy: " + questionIndy);
            $("#questionLine").text("Correct!");
            $(".emptyMe").empty();
            $("#next").html("<button type='button' class='btn btn-secondary btn-lg btn-block mt-5'>Next Question</buton>").on("click", function () {
                $("#next").empty();
                questionGenerator();
            })
        } else {
            questionCounter++;
            console.log("questionCounter: " + questionCounter);
            incorrectGuesses++;
            console.log("CorrectGuesses: " + correctGuesses);
            console.log("IncorrectGuesses: " + incorrectGuesses);
            //alert("Incorrect! The correct answer was " + qanda[questionIndy].options[qanda[questionIndy].answer]);
            $("#questionLine").text("Incorrect! The correct answer was " + qanda[questionIndy].options[qanda[questionIndy].answer]);
            $(".emptyMe").empty();
            questionIndy = (questionIndy + 1) % qanda.length;
            console.log("questionIndy: " + questionIndy);
            $("#next").html("<button type='button' class='btn btn-secondary btn-lg btn-block mt-5'>Next Question</buton>").on("click", function () {
                $("#next").empty();
                questionGenerator();
            })
        }
    });
    $("#answer2").on("click", function () {
        clearInterval(timerId);
        console.log("answer index: " + qanda[questionIndy].answer);
        if (qanda[questionIndy].answer == 1) {
            questionCounter++;
            console.log("questionCounter: " + questionCounter);
            correctGuesses++;
            console.log("CorrectGuesses: " + correctGuesses);
            console.log("IncorrectGuesses: " + incorrectGuesses);
            questionIndy = (questionIndy + 1) % qanda.length;
            console.log("questionIndy: " + questionIndy);
            $("#questionLine").text("Correct!");
            $(".emptyMe").empty();
            $("#next").html("<button type='button' class='btn btn-secondary btn-lg btn-block mt-5'>Next Question</buton>").on("click", function () {
                $("#next").empty();
                questionGenerator();
            })
        } else {
            questionCounter++;
            console.log("questionCounter: " + questionCounter);
            incorrectGuesses++;
            console.log("CorrectGuesses: " + correctGuesses);
            console.log("IncorrectGuesses: " + incorrectGuesses);
            //alert("Incorrect! The correct answer was " + qanda[questionIndy].options[qanda[questionIndy].answer]);
            $("#questionLine").text("Incorrect! The correct answer was " + qanda[questionIndy].options[qanda[questionIndy].answer]);
            $(".emptyMe").empty();
            questionIndy = (questionIndy + 1) % qanda.length;
            console.log("questionIndy: " + questionIndy);
            $("#next").html("<button type='button' class='btn btn-secondary btn-lg btn-block mt-5'>Next Question</buton>").on("click", function () {
                $("#next").empty();
                questionGenerator();
            })
        }
    });
    $("#answer3").on("click", function () {
        clearInterval(timerId);
        console.log("answer index: " + qanda[questionIndy].answer);
        if (qanda[questionIndy].answer == 2) {
            questionCounter++;
            console.log("questionCounter: " + questionCounter);
            correctGuesses++;
            console.log("CorrectGuesses: " + correctGuesses);
            console.log("IncorrectGuesses: " + incorrectGuesses);
            questionIndy = (questionIndy + 1) % qanda.length;
            console.log("questionIndy: " + questionIndy);
            $("#questionLine").text("Correct!");
            $(".emptyMe").empty();
            $("#next").html("<button type='button' class='btn btn-secondary btn-lg btn-block mt-5'>Next Question</buton>").on("click", function () {
                $("#next").empty();
                questionGenerator();
            })
        } else {
            incorrectGuesses++;
            questionCounter++;
            console.log("questionCounter: " + questionCounter);
            console.log("CorrectGuesses: " + correctGuesses);
            console.log("IncorrectGuesses: " + incorrectGuesses);
            //alert("Incorrect! The correct answer was " + qanda[questionIndy].options[qanda[questionIndy].answer]);
            $("#questionLine").text("Incorrect! The correct answer was " + qanda[questionIndy].options[qanda[questionIndy].answer]);
            $(".emptyMe").empty();
            questionIndy = (questionIndy + 1) % qanda.length;
            console.log("questionIndy: " + questionIndy);
            $("#next").html("<button type='button' class='btn btn-secondary btn-lg btn-block mt-5'>Next Question</buton>").on("click", function () {
                $("#next").empty();
                questionGenerator();
            })
        }
    });
    $("#answer4").on("click", function () {
        clearInterval(timerId);
        console.log("answer index: " + qanda[questionIndy].answer);
        if (qanda[questionIndy].answer == 3) {
            questionCounter++;
            console.log("questionCounter: " + questionCounter);
            correctGuesses++;
            console.log("CorrectGuesses: " + correctGuesses);
            console.log("IncorrectGuesses: " + incorrectGuesses);
            questionIndy = (questionIndy + 1) % qanda.length;
            console.log("questionIndy: " + questionIndy);
            $("#questionLine").text("Correct!");
            $(".emptyMe").empty();
            $("#next").html("<button type='button' class='btn btn-secondary btn-lg btn-block mt-5'>Next Question</buton>").on("click", function () {
                $("#next").empty();
                questionGenerator();
            })
        } else {
            questionCounter++;
            console.log("questionCounter: " + questionCounter);
            incorrectGuesses++;
            console.log("CorrectGuesses: " + correctGuesses);
            console.log("IncorrectGuesses: " + incorrectGuesses);
            //alert("Incorrect! The correct answer was " + qanda[questionIndy].options[qanda[questionIndy].answer]);
            $("#questionLine").text("Incorrect! The correct answer was " + qanda[questionIndy].options[qanda[questionIndy].answer]);
            $(".emptyMe").empty();
            questionIndy = (questionIndy + 1) % qanda.length;
            console.log("questionIndy: " + questionIndy);
            $("#next").html("<button type='button' class='btn btn-secondary btn-lg btn-block mt-5'>Next Question</buton>").on("click", function () {
                $("#next").empty();
                questionGenerator();
            })
        }
    });
})