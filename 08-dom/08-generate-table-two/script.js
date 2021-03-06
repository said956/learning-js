/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
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

    	for(let j = 0; j < 10; j++)
    	{
    		const cell = document.createElement("td");
    		let multiplication = (i + 1) * (j + 1);
    		let multiplicationTable = document.createTextNode(multiplication);

    		cell.appendChild(multiplicationTable);
    		row.appendChild(cell);
    	}

    	tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    targetID.appendChild(table);

})();