// -----------------3D-Dist------------------

const xyz1 = document.getElementById("xyz1");
const xyz2 = document.getElementById("xyz2");
const submit3 = document.getElementById("submit3");
const answer3 = document.getElementById("answer3");
const reset3 = document.getElementById("reset3");


submit3.addEventListener('click', () => {
    console.log(xyz1.values)
    let x1 = xyz1.value.split(",")[0]
    let x2 = xyz2.value.split(",")[0]
    let y1 = xyz1.value.split(",")[1]
    let y2 = xyz2.value.split(",")[1]
    let z1 = xyz1.value.split(",")[2]
    let z2 = xyz2.value.split(",")[2]
    let d = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2) + Math.pow((z2 - z1), 2))
    console.log(d)
    answer3.innerHTML = `
    Distance between three points = ${d.toFixed(4)}
    <br><br>
    For:<br>
    (X<sub>1</sub>, Y<sub>1</sub>, Z<sub>1</sub>) = (${x1}, ${y1}, ${z1}) <br>
    (X<sub>2</sub>, Y<sub>2</sub>, Y<sub>2</sub>) = (${x2}, ${y2}, ${z2})`

})

reset3.addEventListener('click', () => {
    clearInputs();
})

function clearInputs(){
    answer3.value = ''
    xyz1.value = ''
    xyz2.value = ''
}