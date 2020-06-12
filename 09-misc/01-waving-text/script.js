/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
	const targetElement = document.getElementById("target");
	let textArr = targetElement.innerHTML.split("");
	let fontSizes = ["16px", "18px", "20px", "17px", "14px"];
	let j = 0;

	targetElement.innerHTML = "";

	for (let i = 0; i < textArr.length; i++)
	{
		targetElement.innerHTML += `<span style="font-size: ${fontSizes[j]}">${textArr[i]}</span>`;
		j++;

		if (j === fontSizes.length)
		{
			j = 0;
		}
	}
})();