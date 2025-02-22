function displayInputs() {
    let shape = document.getElementById("shape").value;
    let inputsDiv = document.getElementById("inputs");
    inputsDiv.innerHTML = "";
    
    if (shape === "circle") {
        inputsDiv.innerHTML = '<label>Radius:</label><input type="number" id="radius">';
    } else if (shape === "rectangle") {
        inputsDiv.innerHTML = '<label>Length:</label><input type="number" id="length">' +
                              '<label>Width:</label><input type="number" id="width">';
    } else if (shape === "triangle") {
        inputsDiv.innerHTML = '<label>Base:</label><input type="number" id="base">' +
                              '<label>Height:</label><input type="number" id="height">';
    }
}

function calculate() {
    let shape = document.getElementById("shape").value;
    let resultText = "";

    if (shape === "circle") {
        let radius = parseFloat(document.getElementById("radius").value);
        if (!radius || radius <= 0) {
            resultText = "Please enter a valid radius.";
        } else {
            let area = Math.PI * radius * radius;
            let perimeter = 2 * Math.PI * radius;
            resultText = `Area: ${area.toFixed(2)}, Perimeter: ${perimeter.toFixed(2)}`;
        }
    } else if (shape === "rectangle") {
        let length = parseFloat(document.getElementById("length").value);
        let width = parseFloat(document.getElementById("width").value);
        if (!length || length <= 0 || !width || width <= 0) {
            resultText = "Please enter valid dimensions.";
        } else {
            let area = length * width;
            let perimeter = 2 * (length + width);
            resultText = `Area: ${area}, Perimeter: ${perimeter}`;
        }
    } else if (shape === "triangle") {
        let base = parseFloat(document.getElementById("base").value);
        let height = parseFloat(document.getElementById("height").value);
        if (!base || base <= 0 || !height || height <= 0) {
            resultText = "Please enter valid dimensions.";
        } else {
            let area = 0.5 * base * height;
            resultText = `Area: ${area}`;
        }
    }

    document.getElementById("result").innerText = resultText;
}