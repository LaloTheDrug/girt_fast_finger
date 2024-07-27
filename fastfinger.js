let i = 0;
let words = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let index = Math.floor(Math.random() * words.length);
let word = document.getElementById("word");
let times = document.getElementById("time");
let points = document.getElementById("point");
let btn = document.getElementsByTagName("button");
let point = 0;
let time = 120;
let interval;

document.getElementById("startBtn").addEventListener("click", function() {
    startGame();
});

function startGame() {
    index = Math.floor(Math.random() * words.length);
    word.innerText = words[index];
    points.innerText = point;
    times.innerText = time;

    interval = setInterval(function() {
        if (times.innerText > 0) {
            times.innerText = times.innerText - 1;
        } else {
            alert("Game Over");
            clearInterval(interval);
            location.reload();
        }
    }, 1000);
}

document.addEventListener("keypress", function(event) {
    let keyPressed = event.key.toLowerCase();
    let button = document.getElementById(keyPressed);
    if (button) {
        button.style.backgroundColor = "#008CBA";
        button.style.color = "white";
        setTimeout(function() {
            button.style.backgroundColor = "white";
            button.style.color = "black";
        }, 300);
        button.click();
    }
});

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
        if (btn[i].innerHTML === words[index]) {
            point++;
            points.innerText = point;
        } else {
            point--;
            points.innerText = point;
        }
        index = Math.floor(Math.random() * words.length);
        word.innerText = words[index];
    });
}