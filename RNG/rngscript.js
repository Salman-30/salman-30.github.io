const randomNumber = Math.floor(Math.random() * 10)
console.log(randomNumber)
function checkNumber() {
    let userInput = document.getElementById("numberInput").value
    if (userInput == randomNumber) {
        document.getElementById("result").innerHTML = "You Win!"
    }
    else {
        document.getElementById("result").innerHTML = "You Lose!"
    }
}