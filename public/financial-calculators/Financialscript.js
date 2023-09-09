


// Compound Interest Calculator
function calcCompound() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value) / 100;
    const periods = parseFloat(document.getElementById("periods").value);
    const compounding = document.getElementById("compounding").value;

    let compoundFrequency = 1;
    if (compounding === "semiannually") compoundFrequency = 2;
    else if (compounding === "quarterly") compoundFrequency = 4;
    else if (compounding === "monthly") compoundFrequency = 12;

    const compoundAmount = principal * Math.pow(1 + rate / compoundFrequency, compoundFrequency * periods);

    const resultDiv = document.getElementById("compound-interest-result");

    resultDiv.innerHTML = `Compound Amount: ₹${compoundAmount.toFixed(2)}`;
};


//Loan Calculator
function calculateLoan() {
    console.log("clicked");
    const resultDiv = document.getElementById("loan-calculator-result");
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const loanTerm = parseInt(document.getElementById("loanTerm").value);

    const monthlyInterestRate = (interestRate / 100) / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;

    resultDiv.innerHTML = `Monthly Payment: ₹${monthlyPayment.toFixed(2)}<br>Total Payment: ₹${totalPayment.toFixed(2)}<br>Total Interest: ₹${totalInterest.toFixed(2)}`;
};





// // //Simple Interest Calculator
function calcSimple() {
    const principal = parseFloat(document.getElementById("principal-simple-interest").value);
    const rate = parseFloat(document.getElementById("rate-simple-interest").value);
    const time = parseFloat(document.getElementById("time").value);

    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;

    const resultDiv = document.getElementById("calculate-simple-result");
    resultDiv.innerHTML = `Simple Interest: ₹${interest.toFixed(2)}<br>Total Amount: ₹${totalAmount.toFixed(2)}`;
};



// // //Currency Calculator
const exchangeRates = {
    usd: 0.014, // 1 USD to INR
    eur: 0.012, // 1 EUR to INR
    gbp: 0.011 // 1 GBP to INR
};

function calcCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("from").value;
    const toCurrency = document.getElementById("to").value;

    const convertedAmount = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];

    const resultDiv = document.getElementById("currency-calculator-result");
    resultDiv.innerHTML = `Converted Amount: $${convertedAmount.toFixed(2)}`;
};


//Salary Calculator
function calcSalary() {
    const basicSalary = parseFloat(document.getElementById("basicSalary").value);
    const allowances = parseFloat(document.getElementById("allowances").value) || 0;
    const deductions = parseFloat(document.getElementById("deductions").value) || 0;

    const grossSalary = basicSalary + allowances - deductions;

    const resultDiv = document.getElementById("salary-calculator-result");
    resultDiv.innerHTML = `Gross Salary: ₹${grossSalary.toFixed(2)}`;
};




// Retirement Calculator
function calcRetirement() {
    const currentAge = parseInt(document.getElementById("currentAge").value);
    const retirementAge = parseInt(document.getElementById("retirementAge").value);
    const annualExpenses = parseFloat(document.getElementById("annualExpenses").value);
    const interestRate = parseFloat(document.getElementById("interestRate-retirement").value) / 100;

    const yearsUntilRetirement = retirementAge - currentAge;
    const totalYearsInRetirement = 30; // Assuming retirement lasts 30 years
    const totalYears = yearsUntilRetirement + totalYearsInRetirement;

    const requiredSavings = (annualExpenses * totalYearsInRetirement) / (1 - Math.pow(1 + interestRate, -totalYears));

    const resultDiv = document.getElementById("retirement-calculator-result");
    resultDiv.innerHTML = `You need to save ₹${requiredSavings.toFixed(2)} for a comfortable retirement.`;
};




//Sales Tax Calculator
function calcSales() {
    const amount = parseFloat(document.getElementById("amount-sales-tax").value);
    const taxRate = parseFloat(document.getElementById("taxRate-sales-tax").value);

    const salesTax = (amount * taxRate) / 100;
    const totalAmount = amount + salesTax;

    const resultDiv = document.getElementById("sales-tax-result");
    resultDiv.innerHTML = `Sales Tax: ₹${salesTax.toFixed(2)}<br>Total Amount: ₹${totalAmount.toFixed(2)}`;
};





// //Investment Calculator

function calcInvestment() {
    const principal = parseFloat(document.getElementById("principal-investment-calculator").value);
    const rate = parseFloat(document.getElementById("rate-investment-calculator").value);
    const years = parseFloat(document.getElementById("years-investment-calculator").value);

    const futureValue = principal * Math.pow(1 + rate / 100, years);

    const resultDiv = document.getElementById("investment-calculator-result");
    resultDiv.innerHTML = `Future Value: ₹${futureValue.toFixed(2)}`;
};