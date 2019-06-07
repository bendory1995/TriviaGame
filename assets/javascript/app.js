// timer count
var timeStart = 30;
var intervalId;
//number of questions 
var noQuestions = 5;
//number of correct answer
var correctAnswer = 0;
// number of questions not answered
var noAnswer = 0;
var answered = 0;


function notAnswered(){
    //number of questions answered
    var y = document.getElementsByName("choice");
    for (var i = 0; i < y.length; i++){
        if (y[i].checked){
            answered++;
        }
    }
    noAnswer = noQuestions - answered;
    console.log(noAnswer);
}


function calculateScore(){
    var x= document.getElementsByName("choice");
    for (var i = 0; i < x.length; i++) {
        if (x[i].checked) {
          if(x[i].value == "ans" ){
              correctAnswer++;
          }
        }
    }
}

function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement(){
    timeStart--;
    $("#timeLeft").html("<h2>" + "Time left: " + timeStart + " Seconds" + "</h2>");
    if (timeStart === 0){
        stop();
        notAnswered();
        calculateScore();
        $("#correctAnswer").html("<p>" + "You answered: " + correctAnswer + " questions correctly" + "</p>");
        $("#unAnswered").html("<p>" + "Did not answer: " + noAnswer + " questions" + "</p>");
        $("#incorrect").html("<p>" + "You got: " + (noQuestions - correctAnswer) + " questions wrong" + "</p?");
    }
}

function stop(){
    clearInterval(intervalId);
}
function  timeToZero(){
    timeStart = 1;
}


run();

