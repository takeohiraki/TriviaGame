var clockRunning = false;
var time = 25;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

$(".start-button").on("click", function() {
    console.log("Started");

    $(this).hide();
    $(".questions").show();

    $("#display").text(time + " seconds");

    start();
  });

function quiz_evaluation() {
    var selections = {
        q1_choice: $('#q1 input:radio:checked').val(),
        q2_choice: $('#q2 input:radio:checked').val(),
        q3_choice: $('#q3 input:radio:checked').val(),
        q4_choice: $('#q4 input:radio:checked').val()
    }

    for(var i = 0; i < Object.keys(answers).length; i++) {
        if (selections[Object.keys(selections)[i]] == answers[Object.keys(answers)[i]]) {
            correct ++;
            console.log("selection" + selections[Object.keys(selections)[i]]);
            console.log("answer" + answers[Object.keys(answers)[i]]);
        }
        else if (typeof selections[Object.keys(selections)[i]] == 'undefined') {
            unanswered ++;
        }
        else {
            incorrect ++;
        }
        console.log("correct: " + correct);
        console.log("incorrect: " + incorrect);
        console.log("unanswered: " + unanswered);
    }

}

function quiz_summary() {
    $(".questions").hide();

    $("#correct").text(correct);
    $("#incorrect").text(incorrect);
    $("#unanswered").text(unanswered);

    $(".quiz-summary").show();
}

var answers = {
    q1_answer: "2",
    q2_answer: "1",
    q3_answer: "2",
    q4_answer: "4"
};
console.log(answers.q1_answer);
console.log(answers.q2_answer);

function start() {
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
  }

function stop() {
    clearInterval(intervalId);
    clockRunning = false;
}

function count() {
    time--;

    if (time==0) {
        stop();
        quiz_evaluation();
        quiz_summary();
    }

    $("#display").text(time + " seconds");        
  }

