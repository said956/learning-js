/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {

    	switch(operation)
    	{
    		case "addition":
    			var addition = Number(document.getElementById("op-one").value) + Number(document.getElementById("op-two").value);
        		alert("Result: " + addition);
    			break; 
    		case "substraction":
    			var substraction = Number(document.getElementById("op-one").value) - Number(document.getElementById("op-two").value);
        		alert("Result: " + substraction);
    			break; 
    		case "multiplication":
    			var multiplication = Number(document.getElementById("op-one").value) * Number(document.getElementById("op-two").value);
        		alert("Result: " + multiplication);
    			break; 
    		case "division":
    			var division = Number(document.getElementById("op-one").value) / Number(document.getElementById("op-two").value);
        		alert("Result: " + division);
    			break; 
    	}
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
