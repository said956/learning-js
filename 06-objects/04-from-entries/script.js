/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    
    document.getElementById("run").addEventListener("click", () => {
    	
    	let newArr = keys.map((element, index) => [keys[index], values[index]]);

    	let newObj = Object.fromEntries(newArr);

    	console.log(Object.keys(newObj));
    	console.log(Object.values(newObj));
    });
})();

// OTHER SOLUTIONS

// Array to object directly
/*let newObj = {};

for (let i = 0; i < keys.length; i++)
{
	newObj[keys[i]] = values[i];
}*/
