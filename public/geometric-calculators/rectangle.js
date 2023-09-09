// -------------------- Rectangle ---------------------
const givenDataRect = document.getElementById("given_data_rect");

const sideARect = document.querySelectorAll(".side-a-rect");
const sideBRect = document.querySelectorAll(".side-b-rect");
const areaRect = document.querySelectorAll(".area-rect");
const perimeterRect = document.querySelectorAll(".perimeter-rect");
const diagonalRect = document.querySelectorAll(".diagonal-rect");

const unitRect = document.getElementById("unitsRect");
const submitRect = document.getElementById("submitRect");
const resetRect = document.getElementById("resetRect");
const answerRect = document.getElementById("answerRect");

submitRect.onclick = () => {
    if (givenDataRect.value == 'ab') {
        let sideA = +sideARect[0].value;
        let sideB = +sideBRect[0].value;
        calcForRect(sideA, sideB);
    }
    else if (givenDataRect.value == 'Aa') {
        let area = +areaRect[0].value;
        let sideA = +sideARect[1].value;
        let sideB = area / sideA;
        calcForRect(sideA, sideB);
    }
    else if (givenDataRect.value == 'Ab') {
        let area = +areaRect[1].value;
        let sideB = +sideBRect[1].value;
        let sideA = area / sideB;
        calcForRect(sideA, sideB);
    }
    else if (givenDataRect.value == 'Pa') {
        let perimeter = +perimeterRect[0].value;
        let sideA = +sideARect[2].value;
        let sideB = (perimeter - 2 * sideA) / 2
        calcForRect(sideA, sideB);
    }
    else if (givenDataRect.value == 'Pb') {
        let perimeter = +perimeterRect[1].value;
        let sideB = +sideBRect[2].value;
        let sideA = (perimeter - 2 * sideB) / 2
        calcForRect(sideA, sideB);
    }
    else if (givenDataRect.value == 'pa') {
        let diagonal = +diagonalRect[0].value;
        let sideA = +sideARect[3].value;
        let sideB = Math.sqrt(Math.pow(diagonal, 2) - Math.pow(sideA, 2))
        calcForRect(sideA, sideB);
    }
    else {  //value = pb
        let diagonal = +diagonalRect[1].value;
        let sideB = +sideBRect[3].value;
        let sideA = Math.sqrt(Math.pow(diagonal, 2) - Math.pow(sideB, 2))
        calcForRect(sideA, sideB);
    }
}

const setInputRect = () => {
    if (givenDataRect.value == 'ab') {
        document.getElementById('input-for-ab').style = 'display:block;';
        document.getElementById('input-for-Aa').style = 'display:none;';
        document.getElementById('input-for-Ab').style = 'display:none;';
        document.getElementById('input-for-Pa').style = 'display:none;';
        document.getElementById('input-for-Pb').style = 'display:none;';
        document.getElementById('input-for-pa').style = 'display:none;';
        document.getElementById('input-for-pb').style = 'display:none;';

    }
    else if (givenDataRect.value == 'Aa') {
        document.getElementById('input-for-ab').style = 'display:none;';
        document.getElementById('input-for-Aa').style = 'display:block;';
        document.getElementById('input-for-Ab').style = 'display:none;';
        document.getElementById('input-for-Pa').style = 'display:none;';
        document.getElementById('input-for-Pb').style = 'display:none;';
        document.getElementById('input-for-pa').style = 'display:none;';
        document.getElementById('input-for-pb').style = 'display:none;';
    }
    else if (givenDataRect.value == 'Ab') {
        document.getElementById('input-for-ab').style = 'display:none;';
        document.getElementById('input-for-Aa').style = 'display:none;';
        document.getElementById('input-for-Ab').style = 'display:block;';
        document.getElementById('input-for-Pa').style = 'display:none;';
        document.getElementById('input-for-Pb').style = 'display:none;';
        document.getElementById('input-for-pa').style = 'display:none;';
        document.getElementById('input-for-pb').style = 'display:none;';
    }
    else if (givenDataRect.value == 'Pa') {
        document.getElementById('input-for-ab').style = 'display:none;';
        document.getElementById('input-for-Aa').style = 'display:none;';
        document.getElementById('input-for-Ab').style = 'display:none;';
        document.getElementById('input-for-Pa').style = 'display:block;';
        document.getElementById('input-for-Pb').style = 'display:none;';
        document.getElementById('input-for-pa').style = 'display:none;';
        document.getElementById('input-for-pb').style = 'display:none;';
    }
    else if (givenDataRect.value == 'Pb') {
        document.getElementById('input-for-ab').style = 'display:none;';
        document.getElementById('input-for-Aa').style = 'display:none;';
        document.getElementById('input-for-Ab').style = 'display:none;';
        document.getElementById('input-for-Pa').style = 'display:none;';
        document.getElementById('input-for-Pb').style = 'display:block;';
        document.getElementById('input-for-pa').style = 'display:none;';
        document.getElementById('input-for-pb').style = 'display:none;';
    }
    else if (givenDataRect.value == 'pa') {
        document.getElementById('input-for-ab').style = 'display:none;';
        document.getElementById('input-for-Aa').style = 'display:none;';
        document.getElementById('input-for-Ab').style = 'display:none;';
        document.getElementById('input-for-Pa').style = 'display:none;';
        document.getElementById('input-for-Pb').style = 'display:none;';
        document.getElementById('input-for-pa').style = 'display:block;';
        document.getElementById('input-for-pb').style = 'display:none;';
    }
    else {   //value= pb
        document.getElementById('input-for-ab').style = 'display:none;';
        document.getElementById('input-for-Aa').style = 'display:none;';
        document.getElementById('input-for-Ab').style = 'display:none;';
        document.getElementById('input-for-Pa').style = 'display:none;';
        document.getElementById('input-for-Pb').style = 'display:none;';
        document.getElementById('input-for-pa').style = 'display:none;';
        document.getElementById('input-for-pb').style = 'display:block;';
    }
}

function calcForRect(sideA, sideB) {
    var diagonal = Math.sqrt(sideA * sideA + sideB * sideB);
    var perimeter = 2 * (sideA + sideB)
    var area = (sideA * sideB);
    showAnswerRect(sideA, sideB, diagonal, perimeter, area);
}


function showAnswerRect(sideA, sideB, diagonal, perimeter, area) {
    answerRect.innerHTML =
        `
    <br>
    Side a =${sideA.toFixed(2)} ${unitRect.value} <br>
    Side b =${sideB.toFixed(2)} ${unitRect.value} <br>
    Diagonal p = q =${diagonal.toFixed(2)} ${unitRect.value} <br>
    Perimeter =${perimeter.toFixed(2)} ${unitRect.value} <br>
    Area =${area.toFixed(2)} ${unitRect.value}<sup>2</sup> <br>
    `
}


resetRect.addEventListener('click', () => {
    clearInputs();
})

function clearInputs() {
    answerRect.innerHTML = ''
    sideARect.forEach(ele => ele.value = '');
    sideBRect.forEach(ele => ele.value = '');
    areaRect.forEach(ele => ele.value = '');
    perimeterRect.forEach(ele => ele.value = '');
    diagonalRect.forEach(ele => ele.value = '');
}