"use strict";
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a
 new set of invitations. You’ll have to think of someone else to invite.*/
let guestList = ["Bilal", "Sheryar", "Huzair"];
// Print initial invitations
console.log("Initial Invitations to Dinner:");
guestList.forEach(person => {
    console.log(`Dear ${person}, you are cordially invited to dinner with me. It would be an honor to have your presence.`);
});
// Name of the guest who can't make it
let cantMakeIt = guestList[1];
console.log(`Unfortunately, ${cantMakeIt} can't make it to the dinner.\n`);
// Replace the guest who can't make it with a new guest
guestList[1] = "Shahzain";
// Print second set of invitations
console.log("Updated Invitations to Dinner:");
guestList.forEach(person => {
    console.log(`Dear ${person}, you are cordially invited to dinner with me. It would be an honor to have your presence.`);
});
