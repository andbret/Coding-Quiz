document.getElementById("begin").hidden = false;
document.getElementById("begin2").hidden = false;
document.getElementById("begin3").hidden = false;
document.getElementById("buttonA").hidden = true;
document.getElementById("buttonB").hidden = true;
document.getElementById("buttonC").hidden = true;
document.getElementById("buttonD").hidden = true;
var correct = 0;
// var question1 = '{"title":"Inside which HTML element do we put the JavaScript?","a":"&lt;javascript&gt;","b":"&lt;scripting&gt;", "c":"&lt;script&gt;", "d":"&lt;js&gt;", "answer":"&lt;script&gt;"}'
// var question2 ='{"title":"How do you write &quot;Hello World&quot; in an alert box?","a":"alertBox(&quot;Hello World&quot;);","b":"msg(&quot;Hello World&quot;);", "c":"alert(&quot;Hello World&quot;);", "d":"msgBox(&quot;Hello World&quot;);", "answer":"alert(&quot;Hello World&quot;);"}'
// var question3 = '{"title":"How to write an IF statement in JavaScript?","a":"if (i == 5)","b":"if i = 5 then", "c":"if i = 5", "d":"if i == 5 then", "answer":"if (i == 5)"}'
// var question4 = '{"title":"How to write an IF statement for executing some code if &quot;i&quot; is NOT equal to 5?","a":"if i &lt;&gt; 5","b":"if i =! 5 then", "c":"if (i != 5)", "d":"if (i &lt;&gt; 5)", "answer":"if (i != 5)"}'
var question1 = '{"title":"question1", "a":"no", "b":"no", "c":"no", "d":"yes", "answer":"yes"}'
var question2 = '{"title":"question2", "a":"no", "b":"yes2", "c":"no", "d":"no", "answer":"yes2"}'
var question3 = '{"title":"question3", "a":"no", "b":"no", "c":"yes3", "d":"no", "answer":"yes3"}'
var question4 = '{"title":"question4", "a":"no", "b":"no", "c":"yes", "d":"no", "answer":"yes"}'
var question5 = '{"title":"question5", "a":"no", "b":"no", "c":"yes", "d":"no", "answer":"yes"}'
var question6 = '{"title":"question6", "a":"no", "b":"no", "c":"yes", "d":"no", "answer":"yes"}'
var question7 = '{"title":"question7", "a":"no", "b":"no", "c":"yes", "d":"no", "answer":"yes"}'
var question8 = '{"title":"question8", "a":"no", "b":"no", "c":"yes", "d":"no", "answer":"yes"}'
var question9 = '{"title":"question9", "a":"no", "b":"no", "c":"yes", "d":"no", "answer":"yes"}'
var question10 = '{"title":"question10", "a":"no","b":"no", "c":"yes", "d":"no", "answer":"yes"}'

var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

function renderQuestion(){
    console.log(correct)
    // event.preventDefault()
 var i = correct;

var options = JSON.parse(questions[i]);
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
    console.log(allBtns);

}
var allBtns = document.querySelectorAll(".btn");
var options = JSON.parse(questions[correct]);
for(var y = 0; y < allBtns.length; y++) {
    allBtns[y].addEventListener("click", function(event) {
        // event.preventDefault();
        document.getElementById("begin").hidden = true;
        document.getElementById("begin2").hidden = true;
        document.getElementById("begin2").hidden = true;

        console.log(event.target);
        console.log(event.target.id); 
        if((event.target.id === "buttonA")&&((options.a) === (options.answer)))  {
                


                console.log("WINNER!!");
                correct++;
                console.log(correct);
          
                renderQuestion()
            }
            else{renderQuestion()}
            
        if((event.target.id === "buttonB")&&((options.b) === (options.answer)))  {
                

                console.log("WINNER!!");
                correct++;
                console.log(correct);
          
                renderQuestion()
            }
            else{renderQuestion()}

        if((event.target.id === "buttonC") && ((options.c) === (options.answer)))  {
                

                console.log("WINNER!!");
                correct++;
                console.log(correct);
          
                renderQuestion()
            }
            else{renderQuestion()}
            

        if((event.target.id === "buttonD")&&((options.d) === (options.answer)))  {

                console.log("WINNER!!");
                correct++;
                // console.log(theAnswer);
          
                renderQuestion()
            }
            else{renderQuestion()}
            

    });
}

