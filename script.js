let adjective1 = prompt("Enter an adjective.");
let pluralnoun1 = prompt("Enter a plural noun.");
let verbing1 = prompt("Enter a verb ending in -ing.");
let place1 = prompt("Enter a place.");
let adjective2 = prompt("Enter an adjective.");
let noun1 = prompt("Enter a noun.");
let verb1 = prompt("Enter a verb.");
let name1 = prompt("Enter a name.");
let number1 = prompt("Enter a number.");
let noun2 = prompt("Enter a noun.");
let adjective3 = prompt("Enter an adjective.");
let noun3 = prompt("Enter a noun.");
let noun4 = prompt("Enter a noun.");
let emotion1 = prompt("Enter an emotion.");
let noun5 = prompt("Enter a noun.");
let pluralnoun2 = prompt("Enter a plural noun.");
let adjective4 = prompt("Enter an adjective.");
let place2 = prompt("Enter a place.");
let noun6 = prompt("Enter a noun.");
let exclamation1 = prompt("Enter an exclamation.");

let story = 
`Once upon a time, on a ${adjective1} Halloween night, a group of ${pluralnoun1} decided to go ${verbing1} in the ${place1}. They heard a ${adjective2} noise coming from behind a ${noun1}.

"Let's ${verb1} over there and see what it is!" said ${name1}. They counted to ${number1} and jumped out from behind the ${noun2}.

Suddenly, they saw a ${adjective3} ghost! "Boo!" it shouted. "You’ve disturbed my ${noun3}! Now you must help me find my lost ${noun4}."

With a mix of ${emotion1}, the friends agreed. They spent the night searching for the ghost's ${noun5}, making sure to avoid the ${pluralnoun2} that haunted the area.

Finally, they found it in a ${adjective4} corner of the ${place2}. "Thank you!" the ghost exclaimed. "Here’s a ${noun6} as a reward!"

As they left, they couldn’t help but shout, "${exclamation1}!" It was a Halloween they would never forget!`;

let madLibOutputDiv = document.getElementById("madLibOutput");

madLibOutputDiv.innerHTML = `<p>${story}</p>`