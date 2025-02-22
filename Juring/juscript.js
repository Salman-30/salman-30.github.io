function calculate() {
    let a = document.getElementById("a").value
    let radius = document.getElementById("radius").value
    document.getElementById("result").innerHTML = a/360*Math.PI*radius*radius;     
}
document.addEventListener("keydown", e => {
    if (e.code == "Enter") {
        calculate()
    }
})