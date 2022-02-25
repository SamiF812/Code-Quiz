let scoresTwo = document.getElementById("scoresTwo");


function init() {
    printScore();
}

function printScore() {
    var savedScores = JSON.parse(localStorage.getItem("highScores")) || [];

    savedScores.forEach(function(score){
        var li = document.createElement("li");
        li.textContent = `${score.initals}: ${score.score}`;
        //li.setAttribute("style", "flex: display; color: green;");

        scoresTwo.appendChild(li);
    })

}

function clearHighScores(){
window.localStorage.removeItem("highScores");
window.location.reload()

}

document.getElementById("reset").onclick = clearHighScores;


init();