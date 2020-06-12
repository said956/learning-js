/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const targetElement = document.getElementById("target");
    let textArr = targetElement.innerHTML.split("");
    targetElement.innerHTML = "";
    let i = 0;

    function randomDelay(delay) {
    	return Math.floor((Math.random() * 1000) * delay);
    }
	
	let interval = window.setInterval(() => {

		targetElement.innerHTML += textArr[i];
		i++;

		if (i === textArr.length)
		{
			window.clearInterval(interval);
		}
	}, randomDelay(0.2));
})();
