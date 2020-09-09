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
document.getElementById("formmmm").hidden = true;

document.getElementById("idk").hidden = true;
// var count = 60;
var correct = 0;
var score = 0;

// var question1 = '{"title":"Inside which HTML element do we put the JavaScript?","a":"&lt;javascript&gt;","b":"&lt;scripting&gt;", "c":"&lt;script&gt;", "d":"&lt;js&gt;", "answer":"&lt;script&gt;"}'
// var question2 ='{"title":"How do you write &quot;Hello World&quot; in an alert box?","a":"alertBox(&quot;Hello World&quot;);","b":"msg(&quot;Hello World&quot;);", "c":"alert(&quot;Hello World&quot;);", "d":"msgBox(&quot;Hello World&quot;);", "answer":"alert(&quot;Hello World&quot;);"}'
// var question3 = '{"title":"How to write an IF statement in JavaScript?","a":"if (i == 5)","b":"if i = 5 then", "c":"if i = 5", "d":"if i == 5 then", "answer":"if (i == 5)"}'
// var question4 = '{"title":"How to write an IF statement for executing some code if &quot;i&quot; is NOT equal to 5?","a":"if i &lt;&gt; 5","b":"if i =! 5 then", "c":"if (i != 5)", "d":"if (i &lt;&gt; 5)", "answer":"if (i != 5)"}'
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

var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

function renderQuestion() {
    var scoreEl = document.querySelector("#score");
    scoreEl.textContent = score;
    console.log(correct)
    // event.preventDefault()
    var i = correct;

    var options = JSON.parse(questions[i]);
    var g = options.answer;
    document.getElementById("demo").innerHTML = options.title;
    document.getElementById("buttonA").innerHTML = options.a;
    document.getElementById("buttonB").innerHTML = options.b;
    document.getElementById("buttonC").innerHTML = options.c;
    document.getElementById("buttonD").innerHTML = options.d;
    // document.getElementById("theAnswer") = options.answer;


    document.getElementById("buttonA").hidden = false;
    document.getElementById("buttonB").hidden = false;
    document.getElementById("buttonC").hidden = false;
    document.getElementById("buttonD").hidden = false;

    var allBtns = document.querySelectorAll(".btn");
    console.log(options.answer);

}
var allBtns = document.querySelectorAll(".btn");

for (var y = 0; y < allBtns.length; y++) {

    allBtns[y].addEventListener("click", function (event) {
        var options = JSON.parse(questions[correct]);
        // event.preventDefault();
        document.getElementById("begin").hidden = true;
        document.getElementById("begin2").hidden = true;
        document.getElementById("begin2").hidden = true;

        console.log(event.target);
        console.log(event.target.id);

        if ((event.target.id === "buttonA") && ((options.a) === (options.answer))) {



            console.log("WINNER!!");
            correct++;
            console.log(correct);
            // count = count + 6;
            score++;
            document.getElementById("buttonA").disabled = false;
            document.getElementById("buttonB").disabled = false;
            document.getElementById("buttonC").disabled = false;
            document.getElementById("buttonD").disabled = false;

            renderQuestion()
        }
        else {
            if (event.target.id === "buttonA") {
            count = count - 10;
            document.getElementById("buttonA").disabled = true;

            renderQuestion()
            }
        }

        if ((event.target.id === "buttonB") && ((options.b) === (options.answer))) {


            console.log("WINNER!!");
            correct++;
            console.log(correct);
            // count = count + 6;
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
            // count = count + 6;
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
            // count = count + 6;
            score++;
            document.getElementById("buttonA").disabled = false;
            document.getElementById("buttonB").disabled = false;
            document.getElementById("buttonC").disabled = false;
            document.getElementById("buttonD").disabled = false;
            // console.log(theAnswer);



            renderQuestion()

        }
        else {
            if ((event.target.id === "buttonD") && (event.target.id != "begin")) {
            count = count - 10;
            document.getElementById("buttonD").disabled = true;

            renderQuestion()
            }
        }

        if (event.target.id === "begin") {
            document.getElementById("buttonA").disabled = false;
            document.getElementById("buttonB").disabled = false;
            document.getElementById("buttonC").disabled = false;
            document.getElementById("buttonD").disabled = false;
            renderQuestion()
        }


    });


}

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

function complete() {
    document.getElementById("begin").hidden = true;
    document.getElementById("begin2").hidden = true;
    document.getElementById("begin3").hidden = true;
    document.getElementById("buttonA").hidden = true;
    document.getElementById("buttonB").hidden = true;
    document.getElementById("buttonC").hidden = true;
    document.getElementById("buttonD").hidden = true;
    document.getElementById("demo").innerHTML = "Enter yout initials and save your score!";
    document.getElementById("formmmm").hidden = false;

}



var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

function renderTodos() {
  todos = JSON.parse(localStorage.getItem("todos")) || [];

  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length+ score;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  }
}

todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  console.log("Form was submitted!");

  var newTodoText = todoInput.value;

  console.log(newTodoText);

  todos.push(newTodoText + " " + score);

  console.log(todos);

  localStorage.setItem("todos", JSON.stringify(todos));

  todoInput.value = "";

  renderTodos();
});

function reset(){
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
    document.getElementById("formmmm").hidden = true;
    // var count = 60;
    correct = 0;
    score = 0;  
    count = 60;
    document.getElementById("demo").innerHTML = "";
}