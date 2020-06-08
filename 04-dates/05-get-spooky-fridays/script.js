/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function() {
    	var year = document.getElementById("year").value;

    	function GetSpookyFridays(year)
    	{
    		var date = new Date();
    		var month13 = [];
    		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    		for(var month = 0; month < 12; month++)
    		{
    			date.setFullYear(year, month, 13);

    			if(date.getDay() == 5)
    			{
    				month13.push(months[month]);
    			}
    		}

    		return month13;
    	}

    	alert(GetSpookyFridays(year));
	});
})();
