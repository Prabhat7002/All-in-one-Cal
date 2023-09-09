
document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");

    calculateButton.addEventListener("click", function () {
        const gender = document.getElementById("gender").value;
        const age = parseFloat(document.getElementById("age").value);
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value);
        const activityLevel = document.getElementById("activityLevel").value; // Removed parseFloat


         // Validate age input
        if (age < 0) {
            alert("Age cannot be negative. Please enter a valid age.");
                return;
        }

        if (weight < 1) {
            alert("Please enter a valid weight.");
                return;
        }

        if (height < 0) {
            alert("Please enter a valid height.");
                return;
        }

        let bmr = 0;

        if (gender === "male") {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else if (gender === "female") {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        const activityMultipliers = {
            sedentary: 1.2,
            lightlyActive: 1.375,
            moderatelyActive: 1.55,
            veryActive: 1.725,
            superActive: 1.9
        };

        const calorieIntake = bmr * activityMultipliers[activityLevel];

        const calorieResult = document.getElementById("calorieResult");
        calorieResult.value = calorieIntake.toFixed(2); // Use .value instead of .textContent
    });
});
