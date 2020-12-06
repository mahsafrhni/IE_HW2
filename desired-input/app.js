document.getElementById("number_input").addEventListener("input", function checkNumber() {
    var inputNum = document.getElementById("number_input");
    if ((inputNum.value > 1000 || inputNum.value < 1) && inputNum.value.length !== 0) {
        inputNum.style.backgroundColor = "#F5B7B1";
    } else {
        inputNum.style.backgroundColor = "#FFFFFF ";
    }
});