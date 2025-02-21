const display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = ""
}

function backspace(){
    let info = display.value
    display.value = info.substring(0, info.length - 1)
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

document.addEventListener("keydown", e => {
    console.log(e);
})