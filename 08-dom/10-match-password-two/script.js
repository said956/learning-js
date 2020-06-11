/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", () => {
    	let password1 = document.getElementById("pass-one");
    	let password2 = document.getElementById("pass-two");

    	if (password1.value !== password2.value)
    	{
    		password1.setAttribute("class", "error");
    		password2.setAttribute("class", "error");
    	}
    });
})();