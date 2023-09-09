// ------------------------- cube ------------------------

const submitCube = document.getElementById("submitCube");
const answerCube = document.getElementById("answerCube");
const cubeInput = document.querySelectorAll(".cubeInput");
const givenDataCube = document.getElementById("given_data_cube");
const unitsCube = document.getElementById("cubeUnits");
const resetCube = document.getElementById("resetCube");

const setInCube = () => {
    if (givenDataCube.value == 'a') {
        document.getElementById('in-for-a-cube').style = 'display:block;';
        document.getElementById('in-for-d-cube').style = 'display:none;';
        document.getElementById('in-for-S-cube').style = 'display:none;';
        document.getElementById('in-for-V-cube').style = 'display:none;';
    }
    else if (givenDataCube.value == 'd') {
        document.getElementById('in-for-a-cube').style = 'display:none;';
        document.getElementById('in-for-d-cube').style = 'display:block;';
        document.getElementById('in-for-S-cube').style = 'display:none;';
        document.getElementById('in-for-V-cube').style = 'display:none;';
    }
    else if (givenDataCube.value == 'S') {
        document.getElementById('in-for-a-cube').style = 'display:none;';
        document.getElementById('in-for-d-cube').style = 'display:nobe;';
        document.getElementById('in-for-S-cube').style = 'display:block;';
        document.getElementById('in-for-V-cube').style = 'display:none;';
    }
    else {   //value==V
        document.getElementById('in-for-a-cube').style = 'display:none;';
        document.getElementById('in-for-d-cube').style = 'display:none;';
        document.getElementById('in-for-S-cube').style = 'display:none;';
        document.getElementById('in-for-V-cube').style = 'display:block;';
    }
}

submitCube.onclick = () => {
    if (givenDataCube.value == 'a') {
        let input = +(cubeInput[0].value);
        calcCube(input);
    }
    else if (givenDataCube.value == 'd') {
        let input = +(cubeInput[1].value);
        var side = input/Math.sqrt(3)
        calcCube(side);
    }
    else if (givenDataCube.value == 'S') {
        let input = +(cubeInput[2].value);
        var side = Math.sqrt(input/6);
        calcCube(side);
    }
    else { // value == volume
        let input = +(cubeInput[3].value);
        var side = Math.pow(input,(1/3));
        calcCube(side);
    }
}

function calcCube(side) {
    var volume = Math.pow(side,3);
    var area = 6*side * side;
    var diagonal = side* Math.sqrt(3);
    showAnswerCube(side, volume, area, diagonal);
}



function showAnswerCube(side, volume, area, diagonal) {
    answerCube.innerHTML =
    `
    side a =${side.toFixed(2)} ${unitsCube.value} <br>
    solid diagonal d =${diagonal.toFixed(2)} ${unitsCube.value} <br>
    Surface Area A =${area.toFixed(2)} ${unitsCube.value}<sup>2</sup> <br>
    Volume V =${volume.toFixed(2)} ${unitsCube.value} <br>
    `
}

resetCube.addEventListener('click', () => {
    clearInputs();
});

function clearInputs(){
    answerCube.value = ''
    cubeInput.value = ''
}