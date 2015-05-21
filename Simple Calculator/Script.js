// This code needs work. It runs right, though.
// Starting variables
var visible = false;
var number = 0;
var stuff = "Hey! Thanks for clicking. This text serves no purpose, so go ahead and look at the other stuff here.";
// The "a button" uses this
function reveal() {
    if (visible === false) {
        document.getElementById("explanatoryText").innerHTML = stuff;
        visible = true;
    } else {
        document.getElementById("explanatoryText").innerHTML = "";
        visible = false;
    }
}
// For calculations
function calculate() {
    // Multiply?
    if (document.getElementById("maths").selectedIndex === 0) {
        var multiplicand2 = document.getElementById("otherNumber").value;
        var multiplicand1 = document.getElementById("mathEnter").value;
        document.getElementById("answer").value = multiplicand1 * multiplicand2;
    // Divide?
    } else if (document.getElementById("maths").selectedIndex === 1) {
        var divisor2 = document.getElementById("otherNumber").value;
        var divisor1 = document.getElementById("mathEnter").value;
        // Also gets the remainder
        document.getElementById("answer").value = parseInt(divisor1 / divisor2) + " R " + divisor1 % divisor2;
    //  Subtract?
    } else if (document.getElementById("maths").selectedIndex === 2) {
        var minus2 = document.getElementById("otherNumber").value;
        var minus1 = document.getElementById("mathEnter").value;
        document.getElementById("answer").value = minus1 - minus2;
    // Exponent?
    } else if (document.getElementById("maths").selectedIndex === 3) {
        var exponent = document.getElementById("otherNumber").value;
        var base = document.getElementById("mathEnter").value;
        document.getElementById("answer").value = Math.pow(base, exponent);
    // Nth root?
    } else if (document.getElementById("maths").selectedIndex === 4) {
        var root = document.getElementById("otherNumber").value;
        var rootbase = document.getElementById("mathEnter").value;
        document.getElementById("answer").value = Math.pow(rootbase, 1 / root);
    // No? Then must be addition.
    } else {
        var plus2 = document.getElementById("otherNumber").value;
        var plus1 = document.getElementById("mathEnter").value;
        document.getElementById("answer").value = +plus1 + +plus2;
    }
}

// These two functions are for the hover box.
// Change
function change() {
    document.getElementById("hover").innerHTML = "Thanks!";
}
// Change back
function flee() {
    document.getElementById("hover").innerHTML = "Mouse over me!";
}
// For the counter
function increase() {
    // Checks if it is NaN and sets it to 0
    if (isNaN(document.getElementById("counter").innerHTML) === true) {
        number = +document.getElementById("incrementer").value;
        document.getElementById("counter").innerHTML = number;
    } else {
        number += +document.getElementById("incrementer").value;
        document.getElementById("counter").innerHTML = number;
    }
}
// Does what it says on the tin. It's a date getter, there's a setInterval so it goes every millisecond.
function upDate() {
    var currentdate = new Date();
    document.getElementById("date").innerHTML = "Date: " + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear() + ", Time: " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds() + ":" + currentdate.getMilliseconds();
}