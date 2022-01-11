let btn = document.querySelector(".btn");
let num = document.querySelector(".num");
let err = document.querySelector(".err");

btn.addEventListener("click", function () {
    if (num.value == "") {
        alert("please inter a number");
    } else {
        for (i = 1; i <= 10; i++) {
            document.write(num.value + " x " + i + " = " + num.value * i + '<br>');
        }
    }
})















































// for number gussing game

let heading = document.querySelector(".heading")
let player1num = document.querySelector(".player1num")
let player1btn = document.querySelector(".player1btn")
let player1err = document.querySelector(".player1err")
let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let player2num = document.querySelector(".player2num")
let player2btn = document.querySelector(".player2btn")
let player2err = document.querySelector(".player2err")
let live = document.querySelector(".live")
let score = 10

player1btn.addEventListener("click", function () {
    if (player1num.value == '') {
        player1err.innerHTML = "Enter a Number"
    } else if (player1num.value > 10) {
        player1err.innerHTML = "only 1-10 number"
    } else {
        box1.style.display = "none"
        box2.style.display = "block"
        heading.style.display = "block"
    }
})

player2btn.addEventListener("click", function () {
    if (player2num.value == "") {
        player2err.innerHTML = "choose a Number"
    } else if (player2num.value > 10) {
        player2err.innerHTML = "choose a under 1-10"
    } else {
        if (player1num.value == player2num.value) {
            heading.innerHTML = "Perfect"
            box2.style.display = "none"
            live.style.display = "none"
            player2err.innerHTML = ""
        }else{
            player2err.innerHTML = "try again"
            score--
            live.innerHTML = score +"lives"
            if(score == 0){
                heading.innerHTML = "Game Over"
                box2.style.display = "none"
            }
        }

    }

})