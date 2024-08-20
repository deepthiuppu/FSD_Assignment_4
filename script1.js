function generateRandomNumber() {
    const min = parseInt(document.getElementById("minValue").value);
    const max = parseInt(document.getElementById("maxValue").value);
    const resultElement = document.getElementById("result");

    if (isNaN(min) || isNaN(max)) {
        alert("Please enter valid numbers.");
        return;
    }

    if (min > max) {
        alert("Minimum value cannot be greater than maximum value.");
        return;
    }

    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    resultElement.textContent = `Random Number: ${randomNum}`;
    resultElement.style.color = "#4CAF50";  // Change the result color on success
}
