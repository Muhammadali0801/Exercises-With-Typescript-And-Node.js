"use strict";
/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
 includes at least three people you’d like to invite to dinner. Then use your list to print a message
  to each person, inviting them to dinner.*/
let guestList = ["Bilal", "Sheryar", "huzair"];
// Printing an invitation message to each person on the guest list
console.log("Invitations to Dinner:");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are cordially invited to dinner with me. It would be an honor to have your presence.`);
}
