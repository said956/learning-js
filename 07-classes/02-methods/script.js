/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

	class Person {
		constructor(firstname, lastname) {
			this.firstname = firstname;
			this.lastname = lastname;
			this.sayHello = function() {
				return "Hello, " + this.firstname + " " + this.lastname;
			};
		}
	}

    document.getElementById("run").addEventListener("click", () => {
    	let newPerson = new Person("Laëtitia", "Dolne");

    	console.log(newPerson.sayHello());
    });
})();