/* becode/javascript
 *
 * /01-base/02-var-prompt/script.js - 1.2: var & prompt
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var name = prompt("What's your name?", "Ex. John");

    if (name == "" || name == null)
    {
    	alert("You didn't enter your name.");
    }
    else
    {
    	alert("Hello, " + name + " !");
    }
})();