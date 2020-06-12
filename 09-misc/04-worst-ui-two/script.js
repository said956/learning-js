/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const targetElement = document.getElementById("target");
    const buttonElement1 = document.getElementById("part-one");
    const buttonElement2 = document.getElementById("part-two");
    const buttonElement3 = document.getElementById("part-three");
    const buttonElement4 = document.getElementById("part-four");
    //const buttonElements = [buttonElement1, buttonElement2, buttonElement3, buttonElement4];
    //
    function buttonActivation(button)
    {
    	let counter = 0;

    	if (counter < button.getAttribute("data-max"))
		{
			counter++;
		}

		if (counter <= 9)
		{
			return "0" + counter;
		}
		else
		{
			return counter;
		}
    }

	buttonElement2.addEventListener("click", buttonActivation(buttonElement2));
	buttonElement3.addEventListener("click", buttonActivation(buttonElement3));
	buttonElement4.addEventListener("click", buttonActivation(buttonElement4));

	targetElement.innerHTML = `0${buttonElement1.value}${buttonElement2.value}${buttonElement3.value}${buttonElement4.value}`;
})();

/*

Another exercise in creating the worst possible user interface for dialing a phone number: 
every click increases the selected number. Minimum and maximum values are as specified on each 
button by the data-min and data-max attributes. Display the number (with a leading 0) in the target 
paragraph.

*/
