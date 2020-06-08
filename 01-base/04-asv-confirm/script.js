/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function Agt() {

    var age = prompt("What's your age?", "Ex. 20");
    var gender = prompt("What's your gender?", "Ex. Male");
    var town = prompt("In which town do you live?", " Ex. Liège");

    var confirmValue = confirm("Your age: " + age + "\nYour gender: " + gender + "\nYour town: " + town + "\nDo you confirm these data?");

    if(confirmValue)
    {
    	alert("You have confirmed. Thank you.");
    }
    else
    {
    	Agt();
    }
})();