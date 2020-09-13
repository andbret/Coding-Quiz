var scoreInput = document.querySelector("#score-text");
var scoreForm = document.querySelector("#score-form");
var scoreList = document.querySelector("#score-list");
var scoreCountSpan = document.querySelector("#score-count");

renderscores();


function renderscores() {
  scores = JSON.parse(localStorage.getItem("scores")) || [];
  // Clear scoreList element and update scoreCountSpan
  scoreList.innerHTML = "";
//   scoreCountSpan.textContent = scores.length+ score;

  // Render a new li for each score
  for (var i = 0; i < scores.length; i++) {
    var score = scores[i];

    var li = document.createElement("li");
    li.textContent = score;
    scoreList.appendChild(li);
  }
}




