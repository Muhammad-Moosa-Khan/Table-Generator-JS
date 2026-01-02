// Step 1: Number input
let num = prompt("Enter the number for the table:");

// Step 2: Lines / limit input
let limit = prompt("How many lines do you want?");

let table = "";

for(let i = 1; i <= limit; i++){
     document.write(num + " x " + i + " = " + (num * i) + "<br>");
}
