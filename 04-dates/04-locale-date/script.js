/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var date = new Date();
    var currentDay = date.getDay();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentDate = date.getDate();
    var currentMonth = date.getMonth();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var currentYear = date.getFullYear();
    var currentHour = date.getHours();
    var currentMinute = date.getMinutes();

    document.getElementById("target").innerHTML = days[currentDay] + " " + currentDate + " " + months[currentMonth] + " " + currentYear + ", " + currentHour + "h" + currentMinute; 
})();