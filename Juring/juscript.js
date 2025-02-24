function calculate() {
    let a = document.getElementById("a").value
    let radius = document.getElementById("radius").value
    document.getElementById("result").innerHTML = Math.round(a/360*Math.PI*radius*radius);     
}
document.addEventListener("keydown", e => {
    if (e.code == "Enter") {
        calculate(), displayRes()
    }
})

function displayRes() {
    let a = document.getElementById("a").value
    let radius = document.getElementById("radius").value
    let areaCircle = Math.PI*radius*radius;
    let areaJuring = Math.round(a/360*Math.PI*radius*radius);
    let sisaLuas = Math.round(areaCircle-areaJuring);
    new Chart( document.getElementById('piechart'), {
        type: "pie",
        data: {
            labels: ["Luas Sisa Lingkaran", "Luas Juring"],
            datasets: [{
                label: "Luas",
                data: [sisaLuas, areaJuring],
                backGroundColor: [
                    'rgb(54, 162, 235)',
                    'rgb(255, 99, 132)'
                ],
                hoverOffset: 4
            }]
    }})
}

/*new Chart(pie, {
    type: "pie",
    data: {
        labels: ["Luas Sisa Lingkaran", "Luas Juring"],
        datasets: [{
            label: "Luas",
            data: [40, 60],
            backGroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'
            ],
            hoverOffset: 4
        }]
}})*/