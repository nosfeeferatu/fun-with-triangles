const angles = document.querySelectorAll("input");
const isTriangleBtn = document.querySelector("button");
const outputElement = document.querySelector("#output");

function triangleOrNot(){
    for(let i=0;i<angles.length;i++){
        if(angles[i].value === ""){
            outputElement.innerText = "Oy! Enter all the angles!";
            return ;
        }
        else if(Number(angles[i].value) < 0){
            outputElement.innerText = "How do you have negative angles on a triangle?";
            return ;
        }
    }
    const sumOfAngles = Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value);
    if(sumOfAngles === 180){
        outputElement.innerText = "I've run the simulations. That right there, that is a triangle!";
    }
    else{
        outputElement.innerText = "That ain't lookin' like a triangle to me.";
    }
}

isTriangleBtn.addEventListener("click", triangleOrNot);
