// -----------------2D-Dist------------------

const in1 = document.getElementById("in1");
const in2 = document.getElementById("in2");
const submit2d = document.getElementById("submit1");
const answer2d = document.getElementById("answer1");
const reset2d = document.getElementById("reset1");


submit2d.addEventListener('click', () => {
    console.log(in1.values)
    let x1 = in1.value.split(",")[0]
    let x2 = in2.value.split(",")[0]
    let y1 = in1.value.split(",")[1]
    let y2 = in2.value.split(",")[1]
    let d = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
    console.log(d)
    answer2d.innerHTML = `
    Distance between two points = ${d}
    <br><br>
    For:<br>
    (X<sub>1</sub>, Y<sub>1</sub>) = (${x1}, ${y1}) <br>
    (X<sub>2</sub>, Y<sub>2</sub>) = (${x2}, ${y2})`

})

reset2d.addEventListener('click', () => {
    clearInputs();
})

function clearInputs() {
    in1.value = '';
    in2.value = '';
    answer2d.value = ''
}