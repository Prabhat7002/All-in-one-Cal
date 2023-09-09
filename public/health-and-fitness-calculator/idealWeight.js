// idealWeight.js

// Function to calculate ideal body weight using different formulas
function calculateIdealWeight(age, height, gender) {
    // Convert height to meters
    const heightInMeters = height / 100;
  
    // Formulas for different genders
    const formulas = {
      male: {
        robinson: heightInMeters * heightInMeters * 22,
        miller: heightInMeters * heightInMeters * 24,
        devine: 50 + 0.91 * (height - 152.4),
        hamwi: 48 + 1.1 * (height - 152.4)
      },
      female: {
        robinson: heightInMeters * heightInMeters * 21,
        miller: heightInMeters * heightInMeters * 23.5,
        devine: 45.5 + 0.91 * (height - 152.4),
        hamwi: 45.5 + 0.9 * (height - 152.4)
      }
    };
  
    // Calculate ideal weight using selected formulas
    const idealWeight = {
      robinson: formulas[gender].robinson.toFixed(1),
      miller: formulas[gender].miller.toFixed(1),
      devine: formulas[gender].devine.toFixed(1),
      hamwi: formulas[gender].hamwi.toFixed(1)
    };
  
    return idealWeight;
  }
  
  // Function to update the table with calculated ideal weights
  function updateIdealWeightTable(idealWeights) {
    const robinsonCell = document.getElementById("robinson");
    const millerCell = document.getElementById("miller");
    const devineCell = document.getElementById("devine");
    const hamwiCell = document.getElementById("hamwi");
  
    robinsonCell.textContent = `${idealWeights.robinson} kg`;
    millerCell.textContent = `${idealWeights.miller} kg`;
    devineCell.textContent = `${idealWeights.devine} kg`;
    hamwiCell.textContent = `${idealWeights.hamwi} kg`;
  }
  
  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
  
    const age = parseFloat(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value);
    const gender = document.getElementById("gender").value;
  
    const idealWeights = calculateIdealWeight(age, height, gender);
    updateIdealWeightTable(idealWeights);
  }
  
  // Attach the form submission handler
  document.getElementById("submit").addEventListener("click", handleSubmit);
  