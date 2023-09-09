// ------------------------- Circle ------------------------

const submitCircle = document.getElementById("submitCircle");
const answerCircle = document.getElementById("answerCircle");
const circleInput = document.querySelectorAll(".circleInput");
const givenDataCircle = document.getElementById("given_data_circle");
const unitsCircle = document.getElementById("circleUnits");
const resetCircle = document.getElementById("resetCircle");

const setInCircle = () => {
    if (givenDataCircle.value == 'r') {
        document.getElementById('in-for-r-circle').style = 'display:block;';
        document.getElementById('in-for-A-circle').style = 'display:none;';
        document.getElementById('in-for-C-circle').style = 'display:none;';
        document.getElementById('in-for-d-circle').style = 'display:none;';
    }
    else if (givenDataCircle.value == 'A') {
        document.getElementById('in-for-A-circle').style = 'display:block;';
        document.getElementById('in-for-r-circle').style = 'display:none;';
        document.getElementById('in-for-C-circle').style = 'display:none;';
        document.getElementById('in-for-d-circle').style = 'display:none;';
    }
    else if (givenDataCircle.value == 'C') {
        document.getElementById('in-for-C-circle').style = 'display:block;';
        document.getElementById('in-for-r-circle').style = 'display:none;';
        document.getElementById('in-for-A-circle').style = 'display:none;';
        document.getElementById('in-for-d-circle').style = 'display:none;';
    }
    else {
        document.getElementById('in-for-d-circle').style = 'display:block;';
        document.getElementById('in-for-r-circle').style = 'display:none;';
        document.getElementById('in-for-A-circle').style = 'display:none;';
        document.getElementById('in-for-C-circle').style = 'display:none;';
    }
}

submitCircle.onclick = () => {
    if (givenDataCircle.value == 'r') {
        let input = +(circleInput[0].value);
        calcCircle(input);
    }
    else if (givenDataCircle.value == 'A') {
        let input = +(circleInput[1].value);
        var radius = Math.sqrt(input / (Math.PI));
        calcCircle(radius);
    }
    else if (givenDataCircle.value == 'C') {
        let input = +(circleInput[2].value);
        var radius = input / (2 * Math.PI);
        calcCircle(radius);
    }
    else { // value == diameter
        let input = +(circleInput[3].value);
        var radius = input / 2;
        calcCircle(radius);
    }
}

function calcCircle(radius) {
    var circumference = 2 * (Math.PI) * radius;
    var area = Math.PI * radius * radius;
    var diameter = 2 * radius;
    showAnswerCircle(radius, circumference, area, diameter);
}



function showAnswerCircle(radius, circumference, area, diameter) {
    answerCircle.innerHTML =
        `
    radius r =${radius.toFixed(2)} ${unitsCircle.value} <br>
    diameter d =${diameter.toFixed(2)} ${unitsCircle.value} <br>
    Circumference C =${circumference.toFixed(2)} ${unitsCircle.value} <br>
    Area A =${area.toFixed(2)} ${unitsCircle.value}<sup>2</sup> <br>
    `
}

resetCircle.addEventListener('click', () => {
    clearInputs();
})

function clearInputs(){
    answerCircle.value = ''
    circleInput.value = ''
}