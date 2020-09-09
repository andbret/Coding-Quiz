// sets the starting condition for several elements
document.getElementById("begin").hidden = false;
document.getElementById("begin2").hidden = false;
document.getElementById("begin3").hidden = false;
document.getElementById("buttonA").hidden = true;
document.getElementById("buttonB").hidden = true;
document.getElementById("buttonC").hidden = true;
document.getElementById("buttonD").hidden = true;
document.getElementById("buttonA").disabled = false;
document.getElementById("buttonB").disabled = false;
document.getElementById("buttonC").disabled = false;
document.getElementById("buttonD").disabled = false;
document.getElementById("scoreForm").hidden = true;

document.getElementById("bug").hidden = true;
var correct = 0;
var score = 0;
// all quiz questions
var question1 = '{"title":"Which operator is used to assign a value to a variable?", "a":"x", "b":"-", "c":"=", "d":"*", "answer":"="}'
var question2 = '{"title":"Which event occurs when the user clicks on an HTML element?", "a":"onchange ", "b":"onclick", "c":"onmouseclick", "d":"onmouseover", "answer":"onclick"}'
var question3 = '{"title":"How do you find the number with the highest value of x and y?", "a":"top(x, y) ", "b":"Math.ceil(x, y)", "c":"Math.max(x, y)", "d":"ceil(x, y)", "answer":"Math.max(x, y)"}'
var question4 = '{"title":"How do you round the number 7.25, to the nearest integer?", "a":"Math.round(7.25) ", "b":"rnd(7.25)", "c":"Math.rnd(7.25)", "d":"round(7.25)", "answer":"Math.round(7.25) "}'
var question5 = '{"title":"How does a FOR loop start?", "a":"for (i &lt;= 5; i++)", "b":"for (i = 0; i &lt;= 5; i++)", "c":"for i = 1 to 5", "d":"for (i = 0; i &lt;= 5)", "answer":"for (i = 0; i &lt;= 5; i++)"}'
var question6 = '{"title":"How to write an IF statement in JavaScript?", "a":"if (i == 5)", "b":"if i == 5 then", "c":"if i = 5", "d":"if i = 5 then", "answer":"if (i == 5)"}'
var question7 = '{"title":"How do you write &quot;Hello World&quot; in an alert box?", "a":"alertBox(&quot;Hello World&quot;);", "b":"msgBox(&quot;Hello World&quot;);", "c":"alert(&quot;Hello World&quot;);", "d":"msg(&quot;Hello World&quot;);", "answer":"alert(&quot;Hello World&quot;);"}'
var question8 = '{"title":"How do you declare a JavaScript variable?", "a":"carName","b":"v carName;", "c":"variable carName;", "d":"var carName;", "answer":"var carName;"}'
var question9 = '{"title":"How can you detect the clients browser name?", "a":"browser.name","b":"client.navName", "c":"navigator.appName", "d":"browser.client", "answer":"navigator.appName"}'
var question10 = '{"title":"How do you create a function in JavaScript?", "a":"function myFunction()","b":"function = myFunction()", "c":"function:myFunction()", "d":"create.function", "answer":"function:myFunction()"}'
// creates an array of the questions
var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
// displays the correct information depending on the current question
function renderQuestion() {
    var scoreEl = document.querySelector("#score");
    scoreEl.textContent = score;
    console.log(correct)
    var i = correct;

    var options = JSON.parse(questions[i]);
    var g = options.answer;
    // loads correct content
    document.getElementById("questionTitle").innerHTML = options.title;
    document.getElementById("buttonA").innerHTML = options.a;
    document.getElementById("buttonB").innerHTML = options.b;
    document.getElementById("buttonC").innerHTML = options.c;
    document.getElementById("buttonD").innerHTML = options.d;

//    un-hides the buttons
    document.getElementById("buttonA").hidden = false;
    document.getElementById("buttonB").hidden = false;
    document.getElementById("buttonC").hidden = false;
    document.getElementById("buttonD").hidden = false;
}
//  lets me select from all buttons
var allBtns = document.querySelectorAll(".btn");

for (var y = 0; y < allBtns.length; y++) {

    allBtns[y].addEventListener("click", function (event) {
        // selects a quiestion based on how many the user has correctly answered
        var options = JSON.parse(questions[correct]);
    //    hides the landing screen content
        document.getElementById("begin").hidden = true;
        document.getElementById("begin2").hidden = true;
        document.getElementById("begin2").hidden = true;

        console.log(event.target);
        console.log(event.target.id);

        // checks if the button the user clicked is the correct answer
        if ((event.target.id === "buttonA") && ((options.a) === (options.answer))) {
// in the event of a correct answer...
            console.log("WINNER!!");
            // raises question number
            correct++;
            console.log(correct);
// raises the score
            score++;
            // resets any disabled buttons
            document.getElementById("buttonA").disabled = false;
            document.getElementById("buttonB").disabled = false;
            document.getElementById("buttonC").disabled = false;
            document.getElementById("buttonD").disabled = false;
// starts the next question
            renderQuestion()
        }
        else {
            if (event.target.id === "buttonA") {
                // reduces the score for an incorrect answer
            count = count - 10;
            // disables the incorrect option
            document.getElementById("buttonA").disabled = true;
// ensures button content remains the same
            renderQuestion()
            }
        }

        if ((event.target.id === "buttonB") && ((options.b) === (options.answer))) {


            console.log("WINNER!!");
            correct++;
            console.log(correct);

            score++;
            document.getElementById("buttonA").disabled = false;
            document.getElementById("buttonB").disabled = false;
            document.getElementById("buttonC").disabled = false;
            document.getElementById("buttonD").disabled = false;

            renderQuestion()
        }
        else {
            if ((event.target.id === "buttonB") && (event.target.id != "begin")) {
            count = count - 10;
            document.getElementById("buttonB").disabled = true;

            renderQuestion()
            }
        }

        if ((event.target.id === "buttonC") && ((options.c) === (options.answer))) {


            console.log("WINNER!!");
            correct++;
            console.log(correct);
            score++;
            document.getElementById("buttonA").disabled = false;
            document.getElementById("buttonB").disabled = false;
            document.getElementById("buttonC").disabled = false;
            document.getElementById("buttonD").disabled = false;

            renderQuestion()
        }
        else {
            if ((event.target.id === "buttonC") && (event.target.id != "begin")) {
            count = count - 10;
            document.getElementById("buttonC").disabled = true;

            renderQuestion()
            }
        }


        if ((event.target.id === "buttonD") && ((options.d) === (options.answer))) {

            console.log("WINNER!!");
            correct++;
            score++;
            document.getElementById("buttonA").disabled = false;
            document.getElementById("buttonB").disabled = false;
            document.getElementById("buttonC").disabled = false;
            document.getElementById("buttonD").disabled = false;

            renderQuestion()

        }
        else {
            if ((event.target.id === "buttonD") && (event.target.id != "begin")) {
            count = count - 10;
            document.getElementById("buttonD").disabled = true;

            renderQuestion()
            }
        }
// starts the quiz
        if (event.target.id === "begin") {
            document.getElementById("buttonA").disabled = false;
            document.getElementById("buttonB").disabled = false;
            document.getElementById("buttonC").disabled = false;
            document.getElementById("buttonD").disabled = false;
            renderQuestion()
        }


    });


}
// timer code
var count = 60;
function prepareRead() {

    // Create the countdown timer.
    var countdownTimer = setInterval(function () {
        var timerEl = document.querySelector("#timer");
        timerEl.textContent = count;



        if ((count <= 0) || (score == 10)) {
            clearInterval(countdownTimer);
            complete()
        }

        count--;
    }, 1000);
    
}
// conditions for the score submition screen
function complete() {
    document.getElementById("begin").hidden = true;
    document.getElementById("begin2").hidden = true;
    document.getElementById("begin3").hidden = true;
    document.getElementById("buttonA").hidden = true;
    document.getElementById("buttonB").hidden = true;
    document.getElementById("buttonC").hidden = true;
    document.getElementById("buttonD").hidden = true;
    document.getElementById("questionTitle").innerHTML = "Enter yout initials and save your score!";
    document.getElementById("scoreForm").hidden = false;

}



var scoreInput = document.querySelector("#score-text");
var scoreForm = document.querySelector("#score-form");
var scoreList = document.querySelector("#score-list");
var scoreCountSpan = document.querySelector("#score-count");

// shows the high scores
renderscores();

function renderscores() {
  scores = JSON.parse(localStorage.getItem("scores")) || [];

  // Clear scoreList element and update scoreCountSpan
  scoreList.innerHTML = "";
  scoreCountSpan.textContent = scores.length+ score;

  // Render a new li for each score
  for (var i = 0; i < scores.length; i++) {
    var score = scores[i];

    var li = document.createElement("li");
    li.textContent = score;
    scoreList.appendChild(li);
  }
}

scoreForm.addEventListener("submit", function(event) {
  event.preventDefault();

  console.log("Form was submitted!");

  var newscoreText = scoreInput.value;

  console.log(newscoreText);

  scores.push(newscoreText + " " + score);

  console.log(scores);

  localStorage.setItem("scores", JSON.stringify(scores));

  scoreInput.value = "";

  renderscores();
});

