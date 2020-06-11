/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const sourceElement = document.getElementById("source");
    const dataImageValue = sourceElement.getAttribute("data-image");

    const targetElement = document.getElementById("target");
    const newImg = document.createElement("img");
    targetElement.appendChild(newImg);

    newImg.setAttribute("src", dataImageValue);

    const materialElement = document.querySelector(".material");
    materialElement.removeChild(sourceElement);
})();