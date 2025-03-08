const display = document.getElementById("display");
function append(input) {
    display.value += input;
    brain = parseInt(eval(display.value));
}

function squareRoot () {
    root = Math.sqrt(brain);
    console.log(root)
}

function clearDisplay(){
    display.value = ""
}

function backspace() {
    display.value = display.value.substring(0, display.value.length - 1)
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function Keys(x, y) {
    document.addEventListener("keydown", e => {
    if (e.key == x) {
        appendToDisplay(y) 
    }
})}

function backspaceKey(x) {
    document.addEventListener("keydown", e => {
    if (e.key == x) {
        backspace() 
    }
})}

function delKey(x) {
    document.addEventListener("keydown", e => {
    if (e.key == x) {
        clearDisplay() 
    }
})}

function calcKey(x) {
    document.addEventListener("keydown", e => {
    if (e.key == x) {
        calculate() 
    }
})}

Keys("1", "1")
Keys("2", "2")
Keys("3", "3")
Keys("4", "4")
Keys("5", "5")
Keys("6", "6")
Keys("7", "7")
Keys("8", "8")
Keys("9", "9")
Keys("0", "0")
Keys("+", "+")
Keys("-", "-")
Keys("/", "/")
Keys("*", "*")
Keys("^","**")
backspaceKey("Backspace")
delKey("Delete")
calcKey("=")
calcKey("Enter")