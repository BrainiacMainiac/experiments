// This code needs work. It runs right, though.
// Starting variables
var visible = false;
var number = 0;
var shtuff = "Hey! Thanks for clicking. This text serves no purpose, so go ahead and look at the other stuff here."
// The button uses this
function reveal() {
    if (visible === false) {
        document.getElementById("explanatoryText").innerHTML = shtuff;
        visible = true;
    } else {
        document.getElementById("explanatoryText").innerHTML = "";
        visible = false;
    }
}

function calculate() {
    if (document.getElementById("maths").selectedIndex === 0) {
        var multiplicand2 = document.getElementById("otherNumber").value;
        var multiplicand1 = document.getElementById("mathEnter").value;
        document.getElementById("answer").value = multiplicand1 * multiplicand2;
    } else if (document.getElementById("maths").selectedIndex === 1) {
        var divisor2 = document.getElementById("otherNumber").value;
        var divisor1 = document.getElementById("mathEnter").value;
        document.getElementById("answer").value = parseInt(divisor1 / divisor2) + " R " + divisor1 % divisor2;
    } else if (document.getElementById("maths").selectedIndex === 2) {
        var minus2 = document.getElementById("otherNumber").value;
        var minus1 = document.getElementById("mathEnter").value;
        document.getElementById("answer").value = minus1 - minus2;
    } else if (document.getElementById("maths").selectedIndex === 3) {
        var exponent = document.getElementById("otherNumber").value;
        var base = document.getElementById("mathEnter").value;
        document.getElementById("answer").value = Math.pow(base, exponent);
    } else if (document.getElementById("maths").selectedIndex === 4) {
        var root = document.getElementById("otherNumber").value;
        var rootbase = document.getElementById("mathEnter").value;
        document.getElementById("answer").value = Math.pow(rootbase, 1 / root);
    } else {
        var plus2 = document.getElementById("otherNumber").value;
        var plus1 = document.getElementById("mathEnter").value;
        document.getElementById("answer").value = +plus1 + +plus2;
    }
}

function change() {
    document.getElementById("hover").innerHTML = "Thanks!";
}

function flee() {
    document.getElementById("hover").innerHTML = "Mouse over me!";
}

function increase() {
    if (isNaN(document.getElementById("counter").innerHTML) === true) {
        number = +document.getElementById("incrementer").value;
        document.getElementById("counter").innerHTML = number;
    } else {
        number += +document.getElementById("incrementer").value;
        document.getElementById("counter").innerHTML = number;
    }
}

function upDate() {
    var currentdate = new Date();
    document.getElementById("date").innerHTML = "Date: " + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear() + ", Time: " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds() + ":" + currentdate.getMilliseconds();
}