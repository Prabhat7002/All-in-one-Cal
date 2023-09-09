// function loaderFunc() {
//     let loader = document.querySelector("#loader-cont");
//     window.addEventListener('load', () => {
//       loader.style.display = "none";
//     });
// }
// loaderFunc();

const history = document.getElementById("history");
const historyCard = document.querySelector(".history-card");
const dataBlock = document.getElementById("data-block")
const delHistory = document.getElementById("del-history")

const display = document.getElementById("result");
const expression = document.getElementById("expression")

const clear = document.getElementById("clear");
// const backspace = document.getElementById("backspace");
const enter = document.getElementById("equal");

// const percent = document.getElementById("percent");
// const divide = document.getElementById("divide");
// const multiply = document.getElementById("multiply");
// const minus = document.getElementById("minus");
// const add = document.getElementById("add");

// const zero = document.getElementById("zero");
// const one = document.getElementById("one");
// const two = document.getElementById("two");
// const three = document.getElementById("three");
// const four = document.getElementById("four");
// const five = document.getElementById("five");
// const six = document.getElementById("six");
// const seven = document.getElementById("seven");
// const eight = document.getElementById("eight"); 
// const nine = document.getElementById("nine");
const dot = document.getElementById("dot");


let displayExp = ""
let resultExp = ""
let regex = /\d|\.|\*|\-|\+|\/|\%|÷|×|Enter|Escape|backspace/


document.addEventListener("keyup", (e) => {
    console.log(e.key)
    btnDisplay(e.key)
    btnOperations(e.key)
})

document.querySelector("#basic-calc").addEventListener("click",(e)=>{
    console.log(e.target.innerText)
    btnDisplay(e.target.innerText)
    btnOperations(e.target.innerText)
})


function btnDisplay(btn){
    if (regex.test(btn) && btn.length == 1) {
        if(btn == "/" || btn =='÷'){
            resultExp += '/';
            displayExp += '÷'
            display.innerHTML = displayExp;
        }
        else if(btn == "*" || btn == "×"){
            resultExp += '*';
            displayExp += "×";
            display.innerHTML = displayExp;
        }
        else{
            resultExp +=btn;
            displayExp += btn;
            display.innerHTML = displayExp
        }
    }
}

function btnOperations(btn){
    switch(btn){
        case "Escape":
        case "C":
            onClickAnimation(clear)
            displayExp = "";
            resultExp = "";
            display.innerHTML = displayExp;
            expression.innerHTML = "";
            break
        case "Backspace":
        case 'backspace':
            onClickAnimation(backspace)
            displayExp = displayExp.slice(0,displayExp.length-1);
            resultExp = resultExp.slice(0,resultExp.length-1);
            display.innerHTML = displayExp;
            break
        case "Enter":
        case '=':
            onClickAnimation(enter);

            let exp = resultExp
            resultExp = eval(resultExp)

            addDataBlock(displayExp,resultExp)
            display.innerHTML = resultExp;
            expression.innerHTML = displayExp;

            if(expression.innerHTML == 'undefined'){
                expression.innerHTML = ''
            };
            if(display.innerHTML == 'undefined'){
                display.innerHTML = 0
            };
            displayExp = ""
            resultExp = ""
            break
        
        case '+':
            onClickAnimation(add)
            break
        case '-':
        case '-':
            onClickAnimation(minus)
            break
        case '/':
        case '÷':
            onClickAnimation(divide)
            break
        case '*':
        case '×':
            onClickAnimation(multiply)
            break
        case "%":
            onClickAnimation(percent)
            break
        case "0":
            onClickAnimation(zero)
            break
        case "1":
            onClickAnimation(one)
            break
        case "2":
            onClickAnimation(two)
            break
        case "3":
            onClickAnimation(three)
            break
        case "4":
            onClickAnimation(four)
            break
        case "5":
            onClickAnimation(five)
            break
        case "6":
            onClickAnimation(six)
            break
        case "7":
            onClickAnimation(seven)
            break
        case "8":
            onClickAnimation(eight)
            break
        case "9":
            onClickAnimation(nine)
            break
        case ".":
            onClickAnimation(dot)
            break
    }
}

function onClickAnimation(buttonElement){
    if(buttonElement == enter){
        buttonElement.classList.add("pressed-enter");
        setTimeout(()=>{
            buttonElement.classList.remove("pressed-enter");
        },100)
    }
    else{
        buttonElement.classList.add("pressed");
        setTimeout(()=>{
            buttonElement.classList.remove("pressed");
        },100)
    }
}


dataBlock.innerHTML = ''

history.addEventListener("click",()=>{
    historyCard.classList.toggle('visible')
})

function addDataBlock(data,result){
    dataBlock.innerHTML += `<p class="card-element data">${data} = ${result}</p>`
}

delHistory.addEventListener("click",()=>{
    dataBlock.innerHTML = ''
})