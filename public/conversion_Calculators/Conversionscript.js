const btnArr = document.querySelectorAll(".conversionCalcOption");
let calcType = 0;

for (let i = 0; i < btnArr.length; i++) {
    btnArr[i].addEventListener("click", () => {
        console.log(btnArr[i].value)
        if (calcType == 0) {
            document.getElementById('length-conversion-calculator').style = 'display:none';
            document.getElementById(`${btnArr[i].value}`).style = 'display:block';
            calcType = btnArr[i].value;
            console.log("if")
        }
        // else if(calcType != btnArr[i].value){
        else {
            document.getElementById(`${calcType}`).style = 'display:none';
            document.getElementById(`${btnArr[i].value}`).style = 'display:block';
            calcType = btnArr[i].value;
            console.log("else")
        }

    })
}



//length conversion
document.getElementById('calculate-length').addEventListener('click', convert);

function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    const conversionFactors = {
        inches: 1,
        centimeters: 2.54,
        feet: 0.0833,
        meters: 0.0254
    };

    const convertedValue = inputValue * (conversionFactors[toUnit] / conversionFactors[fromUnit]);

    document.getElementById('result-length').textContent = `${inputValue} ${fromUnit} is equal to ${convertedValue.toFixed(2)} ${toUnit}`;
}



//age calculator
document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate-age");
    const resultDiv = document.getElementById("result-age");

    calculateButton.addEventListener("click", function () {
        const birthdate = new Date(document.getElementById("birthdate").value);
        const today = new Date();

        const ageInMilliseconds = today - birthdate;
        const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);

        const age = Math.floor(ageInYears);
        resultDiv.textContent = `Your age is ${age} years.`;
    });
});

//time calculator
document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("calculate-time");
    const hoursInput = document.getElementById("hours-time");
    const resultOutput = document.getElementById("result-time");

    convertBtn.addEventListener("click", function () {
        const hours = parseFloat(hoursInput.value);
        if (!isNaN(hours)) {
            const minutes = hours * 60;
            const seconds = hours * 3600;
            resultOutput.innerHTML = `${hours} hours is equal to ${minutes} minutes or ${seconds} seconds.`;
        } else {
            resultOutput.innerHTML = "Please enter a valid number of hours.";
        }
    });
});

//date 
function convertDate() {
    const daysInput = document.getElementById('days-date');
    const resultOutput = document.getElementById('result-date');

    const days = parseInt(daysInput.value);
    if (isNaN(days)) {
        resultOutput.textContent = 'Please enter a valid number of days.';
        return;
    }

    const currentDate = new Date();
    const convertedDate = new Date(currentDate.getTime() + days * 24 * 60 * 60 * 1000);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const convertedDateString = convertedDate.toLocaleDateString(undefined, options);

    resultOutput.textContent = `Converted Date: ${convertedDateString}`;
}

//gpa
const coursesInput = document.getElementById('courses-gpa');
const courseInputsContainer = document.getElementById('courseInputs-gpa');
const calculateBtn = document.getElementById('calculate-GPA');
const resultDiv = document.getElementById('result-gpa');

calculateBtn.addEventListener('click', calculateGPA);

function calculateGPA() {
    const numCourses = parseInt(coursesInput.value);
    let totalCredits = 0;
    let totalGradePoints = 0;

    for (let i = 1; i <= numCourses; i++) {
        const creditInput = parseFloat(prompt(`Enter credits for Course ${i}`));
        const gradeInput = parseFloat(prompt(`Enter grade for Course ${i}`));

        if (!isNaN(creditInput) && !isNaN(gradeInput)) {
            totalCredits += creditInput;
            totalGradePoints += creditInput * gradeInput;
        } else {
            alert('Invalid input. Please enter valid numeric values.');
            return;
        }
    }

    const gpa = totalGradePoints / totalCredits;
    resultDiv.innerHTML = `Your GPA is: ${gpa.toFixed(2)}`;
}

//height
function convertHeight() {
    const heightValue = parseFloat(document.getElementById('heightInput').value);
    const fromUnit = document.getElementById('unitFrom-height').value;
    const toUnit = document.getElementById('unitTo-height').value;

    const conversionFactors = {
        inches: 1,
        cm: 2.54,
        ft: 0.0833,
        m: 0.0254
    };

    const convertedValue = heightValue * (conversionFactors[toUnit] / conversionFactors[fromUnit]);

    document.getElementById('result-height').textContent = `${heightValue} ${fromUnit} is equal to ${convertedValue.toFixed(2)} ${toUnit}`;
}


//password
function generatePass() {
    const lengthField = document.getElementById("length-pass");
    const passwordField = document.getElementById("password-pass");
    // console.log("clicked")

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numericChars = "0123456789";
    const specialChars = "!@#$%^&*()";

    const allChars = lowercaseChars + uppercaseChars + numericChars + specialChars;


    let passwordLength = lengthField.value;
    let password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * allChars.length);
        password += allChars.substring(randomNumber, randomNumber + 1);
    }
    // console.log(password)
    passwordField.innerHTML = password;
}



//bill tips
document.getElementById("calculateBtn-tip").addEventListener("click", function () {
    const billAmount = parseFloat(document.getElementById("billAmount-tip").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage-tip").value);

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalBill = billAmount + tipAmount;

    document.getElementById("tipAmount-tip").textContent = tipAmount.toFixed(2);
    document.getElementById("totalBill-tip").textContent = totalBill.toFixed(2);
});