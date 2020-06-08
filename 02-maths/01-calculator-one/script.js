/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        var addition = Number(document.getElementById("op-one").value) + Number(document.getElementById("op-two").value);
        alert("Result: " + addition);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        var substraction = Number(document.getElementById("op-one").value) - Number(document.getElementById("op-two").value);
        alert("Result: " + substraction);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        var multiplication = Number(document.getElementById("op-one").value) * Number(document.getElementById("op-two").value);
        alert("Result: " + multiplication);
    });

    document.getElementById("division").addEventListener("click", function() {
        var division = Number(document.getElementById("op-one").value) / Number(document.getElementById("op-two").value);
        alert("Result: " + division);
    });
})();
