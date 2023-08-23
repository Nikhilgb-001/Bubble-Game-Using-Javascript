var timer = 60;
var score = 0;
var hitRn = 0;
// let backgroundMusic = new Audio('music/Bubble.mp3')
let gameStartMusic =new Audio ('music/Game Start.mp3')
let bubbleSound = new Audio('music/click.mp3');
let gameEndMusic = new Audio('music/gameOver.mp3');

function makeBubble() {
    var clutters = '';

    for (var i = 1; i <= 102; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutters += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector('#pbtm').innerHTML = clutters;
    bubbleSound.play();
}

function runTimer() {
    gameStartMusic.play();
    var timeCount = setInterval(() => {
        if(timer > 0) {
            timer--;
            document.querySelector('#timer').textContent = timer;
        } else {
            clearInterval(timeCount);
            document.querySelector('#pbtm').innerHTML = `<h1>Game Over</h1> <h1> Your Score is </h1> <h1>${score}</h1><button id="resetButton" onclick="resetGame()">Play Again</button>`;
            gameEndMusic.play();
        }
    }, 1000);
}

function getNewHit() {
    hitRn = Math.floor(Math.random()*10);
    document.querySelector('#hitVal').textContent = hitRn;
}

function increaseScore() {
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}

function resetGame() {
    timer = 60;
    score = 0;
    hitRn = 0;
    document.querySelector('#timer').textContent = timer;
    document.querySelector('#scoreVal').textContent = score;
    document.querySelector('#pbtm').innerHTML = '';
    makeBubble();
    getNewHit();
    runTimer();
}

document.querySelector('#pbtm').addEventListener('click', (details) =>{
    var clickedNumber = Number(details.target.textContent);

    if(clickedNumber === hitRn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
})


runTimer();
makeBubble();
getNewHit();