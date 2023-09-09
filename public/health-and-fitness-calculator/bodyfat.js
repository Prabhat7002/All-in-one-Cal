document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculateBodyFat);
  });
  
  function calculateBodyFat() {
    const gender = document.getElementById("gender").value;
    const age = parseFloat(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const neck = parseFloat(document.getElementById("neck").value);
    const waist = parseFloat(document.getElementById("waist").value);
  
    // Calculate body fat using the U.S. Navy method
    const bodyFat =
      gender === "male"
        ? 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76
        : 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
  
    // Display the calculated body fat
    const bodyFatInput = document.getElementById("bodyfat");
    bodyFatInput.value = bodyFat.toFixed(2);
  
    // Update body fat status
    const status = document.getElementById("status");
    if (gender === "male") {
        if(bodyFat>=2 && bodyFat<=5)
        {
            status.innerHTML = "Healthy Body Fat - Essential Fats";
            status.style.color ="blue";
            status_img.setAttribute("src","images/underweight.jpg");
            status_img.setAttribute("height","200px");
            status_img.setAttribute("width","100px");
        }
        else if(bodyFat>=5 && bodyFat<=13){
            status.innerHTML = "Healthy Body Fat - Athlete";
            status.style.color ="green";
            status_img.setAttribute("src","images/healthy.jpg");
            status_img.setAttribute("height","200px");
            status_img.setAttribute("width","100px");
        }
        else if(bodyFat>=14 && bodyFat<=17){
            status.innerHTML = "Healthy Body Fat - Fit";
            status.style.color ="yellow";
            status_img.setAttribute("src","images/averagebf.jpg");
            status_img.setAttribute("height","200px");
            status_img.setAttribute("width","100px");
        }
        else if(bodyFat>=18 && bodyFat<=24){
            status.innerHTML = "Healthy Body Fat - Average";
            status.style.color ="orange";
            status_img.setAttribute("src","images/overweight.jpg");
            status_img.setAttribute("height","200px");
            status_img.setAttribute("width","100px");
        }
        else{
            status.innerHTML = "Excess Body Fat - Obese";
            status.style.color ="red";
            status_img.setAttribute("src","images/extremely obese.jpg");
            status_img.setAttribute("height","200px");
            status_img.setAttribute("width","100px");
        }
    } else {
        if(bodyFat>=10 && bodyFat<=13)
        {
            status.innerHTML = "Healthy Body Fat - Essential Fats";
            status.style.color ="blue";
            status_img.setAttribute("src","images/underweight.jpg");
            status_img.setAttribute("height","200px");
            status_img.setAttribute("width","100px");
        }
        else if(bodyFat>=14 && bodyFat<=20){
            status.innerHTML = "Healthy Body Fat - Athlete";
            status.style.color ="green";
            status_img.setAttribute("src","images/underweight.jpg");
            status_img.setAttribute("height","200px");
            status_img.setAttribute("width","100px");
        }
        else if(bodyFat>=21 && bodyFat<=24){
            status.innerHTML = "Healthy Body Fat - Fit";
            status.style.color ="yellow";
            status_img.setAttribute("src","images/underweight.jpg");
            status_img.setAttribute("height","200px");
            status_img.setAttribute("width","100px");
        }
        else if(bodyFat>=25 && bodyFat<=31){
            status.innerHTML = "Healthy Body Fat - Average";
            status.style.color ="orange";
            status_img.setAttribute("src","images/underweight.jpg");
            status_img.setAttribute("height","200px");
            status_img.setAttribute("width","100px");
        }
        else{
            status.innerHTML = "Excess Body Fat - Obese";
            status.style.color ="red";
            status_img.setAttribute("src","images/underweight.jpg");
            status_img.setAttribute("height","200px");
            status_img.setAttribute("width","100px");
        }
    }
  }
  