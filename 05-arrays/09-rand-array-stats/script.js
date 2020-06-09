/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", () => {

    	function randomGenerator(min, max) {
    		return Math.floor(Math.random() * (max - min) + min);
    	}

    	const arr = [];

    	for(let i = 0; i < 10; i++)
    	{
    		let randomNumber = randomGenerator(1, 101);
    		arr.push(randomNumber);
    		console.log(arr);
    		document.getElementById(`n-${i + 1}`).innerHTML = arr[i];
    	}

    	document.getElementById("min").innerHTML = Math.max(...arr);
    	document.getElementById("max").innerHTML = Math.min(...arr);
    	const average = arr.reduce((a, b) => a + b, 0);
    	document.getElementById("sum").innerHTML = average;
    	document.getElementById("average").innerHTML = average / arr.length;
    });

})();

