/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.*/

 let Guests: string[] = ["Bilal","Hussain","Sohail","Sameer","Hamdan","Huzair",];

 //Print message
 console.log("Unfortunately! the new dinner table wont arrive so we can invite only 2 guest");

 Guests.unshift("Hanzala","Khuzaima");
 //print message Update list
 console.log("Update list of guest:",Guests);

  //removing guest from list
  while (Guests.length > 2) {
    let removedguest:string | undefined = Guests.pop();
    if (removedguest !== undefined) {
       console.log(`Sorry,${removedguest}, we cant invite you. `);
    
    }
    
 }
//Print a message to each of the two people still on your list, letting them know they’re still invited.

Guests.forEach(guestList => {
   console.log(`dear ${guestList}, you both are invited  for a dinner. `);
   
})
//Remove 2 name from the list
Guests.splice(0,Guests.length)

//print updated empty list
console.log("Update list of guest:",Guests);
 

