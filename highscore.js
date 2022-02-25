// How i am calling scores from the second HTML file in HS HTML
let scoresTwo = document.getElementById("scoresTwo");

//initiating
function init() {
    printScore();
}
// printing score out of local storage
function printScore() {
    var savedScores = JSON.parse(localStorage.getItem("highScores")) || [];

    savedScores.forEach(function(score){
        var li = document.createElement("li");
        li.textContent = `${score.initals}: ${score.score}`;
        //li.setAttribute("style", "flex: display; color: green;");

        scoresTwo.appendChild(li);
    })

}
//clears high scores out of local storage and off of the scores page
function clearHighScores(){
window.localStorage.removeItem("highScores");
window.location.reload()

}

document.getElementById("reset").onclick = clearHighScores;


init();