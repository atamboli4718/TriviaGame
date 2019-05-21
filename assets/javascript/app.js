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
        question: "What’s the real name of Siddartha Gautama?",
        options: ["Buddah", "Alexander the Great", "Barrack Obama", "John Legend"],
        answer: 0,
    },
    {
        question: "What nationality was Marco Polo?",
        options: ["Chinese", "Polish", "Spanish", "Italian"],
        answer: 3,
    },
    {
        question: "Who said E=mc^2?",
        options: ["Ada Lovelace", "Einstein", "Isaac Newton", "John Legend"],
        answer: 1,
    },
    {
        question: "Who was Henry VIII's daughter?",
        options: ["Elizabeth", "Catherine of Aragon", "Marie Antionette", "Bloody Mary"],
        answer: 3,
    },
    {
        question: "Which artist made his name with paintings of soup cans and Coca-Cola bottles?",
        options: ["Henri Matisse", "Edvard Munch", "Andy Warhol", "Renoir"],
        answer: 2,
    },
    {
        question: "Who lived at 221B, Baker Street, London?",
        options: ["Guy Ferrari", "Sherlock Holmes", "Dr. Who", "Kate Middleton"],
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
var timeLeft = 30;
//vars to track correct guesses and incorrect guesses
var correctGuesses = 0;
var incorrectGuesses = 0;
//variable to hold the index of the qanda var referenced
var questionIndy;
//var for timerId
var timerId;

//click function for when clicking on start
$("#popUp").on("click", function (event) {
    $("#popUp").empty();
    //generate a random question from the qanda var and assign it to the webpage
    questionIndy = Math.floor(Math.random() * qanda.length);
    questionGenerator();

})

//countdown function
function countdown() {
    if (timeLeft == 0) {
        clearInterval(timerId);
        questionCounter++;
        console.log("questionCounter: " + questionCounter);
        incorrectGuesses++;
        console.log("CorrectGuesses: " + correctGuesses);
        console.log("IncorrectGuesses: " + incorrectGuesses);
        $("#questionLine").empty();
        $(".emptyMe").empty();
        $("#timer").text("----");
        $("#next").html("<button type='button' class='btn btn-secondary btn-lg btn-block mt-5'>You're out of time!</buton>");
    } else {
        $("#timer").html(timeLeft + " Seconds remaining")
        timeLeft--;
    }
}

//function population the question and answer buttons
function questionGenerator() {
    $("#questionLine").html(qanda[questionIndy].question);
    $("#answer1").html(qanda[questionIndy].options[0]);
    $("#answer2").html(qanda[questionIndy].options[1]);
    $("#answer3").html(qanda[questionIndy].options[2]);
    $("#answer4").html(qanda[questionIndy].options[3]);
    questionTab();
    console.log("questionCounter: " + questionCounter);
};

//click functions for the answers
$("#answer1").on("click", function () {
    clearInterval(timerId);
    console.log("timerId: " + timerId);
    console.log("answer index: " + qanda[questionIndy].answer);
    if (qanda[questionIndy].answer == 0) {
        correct();
    } else {
        incorrect();
    }
});
$("#answer2").on("click", function () {
    clearInterval(timerId);
    console.log("timerId: " + timerId);
    console.log("answer index: " + qanda[questionIndy].answer);
    if (qanda[questionIndy].answer == 1) {
        correct();
    } else {
        incorrect();
    }
});
$("#answer3").on("click", function () {
    clearInterval(timerId);
    console.log("timerId: " + timerId);
    console.log("answer index: " + qanda[questionIndy].answer);
    if (qanda[questionIndy].answer == 2) {
        correct();
    } else {
        incorrect();
    }
});
$("#answer4").on("click", function () {
    clearInterval(timerId);
    console.log("timerId: " + timerId);
    console.log("answer index: " + qanda[questionIndy].answer);
    if (qanda[questionIndy].answer == 3) {
        correct();
    } else {
        incorrect();
    }
});

//keeps track of total questions completed
function questionTab() {
    if (questionCounter == 5) {
        $(".emptyMe").empty();
        clearInterval(timerId);
        $("#timer").text("----");
        $("#questionLine").html("Correct Guesses: " + correctGuesses + "<br>" + "Incorrect Guesses: " + incorrectGuesses);
        $("#startOver").show();
        $("#startOver").html("<button type='button' class='btn btn-secondary btn-lg btn-block mt-5'>Play Again?</buton>");
    }
    else {
        timerId = setInterval(countdown, 1000);
        timeLeft = 30;    
    }
}

//for starting over when clicking on the Play Again button
$("#startOver").on("click",function(){
    //questionGenerator();
    $("#startOver").hide();
    $("#questionLine").empty();
    clearInterval(timerId);
    $("#timer").text("----");  
    questionCounter = 0;
    correctGuesses = 0;
    incorrectGuesses = 0; 
    startButton();  
})

// function to populate start button after completeing one round
function startButton() {
    $("#popUp").html("<button type='button' class='btn btn-secondary btn-lg btn-block mt-5' id='popUp'>Start</button>");
}


//function for when you click on next question or out of time to move to next question
$("#next").on("click",function(){
        $("#next").empty();
        questionIndy = (questionIndy + 1) % qanda.length;
        questionGenerator();
});

//functions for when an answer is correct or incorrect
function correct() {
    questionCounter++;
    console.log("questionCounter: " + questionCounter);
    correctGuesses++;
    console.log("CorrectGuesses: " + correctGuesses);
    console.log("IncorrectGuesses: " + incorrectGuesses);
    console.log("questionIndy: " + questionIndy);
    $("#questionLine").text("Correct!");
    $(".emptyMe").empty();
    $("#next").html("<button type='button' class='btn btn-secondary btn-lg btn-block mt-5'>Next Question</buton>");
};

function incorrect() {
    questionCounter++;
    console.log("questionCounter: " + questionCounter);
    incorrectGuesses++;
    console.log("CorrectGuesses: " + correctGuesses);
    console.log("IncorrectGuesses: " + incorrectGuesses);
    //alert("Incorrect! The correct answer was " + qanda[questionIndy].options[qanda[questionIndy].answer]);
    $("#questionLine").text("Incorrect! The correct answer was " + qanda[questionIndy].options[qanda[questionIndy].answer]);
    $(".emptyMe").empty();
    console.log("questionIndy: " + questionIndy);
    $("#next").html("<button type='button' class='btn btn-secondary btn-lg btn-block mt-5'>Next Question</buton>");
};
//calls start button function
startButton();
