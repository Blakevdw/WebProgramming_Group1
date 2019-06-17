
 function myFunction() {
    alert("You Scored 3/3!");
}



function check() {
    
    var question1 = document.quiz.question1.valuel;
    var question2 = document.quiz.question2.valuel;
    var question3 = document.quiz.question3.valuel;
    var correct = 0;

    if (question1 == "D") {
        correct++;
    }

    if (question2 == "D") {
        correct++;
    }

    if (question3 == "A") {
        correct++;
    }

    if (correct == 0) {
        score = 2;
    }

    if (correct > 0 && correct < 3) {
        score = 1;
    }

    if (correct == 3) {
        score = 0;
    }

    document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("message").innerHTML = messages[score];

    
   
}