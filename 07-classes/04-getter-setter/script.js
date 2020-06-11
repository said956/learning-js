/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person {
    	constructor(firstName, lastName)
    	{
    		this.firstName = firstName;
    		this.lastName = lastName;
    	}

    	get name()
    	{
    		return `${this.firstName} ${this.lastName}`;
    	}

    	set name(updatedName)
    	{
    		let updatedNameArr = updatedName.split(" ");
    		this.firstName = updatedNameArr[0];
    		this.lastName = updatedNameArr[1];
    	}
    }

    document.getElementById("run").addEventListener("click", () => {
    	let newPerson = new Person("John", "Lafrite");

    	console.log(`${newPerson.firstName} ${newPerson.lastName}`);
    	
    	newPerson.name = "Arthur Chevalier";
    	console.log(`${newPerson.firstName} ${newPerson.lastName}`);
    })
})();