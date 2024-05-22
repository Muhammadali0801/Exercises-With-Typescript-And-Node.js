"use strict";
/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array
of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate
array. Call show_magicians() with each array to show that you have one array of the original names and one array
with the Great added to each magician’s name.*/
let magicians = ["Afzal Rashid", "M.Yaseen", "Ejaz Mughal "];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
function show_magicians(magicians) {
    magicians.forEach((magicians) => {
        console.log(magicians);
    });
}
const copymagicianArray = copyArray(magicians);
make_great(copymagicianArray);
console.log("\n orignal Array");
show_magicians(magicians);
console.log("\n Modified Array");
show_magicians(copymagicianArray);
