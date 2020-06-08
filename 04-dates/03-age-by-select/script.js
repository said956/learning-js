/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

	document.getElementById("run").addEventListener("click", function() {

	    var dobDay = document.getElementById("dob-day").value;
	    var dobMonth = (document.getElementById("dob-month").value) - 1;
	    var dobYear = document.getElementById("dob-year").value;

	    var date = new Date();
	    var currentDay = date.getDate();
	    var currentMonth = date.getMonth();
	    var currentYear = date.getFullYear();

	    var age = currentYear - dobYear;

	    if ((currentMonth < dobMonth) || ((currentMonth == dobMonth) && (currentDay < dobDay)))
	    {
	    	alert("You are currently " + (age - 1) + " years old.");
	    }
	    else
	    {
	    	alert("You are currently " + age + " years old.");
	    }
	});
})();