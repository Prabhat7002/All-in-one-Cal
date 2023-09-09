// document.addEventListener("DOMContentLoaded", function () {...}) construct
//  because it ensures that your JavaScript code runs after the HTML content has 
//  been fully loaded and the Document Object Model (DOM) is ready to be manipulated.
document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("submit");

    calculateButton.addEventListener("click", function (event) {
        event.preventDefault();

        const heightInput = document.getElementById("height");
        const weightInput = document.getElementById("weight");
        const bmiResultInput = document.getElementById("bmi_res");

        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);
    

        if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
            const bmi = calculateBMI(height, weight);
            bmiResultInput.value = bmi.toFixed(2);

            displayBMIStatus(bmi);
            // bmiStatus.innerHTML = status;
        } else {
            bmiResultInput.value = "";
        }
    });

    function calculateBMI(height, weight) {
        const heightInMeters = height / 100; // Convert height to meters
        return weight / (heightInMeters * heightInMeters);
    }

    function displayBMIStatus(bmi) {
        const bmiStatus = document.getElementById("status");
        const bmiStatusImg = document.getElementById("status_img");
        const healthyRange = "18.5 - 25";
        if (bmi < 18.5) {
            bmiStatus.textContent = "UNDERWEIGHT";
            bmiStatus.style.color = "blue";
            bmiStatusImg.setAttribute("src","images/underweight.jpg");
            bmiStatusImg.setAttribute("height","200px");
            bmiStatusImg.setAttribute("width","100px");
        } else if (bmi >= 18.5 && bmi < 25) {
            bmiStatus.textContent = "HEALTHY";
            bmiStatus.style.color = "green";
            bmiStatusImg.setAttribute("src","images/healthy.jpg");
            bmiStatusImg.setAttribute("height","200px");
            bmiStatusImg.setAttribute("width","100px");
        } else if (bmi >= 25 && bmi < 30) {
            bmiStatus.textContent = "OVERWEIGHT";
            bmiStatus.style.color = "yellow";
            bmiStatusImg.setAttribute("src","images/overweight.jpg");
            bmiStatusImg.setAttribute("height","200px");
            bmiStatusImg.setAttribute("width","100px");
        } else if (bmi >= 30 && bmi < 35){
            bmiStatus.textContent = "OBESE";
            bmiStatus.style.color = "orange";
            bmiStatusImg.setAttribute("src","images/obese.jpg");
            bmiStatusImg.setAttribute("height","200px");
            bmiStatusImg.setAttribute("width","100px");
        } else {
            bmiStatus.textContent = "EXTREMELY OBESE";
            bmiStatus.style.color = "red";
            bmiStatusImg.setAttribute("src","images/extremely obese.jpg");
            bmiStatusImg.setAttribute("height","200px");
            bmiStatusImg.setAttribute("width","100px");
        }
    }
});
