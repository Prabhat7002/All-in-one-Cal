// -------------------- Cone ---------------------
const givenDataCone = document.getElementById("given_data_cone");

const radiusCone = document.querySelectorAll(".radius-cone");
const heightCone = document.querySelectorAll(".height-cone");
const slantCone = document.querySelectorAll(".slant-cone");
const lateralCone = document.querySelectorAll(".lateral-cone");
const totalareaCone = document.querySelectorAll(".totalarea-cone");
const volumeCone = document.querySelectorAll(".volume-cone");

const unitCone = document.getElementById("unitsCone");
const submitCone = document.getElementById("submitCone");
const resetCone = document.getElementById("resetCone");
const answerCone = document.getElementById("answerCone");

submitCone.onclick = () => {
    if (givenDataCone.value == 'rh') {
        let radius = +radiusCone[0].value;
        let height = +heightCone[0].value;
        calcForCone(radius, height);
    }
    else if (givenDataCone.value == 'rs') {
        let radius = +radiusCone[1].value;
        let slant = +slantCone[0].value;
        let height = Math.sqrt(slant ** 2 - radius ** 2)
        calcForCone(radius, height);
    }
    else if (givenDataCone.value == 'rV') {
        let radius = +radiusCone[2].value;
        let volume = +volumeCone[0].value;
        let height = (3 * volume) / (Math.PI * radius ** 2)
        calcForCone(radius, height);
    }
    else if (givenDataCone.value == 'rL') {
        let radius = +radiusCone[3].value;
        let lateral = +lateralCone[0].value;
        let slant = lateral / (Math.PI * radius)
        let height = Math.sqrt(slant ** 2 - radius ** 2)
        calcForCone(radius, height);
    }
    else if (givenDataCone.value == 'rA') {
        let radius = +radiusCone[4].value;
        let totalarea = +totalareaCone[0].value;
        let slant = (totalarea - (Math.PI * radius ** 2)) / (Math.PI * radius)
        let height = Math.sqrt(slant ** 2 - radius ** 2)
        calcForCone(radius, height);
    }
    else if (givenDataCone.value == 'hs') {
        let height = +heightCone[1].value;
        let slant = +slantCone[1].value;
        let radius = Math.sqrt(slant ** 2 - height ** 2)
        calcForCone(radius, height);
    }
    else if (givenDataCone.value == 'hV') {
        let height = +heightCone[2].value;
        let volume = +volumeCone[1].value;
        let radius = Math.sqrt((3 * volume) / (Math.PI * height))
        calcForCone(radius, height);
    }
    else {  //value = sL
        let slant = +slantCone[2].value;
        let lateral = +lateralCone[1].value;
        let radius = lateral / (Math.PI * slant)
        let height = Math.sqrt(slant ** 2 - radius ** 2);
        calcForCone(radius, height);
    }
}

const setInputCone = () => {
    if (givenDataCone.value == 'rh') {
        document.getElementById('cone-input-rh').style = 'display:block;';
        document.getElementById('cone-input-rs').style = 'display:none;';
        document.getElementById('cone-input-rV').style = 'display:none;';
        document.getElementById('cone-input-rL').style = 'display:none;';
        document.getElementById('cone-input-rA').style = 'display:none;';
        document.getElementById('cone-input-hs').style = 'display:none;';
        document.getElementById('cone-input-hV').style = 'display:none;';
        document.getElementById('cone-input-sL').style = 'display:none;';
    }
    else if (givenDataCone.value == 'rs') {
        document.getElementById('cone-input-rh').style = 'display:none;';
        document.getElementById('cone-input-rs').style = 'display:block;';
        document.getElementById('cone-input-rV').style = 'display:none;';
        document.getElementById('cone-input-rL').style = 'display:none;';
        document.getElementById('cone-input-rA').style = 'display:none;';
        document.getElementById('cone-input-hs').style = 'display:none;';
        document.getElementById('cone-input-hV').style = 'display:none;';
        document.getElementById('cone-input-sL').style = 'display:none;';
    }
    else if (givenDataCone.value == 'rV') {
        document.getElementById('cone-input-rh').style = 'display:none;';
        document.getElementById('cone-input-rs').style = 'display:none;';
        document.getElementById('cone-input-rV').style = 'display:block;';
        document.getElementById('cone-input-rL').style = 'display:none;';
        document.getElementById('cone-input-rA').style = 'display:none;';
        document.getElementById('cone-input-hs').style = 'display:none;';
        document.getElementById('cone-input-hV').style = 'display:none;';
        document.getElementById('cone-input-sL').style = 'display:none;';
    }
    else if (givenDataCone.value == 'rL') {
        document.getElementById('cone-input-rh').style = 'display:none;';
        document.getElementById('cone-input-rs').style = 'display:none;';
        document.getElementById('cone-input-rV').style = 'display:none;';
        document.getElementById('cone-input-rL').style = 'display:block;';
        document.getElementById('cone-input-rA').style = 'display:none;';
        document.getElementById('cone-input-hs').style = 'display:none;';
        document.getElementById('cone-input-hV').style = 'display:none;';
        document.getElementById('cone-input-sL').style = 'display:none;';
    }
    else if (givenDataCone.value == 'rA') {
        document.getElementById('cone-input-rh').style = 'display:none;';
        document.getElementById('cone-input-rs').style = 'display:none;';
        document.getElementById('cone-input-rV').style = 'display:none;';
        document.getElementById('cone-input-rL').style = 'display:none;';
        document.getElementById('cone-input-rA').style = 'display:block;';
        document.getElementById('cone-input-hs').style = 'display:none;';
        document.getElementById('cone-input-hV').style = 'display:none;';
        document.getElementById('cone-input-sL').style = 'display:none;';
    }
    else if (givenDataCone.value == 'hs') {
        document.getElementById('cone-input-rh').style = 'display:none;';
        document.getElementById('cone-input-rs').style = 'display:none;';
        document.getElementById('cone-input-rV').style = 'display:none;';
        document.getElementById('cone-input-rL').style = 'display:none;';
        document.getElementById('cone-input-rA').style = 'display:none;';
        document.getElementById('cone-input-hs').style = 'display:block;';
        document.getElementById('cone-input-hV').style = 'display:none;';
        document.getElementById('cone-input-sL').style = 'display:none;';
    }
    else if (givenDataCone.value == 'hV') {
        document.getElementById('cone-input-rh').style = 'display:none;';
        document.getElementById('cone-input-rs').style = 'display:none;';
        document.getElementById('cone-input-rV').style = 'display:none;';
        document.getElementById('cone-input-rL').style = 'display:none;';
        document.getElementById('cone-input-rA').style = 'display:none;';
        document.getElementById('cone-input-hs').style = 'display:none;';
        document.getElementById('cone-input-hV').style = 'display:block;';
        document.getElementById('cone-input-sL').style = 'display:none;';
    }
    else {   //value= sL
        document.getElementById('cone-input-rh').style = 'display:none;';
        document.getElementById('cone-input-rs').style = 'display:none;';
        document.getElementById('cone-input-rV').style = 'display:none;';
        document.getElementById('cone-input-rL').style = 'display:none;';
        document.getElementById('cone-input-rA').style = 'display:none;';
        document.getElementById('cone-input-hs').style = 'display:none;';
        document.getElementById('cone-input-hV').style = 'display:none;';
        document.getElementById('cone-input-sL').style = 'display:block;';
    }
}

function calcForCone(radius, height) {
    var volume = (1 / 3) * Math.PI * radius ** 2 * height;
    var slant = Math.sqrt((radius ** 2 + height ** 2));
    var lateral = Math.PI * radius * slant;
    var totalSA = Math.PI * radius * (slant + radius)
    showAnswerCone(radius, height, slant, volume, lateral, totalSA);
}


function showAnswerCone(radius, height, slant, volume, lateral, totalSA) {
    console.log(radius, height, slant, lateral.totalSA, volume)
    answerCone.innerHTML =
        `
    <br>
    radius r =${radius.toFixed(2)} ${unitCone.value} <br>
    height h =${height.toFixed(2)} ${unitCone.value} <br>
    slant height s =${slant.toFixed(2)} ${unitCone.value} <br>
    Volume V =${volume.toFixed(2)} ${unitCone.value}<sup>2</sup> <br>
    Curved Surface area L =${lateral.toFixed(2)} ${unitCone.value} <br>
    Total Surface area A =${totalSA.toFixed(2)} ${unitCone.value} <br>
    `
}

resetCone.addEventListener('click', () => {
    clearInputs();
})

function clearInputs() {
    answerCone.innerHTML = ''
    radiusCone.forEach(ele => ele.value = '');
    heightCone.forEach(ele => ele.value = '');
    slantCone.forEach(ele => ele.value = '');
    lateralCone.forEach(ele => ele.value = '');
    totalareaCone.forEach(ele => ele.value = '');
    volumeCone.forEach(ele => ele.value = '');
}