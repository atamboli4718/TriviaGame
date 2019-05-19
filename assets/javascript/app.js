/* psuedo code:

- create a timer to start on start button and display first question
    - if not answered in 30 seconds, display message "Time's up! the correct answer was XXX" with a "next question button".
    - if answered in time alloted, but not correct, display message "Incorrect. The correct answer was xxx" with a "next question button" 
    - if answered in the time alloted and it was correct, display message "Correct!" with a "next question button".
- when "next question" button clicked, move to the next question. iterate through loop 4 more times. 
- on last question, instead of "next question" button, display a "Play again?" button. When clicked start game over
*/

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

$("#popUp").on("click", function (event) {
    $("#popUp").remove();
    //countdown(); not needed because countdown function called below
    var timerId = setInterval(countdown, 1000);
    $(".questionLine").text("What city in the United States is nicknamed Brew City?");
    $("#answer1").html("St. Louis")
    $("#answer2").html("Houston")
    $("#answer3").html("Milwaukee")
    $("#answer4").html("San Jose")

})