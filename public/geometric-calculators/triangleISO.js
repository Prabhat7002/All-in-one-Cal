//--------------------------Isosceles Triangle --------------------
const iso_SideA = document.getElementById("ISO_a")
const iso_SideB = document.getElementById("ISO_b")
const unitsISO = document.getElementById("unitsISO")
const resetISO = document.getElementById("resetISO")
const submitISO = document.getElementById("submitISO")
const answerISO = document.getElementById("answerISO")

submitISO.addEventListener('click', () => {
    let side_a = +iso_SideA.value;
    let side_b = +iso_SideB.value;
    let side_c = +iso_SideA.value;
    let perimeter = 2 * side_a + side_b;
    let semiPerimeter = perimeter / 2;
    let area = (side_b / 4) * Math.sqrt((4 * side_a * side_a) - side_b * side_b);

    showAnswerISO(side_a, side_b, side_c, perimeter, semiPerimeter, area)
})

function showAnswerISO(side_a, side_b, side_c, perimeter, semiPerimeter, area) {
    answerISO.innerHTML =
        `
    Side a = Side c
    <br><br>
    Side a =${side_a.toFixed(2)} ${unitsISO.value} <br>
    Side b =${side_b.toFixed(2)} ${unitsISO.value} <br>
    Side c =${side_c.toFixed(2)} ${unitsISO.value} <br>
    Semi-Perimeter s =${semiPerimeter.toFixed(2)} ${unitsISO.value} <br>
    Perimeter P =${perimeter.toFixed(2)} ${unitsISO.value} <br>
    Area A =${area.toFixed(2)} ${unitsISO.value}<sup>2</sup> <br>
    `
}

resetISO.addEventListener('click', () => {
    clearInputs();
})

function clearInputs(){
    answerISO.value = ''
    iso_SideA.value = ''
    iso_SideB.value = ''
}