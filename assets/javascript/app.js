// timer count
var timeStart = 60;
var intervalId;
//total number of questions 
var noQuestions = 5;
//number of correct answer
var correctAnswer = 0;
// number of questions not answered
var noAnswer = 0;
// number of answered questions.
var answered = 0;

//function that calculates a number of questions not answered by user.
function notAnswered(){
    //number of questions answered
    var y = document.getElementsByName("choice");
    for (var i = 0; i < y.length; i++){
        // if user checked a choice, it counts. 
        if (y[i].checked){
            answered++;
        }
    }
    //calculating number of questions not answered.
    noAnswer = noQuestions - answered;
}

// function that calculates the score of the user (correct answer)
function calculateScore(){
    // setting x all the choices in the questions
    var x= document.getElementsByName("choice");
    for (var i = 0; i < x.length; i++) {
        if (x[i].checked) {
            //if the checked value is "ans" then count as a correct answer
          if(x[i].value == "ans" ){
              correctAnswer++;
          }
        }
    }
}
//run when the page loads, then decrement every second.
function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
//decrement function where the timer decreases by 1 second.
function decrement(){
    timeStart--;
    //logging on the screen of the time for the user
    $("#timeLeft").html("<h2>" + "Time left: " + timeStart + " Seconds" + "</h2>");
    //when the time hits 0, stop the timer.
    //and put out the number of correct answer, unanswered, and incorrect questions.
    if (timeStart === 0){
        stop();
        notAnswered();
        calculateScore();
        $("#correctAnswer").html("<p>" + "You answered: " + correctAnswer + " questions correctly" + "</p>");
        $("#unAnswered").html("<p>" + "Did not answer: " + noAnswer + " questions" + "</p>");
        $("#incorrect").html("<p>" + "You got: " + (noQuestions - correctAnswer) + " questions wrong" + "</p?");
    }
}
// stop function that stops the timer.
function stop(){
    clearInterval(intervalId);
}
//timer goes to 1 making it nearly a 0.
function  timeToZero(){
    timeStart = 1;
}


run();

