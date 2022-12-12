const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("button");
const outputElement = document.querySelector("#output");

const correctAnswers = ["90°", "right angled"]

function checkAnswers(){
    var score = 0, index = 0;
    const formResult = new FormData(quizForm);
    for(let value of formResult.values()){
        if(value === correctAnswers[index]){
            score++;
        }
        index++;
    }
    outputSentence(score);
}

function outputSentence(score){
    if(score === 2){
        outputElement.innerText = "A 100% RESULT! Truly beside a triangle genius I stand right now."
    }
    else if(score === 1){
        outputElement.innerText = "One. Well it's still 50%."
    }
    else if(score === 0){
        outputElement.innerText = "A whopping zero! Into the Bermuda Triangle with you."
    }
    else {
        outputElement.innerText = score + "? That doesn't look right.."
    }
}

submitBtn.addEventListener("click", checkAnswers)