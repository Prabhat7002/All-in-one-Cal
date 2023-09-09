// ------------------------- square ------------------------

const submitSquare = document.getElementById("submitSquare");
const answerSquare = document.getElementById("answerSquare");
const squareInput = document.querySelectorAll(".squareInput");
const givenDataSquare = document.getElementById("given_data_square");
const unitsSquare = document.getElementById("squareUnits");
const resetSquare = document.getElementById("resetSquare");

const setInSquare = () => {
    if (givenDataSquare.value == 'a') {
        document.getElementById('in-for-a-square').style = 'display:block;';
        document.getElementById('in-for-q-square').style = 'display:none;';
        document.getElementById('in-for-P-square').style = 'display:none;';
        document.getElementById('in-for-A-square').style = 'display:none;';
    }
    else if (givenDataSquare.value == 'q') {
        document.getElementById('in-for-q-square').style = 'display:block;';
        document.getElementById('in-for-a-square').style = 'display:none;';
        document.getElementById('in-for-P-square').style = 'display:none;';
        document.getElementById('in-for-A-square').style = 'display:none;';
    }
    else if (givenDataSquare.value == 'P') {
        document.getElementById('in-for-P-square').style = 'display:block;';
        document.getElementById('in-for-a-square').style = 'display:none;';
        document.getElementById('in-for-q-square').style = 'display:none;';
        document.getElementById('in-for-A-square').style = 'display:none;';
    }
    else {   //value==A
        document.getElementById('in-for-A-square').style = 'display:block;';
        document.getElementById('in-for-a-square').style = 'display:none;';
        document.getElementById('in-for-P-square').style = 'display:none;';
        document.getElementById('in-for-q-square').style = 'display:none;';
    }
}

submitSquare.onclick = () => {
    if (givenDataSquare.value == 'a') {
        let input = +(squareInput[0].value);
        calcSquare(input);
    }
    else if (givenDataSquare.value == 'q') {
        let input = +(squareInput[1].value);
        var side = input / Math.SQRT2
        calcSquare(side);
    }
    else if (givenDataSquare.value == 'P') {
        let input = +(squareInput[2].value);
        var side = input / 4;
        calcSquare(side);
    }
    else { // value == area
        let input = +(squareInput[3].value);
        var side = Math.sqrt(input);
        calcSquare(side);
    }
}

function calcSquare(side) {
    var perimeter = 4 * side;
    var area = side * side;
    var diagonal = side * Math.SQRT2
    showAnswerSquare(side, perimeter, area, diagonal);
}



function showAnswerSquare(side, perimeter, area, diagonal) {
    answerSquare.innerHTML =
        `
    side a =${side.toFixed(2)} ${unitsSquare.value} <br>
    diagonal q =${diagonal.toFixed(2)} ${unitsSquare.value} <br>
    Perimeter P =${perimeter.toFixed(2)} ${unitsSquare.value} <br>
    Area A =${area.toFixed(2)} ${unitsSquare.value}<sup>2</sup> <br>
    `
}

resetSquare.addEventListener('click', () => {
    clearInputs();
})

function clearInputs(){
    answerSquare.value = ''
    squareInput.value = ''
}