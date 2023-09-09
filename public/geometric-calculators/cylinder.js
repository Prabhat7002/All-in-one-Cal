// -------------------- Cylinder ---------------------
const givenDataCyl = document.getElementById("given_data_cyl");

const radiusCyl = document.querySelectorAll(".radius-cyl");
const heightCyl = document.querySelectorAll(".height-cyl");
const lateralCyl = document.querySelectorAll(".lateral-cyl");
const volumeCyl = document.querySelectorAll(".volume-cyl");

const unitCyl = document.getElementById("unitsCyl");
const submitCyl = document.getElementById("submitCyl");
const resetCyl = document.getElementById("resetCyl");
const answerCyl = document.getElementById("answerCyl");

submitCyl.onclick = () => {
    if (givenDataCyl.value == 'rh') {
        let radius = +radiusCyl[0].value;
        let height = +heightCyl[0].value;
        calcForCyl(radius, height);
    }
    else if (givenDataCyl.value == 'rV') {
        let radius = +radiusCyl[1].value;
        let volume = +volumeCyl[0].value;
        let height = volume / (Math.PI * radius ** 2)
        calcForCyl(radius, height);
    }
    else if (givenDataCyl.value == 'rL') {
        let radius = +radiusCyl[2].value;
        let lateral = +lateralCyl[0].value;
        let height = lateral / (2 * Math.PI * radius)
        calcForCyl(radius, height);
    }
    else if (givenDataCyl.value == 'hV') {
        let height = +heightCyl[1].value;
        let volume = +volumeCyl[1].value;
        let radius = Math.sqrt(volume / (Math.PI * height))
        calcForCyl(radius, height);
    }
    else {  //value = hL
        let height = +heightCyl[2].value;
        let lateral = +lateralCyl[1].value;
        let radius = lateral / (2 * Math.PI * height)
        calcForCyl(radius, height);
    }
}

const setInputCyl = () => {
    if (givenDataCyl.value == 'rh') {
        document.getElementById('input-for-rh').style = 'display:block;';
        document.getElementById('input-for-rV').style = 'display:none;';
        document.getElementById('input-for-rL').style = 'display:none;';
        document.getElementById('input-for-hV').style = 'display:none;';
        document.getElementById('input-for-hL').style = 'display:none;';

    }
    else if (givenDataCyl.value == 'rV') {
        document.getElementById('input-for-rh').style = 'display:none;';
        document.getElementById('input-for-rV').style = 'display:block;';
        document.getElementById('input-for-rL').style = 'display:none;';
        document.getElementById('input-for-hV').style = 'display:none;';
        document.getElementById('input-for-hL').style = 'display:none;';
    }
    else if (givenDataCyl.value == 'rL') {
        document.getElementById('input-for-rh').style = 'display:none;';
        document.getElementById('input-for-rV').style = 'display:none;';
        document.getElementById('input-for-rL').style = 'display:block;';
        document.getElementById('input-for-hV').style = 'display:none;';
        document.getElementById('input-for-hL').style = 'display:none;';
    }
    else if (givenDataCyl.value == 'hV') {
        document.getElementById('input-for-rh').style = 'display:none;';
        document.getElementById('input-for-rV').style = 'display:none;';
        document.getElementById('input-for-rL').style = 'display:none;';
        document.getElementById('input-for-hV').style = 'display:block;';
        document.getElementById('input-for-hL').style = 'display:none;';
    }
    else {   //value= hL
        document.getElementById('input-for-rh').style = 'display:none;';
        document.getElementById('input-for-rV').style = 'display:none;';
        document.getElementById('input-for-rL').style = 'display:none;';
        document.getElementById('input-for-hV').style = 'display:none;';
        document.getElementById('input-for-hL').style = 'display:block;';
    }
}

function calcForCyl(radius, height) {
    var lateral = 2 * Math.PI * radius * height;
    var volume = Math.PI * radius ** 2 * height;
    var totalSA = 2 * Math.PI * radius * (height + radius)
    showAnswerCyl(radius, height, volume, lateral, totalSA);
}


function showAnswerCyl(radius, height, volume, lateral, totalSA) {
    answerCyl.innerHTML =
        `
    <br>
    radius r =${radius.toFixed(2)} ${unitCyl.value} <br>
    height h =${height.toFixed(2)} ${unitCyl.value} <br>
    Volume V =${volume.toFixed(2)} ${unitCyl.value}<sup>2</sup> <br>
    Curved Surface area L =${lateral.toFixed(2)} ${unitCyl.value} <br>
    Total Surface area A =${totalSA.toFixed(2)} ${unitCyl.value} <br>
    `
}

resetCyl.addEventListener('click', () => {
    clearInputs();
})

function clearInputs() {
    answerCyl.innerHTML = ''
    radiusCyl.forEach(ele => ele.value = '');
    heightCyl.forEach(ele => ele.value = '');
    lateralCyl.forEach(ele => ele.value = '');
    volumeCyl.forEach(ele => ele.value = '');
}