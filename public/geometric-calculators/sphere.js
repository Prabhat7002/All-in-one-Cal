//----------------------  sphere ----------------------

const givenDataSphere = document.getElementById("given_data_sphere");
const sphereInput = document.querySelectorAll(".sphereInput");
const unitsSphere = document.getElementById("sphereUnits");
const submitSphere = document.getElementById("submitSphere");
const resetSphere = document.getElementById("resetSphere");
const answerSphere = document.getElementById("answerSphere");

const setInSphere = () => {
    if (givenDataSphere.value == 'r') {
        document.getElementById('in-for-r-sphere').style = 'display:block;';
        document.getElementById('in-for-A-sphere').style = 'display:none;';
        document.getElementById('in-for-C-sphere').style = 'display:none;';
        document.getElementById('in-for-V-sphere').style = 'display:none;';
    }
    else if (givenDataSphere.value == 'A') {
        document.getElementById('in-for-A-sphere').style = 'display:block;';
        document.getElementById('in-for-r-sphere').style = 'display:none;';
        document.getElementById('in-for-C-sphere').style = 'display:none;';
        document.getElementById('in-for-V-sphere').style = 'display:none;';
    }
    else if (givenDataSphere.value == 'C') {
        document.getElementById('in-for-C-sphere').style = 'display:block;';
        document.getElementById('in-for-r-sphere').style = 'display:none;';
        document.getElementById('in-for-A-sphere').style = 'display:none;';
        document.getElementById('in-for-V-sphere').style = 'display:none;';
    }
    else {    //value = volume
        document.getElementById('in-for-V-sphere').style = 'display:block;';
        document.getElementById('in-for-r-sphere').style = 'display:none;';
        document.getElementById('in-for-A-sphere').style = 'display:none;';
        document.getElementById('in-for-C-sphere').style = 'display:none;';
    }
}

submitSphere.onclick = () => {
    if (givenDataSphere.value == 'r') {
        let input = +(sphereInput[0].value);
        calcSphere(input);
    }
    else if (givenDataSphere.value == 'A') {
        let input = +(sphereInput[1].value);
        var radius = Math.sqrt(input / (4 * Math.PI));
        calcSphere(radius);
    }
    else if (givenDataSphere.value == 'C') {
        let input = +(sphereInput[2].value);
        var radius = input / (2 * Math.PI);
        calcSphere(radius);
    }
    else { // value == volume
        let input = +(sphereInput[3].value);
        var radius = Math.pow((3 * input) / (4 * Math.PI), (1 / 3));
        calcSphere(radius);
    }
}

function calcSphere(radius) {
    var circumference = 2 * Math.PI * radius;
    var area = 4 * Math.PI * radius * radius;
    var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    showAnswerSphere(radius, circumference, area, volume);
}



function showAnswerSphere(radius, circumference, area, volume) {
    answerSphere.innerHTML =
        `
    radius r =${radius.toFixed(2)} ${unitsSphere.value} <br>
    Volume V =${volume.toFixed(2)} ${unitsSphere.value} <br>
    Circumference C =${circumference.toFixed(2)} ${unitsSphere.value} <br>
    Surface Area A =${area.toFixed(2)} ${unitsSphere.value}<sup>2</sup> <br>
    `
}

resetSphere.addEventListener('click', () => {
    clearInputs();
})

function clearInputs(){
    sphereInput.forEach(ele => ele.value = '');
    answerSphere.innerHTML = ''
}