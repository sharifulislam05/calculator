const output = document.querySelector(".output")
function clean() {
    document.querySelector(".output").value = '';
}
function insert(number) {
    let inputNumber = output.value;
    inputNumber += number; 
    output.value = inputNumber;
}
function backspace() {
    const backspace = output.value.toString().slice(0, -1);
    output.value = backspace;
}
function equation() {
    const displayValue = output.value.toString();
    const result = eval(displayValue);
    output.value = result;
}