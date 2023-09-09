// Function to calculate BMR
function calculateBMR() {
    const age = parseFloat(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const gender = document.getElementById("gender").value;

    let bmr = 0;

    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "female") {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    document.getElementById("bmr_res").value = bmr.toFixed(2);
}

// // Function to calculate maintainance calorie
// function calculateMC(){
//     const activityLevel = parseFloat(document.getElementById("activityLevel").value);
//     const activityMultipliers = {
//         sedentary: 1.2,
//         lightlyActive: 1.375,
//         moderatelyActive: 1.55,
//         veryActive: 1.725,
//         superActive: 1.9
//     };

//     const bmr = calculateBMR();

//     const calorieIntake = bmr * activityMultipliers[activityLevel];

//     const calorieResult = document.getElementById("calorieResult");
//     calorieResult.textContent = calorieIntake.toFixed(2);
// }

// Event listener for the submit button
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    calculateBMR();
});

// document.getElementById("calculateButton").addEventListener("click", function(event) {
//     event.preventDefault();
//     calculateMC();
// });
