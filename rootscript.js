function calculateSquareRoot() {
    let number = document.getElementById('numberInput').value;
    if (number === "" || number < 0) {
        document.getElementById('result').innerText = "Please enter a non-negative number.";
        return;
    }
    let squareRoot = Math.sqrt(number).toFixed(2);
    document.getElementById('result').innerText = `Square root: ${squareRoot}`;
}