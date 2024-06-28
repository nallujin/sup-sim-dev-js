const para = document.querySelector("#monitor");
const resPara = document.querySelector("#result")
let calculation = localStorage.getItem("defVal") || "";
para.textContent = calculation;

function updateCalculation(cont) {
    calculation += cont;
    localStorage.setItem("defVal", calculation);
    para.textContent = calculation;
}

function clearStor() {
    calculation = "";
    para.textContent = ""
    resPara.textContent = ""
    localStorage.setItem("defVal", "");
}

function finalize() {
    console.log(eval(calculation));
    resPara.textContent = eval(calculation);
    calculation = "";
    localStorage.setItem("defVal", "");
}