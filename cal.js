function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (!(weight > 0 && height > 0)) {
        document.getElementById("result").innerText = "Enter a valid weight and height";
        return;//! (NOT) reverses the result:
        //If (weight > 0 && height > 0) is true, ! makes it false.
        //If (weight > 0 && height > 0) is false, ! makes it true.
    }
    
    let bmi = (weight / (height * height)).toFixed(2);
    let categories = ["underweight", "normal", "overweight", "obese"];//this is an array
    let category = bmi < 18.5 ? categories[0] :// ternary operator is used and it helps in true or false in the given condition.
                   bmi < 25 ? categories[1] :
                   bmi < 30 ? categories[2] : categories[3];

    document.getElementById("result").innerText = `Your BMI is ${bmi} (${category})`;
}

// Ensure button click triggers function
document.getElementById("button").addEventListener("click", calculateBMI);
// Function to reset form
function resetForm() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("gender").value="";
    document.getElementById("male").checked = false;//The .checked property determines whether a radio button or checkbox is selected (true) or not (false).
    //Setting it to false unchecks the button.
    document.getElementById("female").checked = false;
    
    document.getElementById("result").innerText = ""; // Clear result text
}

// Event listeners for buttons
document.getElementById("button").addEventListener("click", calculateBMI);// a function in JavaScript that waits for an event to occur then responds to it. 
document.getElementById("reset").addEventListener("click", resetForm);
