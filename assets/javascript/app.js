/* psuedo code:

- create a timer to start on start button and display first question
    - if not answered in 30 seconds, display message "Time's up! the correct answer was XXX" with a "next question button".
    - if answered in time alloted, but not correct, display message "Incorrect. The correct answer was xxx" with a "next question button" 
    - if answered in the time alloted and it was correct, display message "Correct!" with a "next question button".
- when "next question" button clicked, move to the next question. iterate through loop 4 more times. 
- on last question, instead of "next question" button, display a "Play again?" button. When clicked start game over
*/

// create a click event for start button
function startButton() {
    $("#popUp").text("Start")
}

//countdown function
var timeLeft = 30;
var timer =$("#timer");
var timerId = setInterval(countdown,1000);

function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId)
        alert("You're out of time! The correct answer was...")
    }
    else {
        $("#timer").html(timeLeft + " Seconds remaining")
        timeLeft--;
    }
}

//calls start button function
startButton ();

$("#popUp").on("click",function (event){
    $("#popUp").remove();
    countdown();
    $(".questionLine").text("What city in the United States is nicknamed Brew City?");
    $(".answerLine").html("answer1")

})









