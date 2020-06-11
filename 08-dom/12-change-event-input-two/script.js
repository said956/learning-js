/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const passwordElement = document.getElementById("pass-one");
    const validityElement = document.getElementById("validity");
    const regex = /\d[\D]*\d/;

    passwordElement.addEventListener("input", () => {
    
    	if(passwordElement.value.length >= 8 && regex.test(passwordElement.value))
    	{
    		validityElement.innerHTML = "ok";
    	}
    	else
    	{
    		validityElement.innerHTML = "not ok";
    	}
    });
})();