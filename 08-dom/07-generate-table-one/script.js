/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const targetID = document.getElementById("target");
    const table = document.createElement("table");
    const tableBody = document.createElement("tbody");

    for (let i = 0; i < 10; i++)
    {
    	const row = document.createElement("tr");
    	const cell = document.createElement("td");
    	row.appendChild(cell);
    	tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    targetID.appendChild(table);
})();