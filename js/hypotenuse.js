const angles = document.querySelectorAll("input");
const hypotenuseBtn = document.querySelector("button");
const outputElement = document.querySelector("#output");

function getHypotenuse(){
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
    const hypotenuse = calculateHypotenuse(Number(angles[0].value),Number(angles[1].value));
    outputElement.innerText = `I present to you, Your Hypotenuse ${hypotenuse}.`;
}

function calculateHypotenuse(angle1,angle2) {
    const sum = angle1*angle1 + angle2*angle2;
    return Math.sqrt(sum);
}

hypotenuseBtn.addEventListener("click", getHypotenuse);
