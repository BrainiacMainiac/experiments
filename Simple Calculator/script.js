var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var answer = document.getElementById("answer");
var button = document.getElementById("calcButton");
var options = document.getElementById("options");
function calculate() {
    // Multiply?
    if (options.selectedIndex === 0) {
        var multiplicand2 = box2.value;
        var multiplicand1 = box1.value;
        answer.disabled = false;
        answer.value = multiplicand1 * multiplicand2;
        answer.disabled = true;
    // Divide?
    } else if (options.selectedIndex === 1) {
        var divisor2 = box2.value;
        var divisor1 = box1.value;
        // Also gets the remainder
        answer.disabled = false;
        answer.value = parseInt(divisor1 / divisor2) + " R " + divisor1 % divisor2;
        answer.disabled = true;
    //  Subtract?
    } else if (options.selectedIndex === 2) {
        var minus2 = box2.value;
        var minus1 = box1.value;
        answer.disabled = false;
        answer.value = minus1 - minus2;
        answer.disabled = true;
    // Exponent?
    } else if (options.selectedIndex === 3) {
        var exponent = box2.value;
        var base = box1.value;
        answer.disabled = false;
        answer.value = Math.pow(base, exponent);
        answer.disabled = true;
    // Nth root?
    } else if (options.selectedIndex === 4) {
        var root = box2.value;
        var rootbase = box1.value;
        answer.disabled = false;
        answer.value = Math.pow(rootbase, 1 / root);
        answer.disabled = true;
    // Addition?
    } else {
        var plus2 = box2.value;
        var plus1 = box1.value;
        answer.disabled = false;
        answer.value = +plus1 + +plus2;
        answer.disabled = true;
    }
}
addEventListener('click', calculate);
