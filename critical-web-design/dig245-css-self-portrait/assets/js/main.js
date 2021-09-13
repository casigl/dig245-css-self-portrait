// This file creates the java code for self-portrait. 
// Author: Caroline Sigl
// Date: September 12, 2021
// Time spent: 5 hours
// Collaborators: n/a

var bauhaus = `

Staaatliches Bauhaus (1919-1933)

      ..-""T-..
    ,'__   |   '.
   /   N|  |     !
  :     '  |      :
  [      __|      ]
  :      _I       :
   !   ___I      /
    '.  N]     ,'
      "-"!..--"

`;

console.log(bauhaus);

let elements = document.querySelectorAll("div");
console.log(`This portrait contains ${elements.length} HTML div elements`);

document.addEventListener("mousemove", () => {
  let mousex = event.clientX; // Gets Mouse X
  let mousey = event.clientY; // Gets Mouse Y
  //console.log([mousex, mousey]); // Prints data
  document.getElementById("mouse").innerHTML = "X: " + mousex + ", " + "Y: " + mousey;
});
