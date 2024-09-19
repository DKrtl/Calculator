const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        stringEq = convertStringEquation(display.value);

        display.value = eval(stringEq);
    } catch (error) {
        display.value = error;
    }
}

function convertStringEquation(eq) {
    return eq.replace(/÷/g, '/').replace(/×/g, '*');
}