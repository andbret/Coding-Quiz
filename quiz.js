var correct = 0;
var question1 = '{"title":"question1","a":"no","b":"no", "c":"wow an answer", "d":"no", "answer":"wow an answer"}'
var question2 = '{"title":"question2","a":"no","b":"no", "c":"wow an answer", "d":"no", "answer":"wow an answer"}'
var question3 = '{"title":"question3","a":"no","b":"no", "c":"yes", "d":"no", "answer":"yes"}'
var question4 = '{"title":"question4","a":"no","b":"no", "c":"yes", "d":"no", "answer":"yes"}'
var question5 = '{"title":"question5","a":"no","b":"no", "c":"yes", "d":"no", "answer":"yes"}'
var question6 = '{"title":"question6","a":"no","b":"no", "c":"yes", "d":"no", "answer":"yes"}'
var question7 = '{"title":"question7","a":"no","b":"no", "c":"yes", "d":"no", "answer":"yes"}'
var question8 = '{"title":"question8","a":"no","b":"no", "c":"yes", "d":"no", "answer":"yes"}'
var question9 = '{"title":"question9","a":"no","b":"no", "c":"yes", "d":"no", "answer":"yes"}'
var question10 = '{"title":"question10","a":"no","b":"no", "c":"yes", "d":"no", "answer":"yes"}'

var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

function renderQuestion(){
    event.preventDefault()
 var i = correct;

var options = JSON.parse(questions[i]);
document.getElementById("demo").innerHTML = options.title;
document.getElementById("buttona").innerHTML = options.a;
document.getElementById("buttonb").innerHTML = options.b;
document.getElementById("buttonc").innerHTML = options.c;
document.getElementById("buttond").innerHTML = options.d;
document.getElementById("theAnswer").innerHTML = options.answer;


    var allBtns = document.querySelectorAll(".btn");
    console.log(allBtns);
    
for(var y = 0; y < allBtns.length; y++) {
	allBtns[y].addEventListener("click", function(event) {
        event.preventDefault();
		console.log(event.target);
		console.log(event.target.id);
		if(event.target.id === "buttonc")  {
            if((document.getElementById("buttonc").innerHTML = options.c) === (document.getElementById("theAnswer").innerHTML = options.answer))  {
                
                document.getElementById("buttonc").innerHTML = options.c;
                console.log("WINNER!!");
                correct++;
                console.log(correct);
          
                renderQuestion()
            }
            else{}
			
        }
        else{}
	});
}
}


