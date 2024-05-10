function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerText = "Please enter valid weight and height values.";
        return;
    }

    // Calculate BMI
    var bmi = weight / Math.pow(height / 100, 2);

    // Display result
    var bmiCategory = getBMICategory(bmi);
    document.getElementById('result').innerText = "Your BMI: " + bmi.toFixed(2) + " (" + bmiCategory + ")";
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

