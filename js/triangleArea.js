const lengths = document.querySelectorAll("input");
const areaBtn = document.querySelector("button");
const outputElement = document.querySelector("#output");

function getArea(){
    for(let i=0;i<lengths.length;i++){
        if(lengths[i].value === ""){
            outputElement.innerText = "Oy! Enter all the lengths!";
            return ;
        }
        else if(Number(lengths[i].value) < 0){
            outputElement.innerText = "How do you have negative lengths?";
            return ;
        }
    }
    const area = (Number(lengths[0].value)*Number(lengths[1].value))/2;
    outputElement.innerText = `Your area, should you choose to accept it, is ${area}.`;
}

areaBtn.addEventListener("click", getArea);