/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    document.getElementById("run").addEventListener("click", () => {



        computers.forEach()


        console.log(computers);



        
    })
})();


//In the script, I have an array computers, which makes an inventory of the computers 
//of a class.
//Unfortunately, this inventory is incomplete.
//So I created the object defaultProps, which contains the necessary properties
//and their default values.
//When you click on the button, display in the console the contents of the table computers, 
//with, for each element, all the necessary properties. Attention : if an element already 
//has a value for a property, do not overwrite it with the default value!

            /*for (let [key, value] of Object.entries(object1)) {
              console.log(`${key}: ${value}`);
            }*/

                    /*for(let i = 0; i < computers.length; i++)
        {
            for(let j = 0; j < defaultProps.length; j++)
            {
                if(! computers[i].hasOwnProperty(j))
                {
                    computer[i].j = defaultProps.j;
                }
            }

        }*/
