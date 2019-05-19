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

var qanda = [
    {
        question: "What city in the United States is nicknamed Brew City?",
        options: ["St. Louis","Houston","Milwaukee","San Jose"],
        answer: 2,
    },
    {
        question: "Which of the following WWE Superstars goes by the nickname Ric Flair?",
        images: ["/assets/images/Ric-Flair-WWE.jpg","/assets/images/Randy-Savage.jpg","/assets/images/Hulk-Hogan.jpg","/assets/images/Andre-the-Giant.jpg"],
        answer: 0,
    },
    {
        question: "Who was the first Supreme Court Justice?",
        options: ["RBG","Alexandria Ocasio-Cortez","Sandra Day O'Connor","Nancy Pelosi"],
        answer: 2,
    },
    {
        question: "At the beginning of GoT, how many Stark children were there?",
        options: ["3","5","7","9"],
        answer: 1,
    },
    {
        question: "Who was Kim Kardashian's first husband?",
        options: ["Jason Momoa","Kevin Federline","Kris Humphries","Damon Thomas"],
        answer: 3,
    },
    {
        question: "What is Charlotte's NBA team?",
        options: ["Lakers","Hornets","76ers","Kings"],
        answer: 1, 
    },
    // {
    //     question: "Who was Kim Kardashian's first husband?",
    //     options: ["Jason Momoa","Kevin Federline","Kris Humphries","Damon Thomas"],
    //     answer: 3,
    // }
]

//countdown function
var timeLeft = 30;

function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId)
        alert("You're out of time! The correct answer was...")
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
var correctGuesses;
var incorrectGuesses;

$("#popUp").on("click", function (event) {
    $("#popUp").remove();
    //countdown(); not needed because countdown function called below
    var timerId = setInterval(countdown, 1000);
    $("#questionLine").html("What city in the US in nicknamed Brew City?");
    $("#answer1").html("St. Louis")
    $("#answer2").html("Houston")
    $("#answer3").html("Milwaukee")
    $("#answer4").html("San Jose")

})