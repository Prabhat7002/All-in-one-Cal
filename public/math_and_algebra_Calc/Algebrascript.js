const btnArr = document.querySelectorAll(".algebraCalcOption");
let calcType = 0;

for (let i = 0; i < btnArr.length; i++) {
    btnArr[i].addEventListener("click", () => {
        console.log(btnArr[i].value)
        if (calcType == 0) {
            document.getElementById('complex-number-calculator').style = 'display:none';
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






//Boolean Algebra Simplifier
function simplify() {
    const expression = document.getElementById("booleanEXP").value;
    const simplifiedExpression = booleanSimplify(expression);
    document.getElementById("result1").innerText = `Simplified Expression: ${simplifiedExpression}`;
}

//Partial Fraction Decomposition Calculator

function booleanSimplify(expression) {
    try {
        const simplifiedExpression = eval(expression);
        return simplifiedExpression.toString();
    } catch (error) {
        return "Invalid expression";
    }
}

function decompose() {
    const expression = document.getElementById("partialFractionExp").value;
    const decomposedExpression = partialFractionDecomposition(expression);
    document.getElementById("result2").innerText = `Decomposed Expression: ${decomposedExpression}`;
}

function partialFractionDecomposition(expression) {
    // Implement your partial fraction decomposition logic here
    // This is a simplified example and won't handle all cases
    return "Partial fractions result";
}



//Inequalitycalculate
function Inequalitycalculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
    }

    document.getElementById("result3").textContent = `Result: ${result}`;
}


//Flow Rate Calculator
function calculateFlowRate() {
    const area = parseFloat(document.getElementById("area").value);
    const velocity = parseFloat(document.getElementById("velocity").value);

    if (!isNaN(area) && !isNaN(velocity)) {
        const flowRate = area * velocity;
        const resultElement = document.getElementById("result4");
        resultElement.textContent = `Flow Rate: ${flowRate.toFixed(2)} m³/s`;
    } else {
        alert("Please enter valid values for Area and Velocity.");
    }
}





//Impulse Calculator
function calculateImpulse() {
    const force = parseFloat(document.getElementById("force").value);
    const time = parseFloat(document.getElementById("time").value);

    if (!isNaN(force) && !isNaN(time)) {
        const impulse = force * time;
        const resultElement = document.getElementById("result5");
        resultElement.textContent = `Impulse: ${impulse.toFixed(2)} N·s`;
    } else {
        alert("Please enter valid values for Force and Time.");
    }
}


//Factorization Calculator
function factorize() {
    const number = parseInt(document.getElementById("FactorizationNum").value);

    if (!isNaN(number) && number > 1) {
        const resultElement = document.getElementById("result6");
        resultElement.textContent = `Prime Factors: ${getPrimeFactors(number).join(" × ")}`;
    } else {
        alert("Please enter a valid number greater than 1.");
    }
}

function getPrimeFactors(number) {
    const factors = [];
    let divisor = 2;

    while (number > 2) {
        if (number % divisor === 0) {
            factors.push(divisor);
            number /= divisor;
        } else {
            divisor++;
        }
    }

    factors.push(number);
    return factors;
}



//Percentage Calculator

function calculatePercentage() {
    const number = parseFloat(document.getElementById("percentNum").value);
    const percentage = parseFloat(document.getElementById("percentage").value);

    if (!isNaN(number) && !isNaN(percentage)) {
        const resultElement = document.getElementById("result7");

        const percentageOfNumber = (percentage / 100) * number;
        const valueWithPercentage = number + percentageOfNumber;

        resultElement.innerHTML = `
        <p>${percentage}% of ${number} is ${percentageOfNumber.toFixed(2)}</p>
        <p>${percentage}% added to ${number} is ${valueWithPercentage.toFixed(2)}</p>
      `;
    } else {
        alert("Please enter valid values for Number and Percentage.");
    }
}



//Exponential Formula Calculator

function calculateExponential() {
    const base = parseFloat(document.getElementById("base").value);
    const exponent = parseFloat(document.getElementById("exponent").value);

    if (!isNaN(base) && !isNaN(exponent)) {
        const result = Math.pow(base, exponent);
        const resultElement = document.getElementById("result8");
        resultElement.textContent = `Result: ${result.toFixed(2)}`;
    } else {
        alert("Please enter valid values for Base and Exponent.");
    }
}


//Cube Calculator
function calculateCube() {
    const sideLength = parseFloat(document.getElementById("sideLength").value);

    if (!isNaN(sideLength)) {
        const volume = sideLength ** 3;
        const surfaceArea = 6 * (sideLength ** 2);

        const volumeResultElement = document.getElementById("volumeResult");
        const surfaceAreaResultElement = document.getElementById("surfaceAreaResult");

        volumeResultElement.textContent = volume.toFixed(2);
        surfaceAreaResultElement.textContent = surfaceArea.toFixed(2);
    } else {
        alert("Please enter a valid value for Side Length.");
    }
}
//Cube Root Calculator
function calculateCubeRoot() {
    const inputNumber = parseFloat(document.getElementById("inputNumberCubeRoot").value);

    if (!isNaN(inputNumber)) {
        const cubeRoot = Math.pow(inputNumber, 1 / 3);
        const resultElement = document.getElementById("result10");
        resultElement.textContent = `Cube Root: ${cubeRoot.toFixed(2)}`;
    } else {
        alert("Please enter a valid number.");
    }
}

//Math Formulas Calculator
function calculateSquareRoot() {
    const number = parseFloat(document.getElementById("number11").value);

    if (!isNaN(number)) {
        const squareRoot = Math.sqrt(number);
        const resultElement = document.getElementById("result11");
        resultElement.textContent = `Square Root: ${squareRoot.toFixed(2)}`;
    } else {
        alert("Please enter a valid number.");
    }
}

function calculateSumOfSquares() {
    const number = parseFloat(document.getElementById("number11").value);

    if (!isNaN(number)) {
        const sumOfSquares = (number * (number + 1) * (2 * number + 1)) / 6;
        const resultElement = document.getElementById("result11");
        resultElement.textContent = `Sum of Squares: ${sumOfSquares.toFixed(2)}`;
    } else {
        alert("Please enter a valid number.");
    }
}
//Math Calculator
function calculateMath() {
    const expression = document.getElementById("mathExp").value;

    if (expression.includes('f(')) {
        calculateFunctionNotation(expression);
    } else if (expression.includes('^2')) {
        calculateFactoringTrinomials(expression);
    } else if (expression.includes('*')) {
        calculateFoil(expression);
    } else {
        alert("Expression not recognized.");
    }
}





//Complex Number Calculator

function add() {
    const real1 = parseFloat(document.getElementById("real1").value);
    const imaginary1 = parseFloat(document.getElementById("imaginary1").value);
    const real2 = parseFloat(document.getElementById("real2").value);
    const imaginary2 = parseFloat(document.getElementById("imaginary2").value);

    if (!isNaN(real1) && !isNaN(imaginary1) && !isNaN(real2) && !isNaN(imaginary2)) {
        const resultReal = real1 + real2;
        const resultImaginary = imaginary1 + imaginary2;
        displayResult(resultReal, resultImaginary);
    } else {
        alert("Please enter valid values for all fields.");
    }
}

function subtract() {
    const real1 = parseFloat(document.getElementById("real1").value);
    const imaginary1 = parseFloat(document.getElementById("imaginary1").value);
    const real2 = parseFloat(document.getElementById("real2").value);
    const imaginary2 = parseFloat(document.getElementById("imaginary2").value);

    if (!isNaN(real1) && !isNaN(imaginary1) && !isNaN(real2) && !isNaN(imaginary2)) {
        const resultReal = real1 - real2;
        const resultImaginary = imaginary1 - imaginary2;
        displayResult(resultReal, resultImaginary);
    } else {
        alert("Please enter valid values for all fields.");
    }
}


function multiply() {
    const real1 = parseFloat(document.getElementById("real1").value);
    const imaginary1 = parseFloat(document.getElementById("imaginary1").value);
    const real2 = parseFloat(document.getElementById("real2").value);
    const imaginary2 = parseFloat(document.getElementById("imaginary2").value);

    if (!isNaN(real1) && !isNaN(imaginary1) && !isNaN(real2) && !isNaN(imaginary2)) {
        const resultReal = real1 * real2 - imaginary1 * imaginary2;
        const resultImaginary = real1 * imaginary2 + imaginary1 * real2;
        displayResult(resultReal, resultImaginary);
    } else {
        alert("Please enter valid values for all fields.");
    }
}



function divide() {
    const real1 = parseFloat(document.getElementById("real1").value);
    const imaginary1 = parseFloat(document.getElementById("imaginary1").value);
    const real2 = parseFloat(document.getElementById("real2").value);
    const imaginary2 = parseFloat(document.getElementById("imaginary2").value);

    if (!isNaN(real1) && !isNaN(imaginary1) && !isNaN(real2) && !isNaN(imaginary2)) {
        const denominator = real2 * real2 + imaginary2 * imaginary2;
        const resultReal = (real1 * real2 + imaginary1 * imaginary2) / denominator;
        const resultImaginary = (imaginary1 * real2 - real1 * imaginary2) / denominator;
        displayResult(resultReal, resultImaginary);
    } else {
        alert("Please enter valid values for all fields.");
    }
}

function displayResult(real, imaginary) {
    const resultElement = document.getElementById("result13");
    resultElement.textContent = `Result: ${real} + ${imaginary}i`;
}