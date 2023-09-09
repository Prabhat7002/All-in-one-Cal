// ----------------- Rt angle triangle ---------------
const submitRT = document.getElementById("submitRT");
const answerRT = document.getElementById("answerRT");
const a = document.querySelectorAll(".side_a_rt");
const b = document.getElementById("side_b_rt");
const c = document.getElementById("side_c_rt");
const givenDataRT = document.getElementById("given_data_rt");
const unitEle = document.getElementById("unitsRT");
const resetRT = document.getElementById("resetRT");

const setInputRT = () => {
    if (givenDataRT.value == 'b') {
        document.getElementById('input-ab-rt').style = 'display:block;';
        document.getElementById('input-ac-rt').style = 'display:none;';
    }
    else {
        document.getElementById('input-ab-rt').style = 'display:none;';
        document.getElementById('input-ac-rt').style = 'display:block;';
    }
}

submitRT.onclick = () => {
    if (givenDataRT.value == 'b') {
        calcRight(+a[0].value, +b.value);
    }
    else {
        let sideB = Math.sqrt((+c.value)**2 - (+a[1].value)**2);
        calcRight(+a[1].value, sideB);
    }
}

function calcRight(sideA, sideB) {
    let sideC = Math.sqrt(sideA * sideA + sideB * sideB);
    var perimeter = sideA + sideB + sideC;
    var area = (sideA * sideB) / 2;
    showAnswerRT(sideA, sideB, +sideC, perimeter, area);
}


function showAnswerRT(sideA, sideB, sideC, perimeter, area) {
    answerRT.innerHTML =
        `
    Side a =${sideA.toFixed(2)} ${unitEle.value} <br>
    Side b =${sideB.toFixed(2)} ${unitEle.value} <br>
    Side c =${sideC.toFixed(2)} ${unitEle.value} <br>
    Perimeter =${perimeter.toFixed(2)} ${unitEle.value} <br>
    Area =${area.toFixed(2)} ${unitEle.value}<sup>2</sup> <br>
    `
}

resetRT.addEventListener('click', () => {
    clearInputs();
})

function clearInputs(){
    a[0].value = ''
    a[1].value = ''
    b.value = ''
    c.value = ''
    answerRT.innerHTML = ''
}