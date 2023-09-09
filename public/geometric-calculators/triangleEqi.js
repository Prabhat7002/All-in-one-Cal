//---------------------Equilateral Triangle ------------------

const submitEqi = document.getElementById("submit4");
const answerEqi = document.getElementById("answer4");
const equiInput = document.querySelectorAll(".equiInput");
const givenDataEqui = document.getElementById("given_data_equi");
const unitsEqui = document.getElementById("equiUnits");
const resetEqi = document.getElementById("reset4");

const setInEquiTriangle = () => {
    if (givenDataEqui.value == 'a') {
        document.getElementById('input-for-a').style = 'display:block;';
        document.getElementById('input-for-P').style = 'display:none;';
        document.getElementById('input-for-s').style = 'display:none;';
        document.getElementById('input-for-A').style = 'display:none;';
        document.getElementById('input-for-h').style = 'display:none;';
    }
    else if (givenDataEqui.value == 'P') {
        document.getElementById('input-for-P').style = 'display:block;';
        document.getElementById('input-for-a').style = 'display:none;';
        document.getElementById('input-for-s').style = 'display:none;';
        document.getElementById('input-for-A').style = 'display:none;';
        document.getElementById('input-for-h').style = 'display:none;';
    }
    else if (givenDataEqui.value == 's') {
        document.getElementById('input-for-s').style = 'display:block;';
        document.getElementById('input-for-a').style = 'display:none;';
        document.getElementById('input-for-P').style = 'display:none;';
        document.getElementById('input-for-A').style = 'display:none;';
        document.getElementById('input-for-h').style = 'display:none;';
    }
    else if (givenDataEqui.value == 'A') {
        document.getElementById('input-for-A').style = 'display:block;';
        document.getElementById('input-for-a').style = 'display:none;';
        document.getElementById('input-for-P').style = 'display:none;';
        document.getElementById('input-for-s').style = 'display:none;';
        document.getElementById('input-for-h').style = 'display:none;';
    }

    else {
        document.getElementById('input-for-h').style = 'display:block;';
        document.getElementById('input-for-a').style = 'display:none;';
        document.getElementById('input-for-P').style = 'display:none;';
        document.getElementById('input-for-s').style = 'display:none;';
        document.getElementById('input-for-A').style = 'display:none;';
    }
}

submitEqi.onclick = () => {
    if (givenDataEqui.value == 'a') {
        let input = +(equiInput[0].value)
        calcEqui(input);
    }
    else if (givenDataEqui.value == 'P') {
        let input = +(equiInput[1].value)
        var sideLength = input / 3;
        calcEqui(sideLength);
    }
    else if (givenDataEqui.value == 's') {
        let input = +(equiInput[2].value)
        var sideLength = (2 * input) / 3;
        calcEqui(sideLength);
    }
    else if (givenDataEqui.value == 'A') {
        let input = +(equiInput[3].value)
        var sideLength = 2 * Math.sqrt(input / (Math.sqrt(3)));
        calcEqui(sideLength);
    }
    else { // value == area
        let input = +(equiInput[4].value)
        var sideLength = (2 / Math.sqrt(3)) * input;
        calcEqui(sideLength);
    }
}

function calcEqui(side) {
    var perimeter = 3 * side;
    var semiPerimeter = perimeter / 2;
    var area = (Math.sqrt(3) / 4) * Math.pow(side, 2);
    var altitute = (Math.sqrt(3) / 2) * side;
    showAnswerEqui(side, semiPerimeter, perimeter, area, altitute);
}



function showAnswerEqui(side, semiPerimeter, perimeter, area, altitute) {
    answerEqi.innerHTML =
        `
    A = B = C = 60°
    <br>
    a = b = c
    <br><br>
    Side a =${side.toFixed(2)} ${unitsEqui.value} <br>
    Semi-Perimeter s =${semiPerimeter.toFixed(2)} ${unitsEqui.value} <br>
    Perimeter P =${perimeter.toFixed(2)} ${unitsEqui.value} <br>
    Area A =${area.toFixed(2)} ${unitsEqui.value}<sup>2</sup> <br>
    Altitute h =${altitute.toFixed(2)} ${unitsEqui.value} <br>
    `
}

resetEqi.addEventListener('click', () => {
    clearInputs();
})

function clearInputs(){
    equiInput.value = ''
    answerEqi.innerHTML = ''
}