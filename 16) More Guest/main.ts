/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to
 invite to dinner.*/

 // Initial guest list
 let guestList: string[] = ["Bilal", "Shahzain", "Huzair"];
// Print initial invitations
console.log("Initial Invitations to Dinner:");
for (let person of guestList) {
    console.log(`Dear ${person}, you are cordially invited to dinner with me. It would be an honor to have your presence.`);
}
console.log("\n");

// Name of the guest who can't make it
let cantMakeIt: string = guestList[1];
console.log(`Unfortunately, ${cantMakeIt} can't make it to the dinner.\n`);

// New guests to add
let newGuests: string[] = ["Hussain", "Sohail", "Sameer", "Hamdan"];

// Replace the guest who can't make it with a new guest
for (let i = 0; i < guestList.length; i++) {
    if (guestList[i] === cantMakeIt) {
        guestList.splice(i, 1, ...newGuests);
        break;
    }
}

// Print updated invitations
console.log("Updated Invitations to Dinner:");
for (let person of guestList) {
    console.log(`Dear ${person}, you are cordially invited to dinner with me. It would be an honor to have your presence.`);
}