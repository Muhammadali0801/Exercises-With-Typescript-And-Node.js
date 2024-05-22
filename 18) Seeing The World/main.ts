/*Seeing the World: Think of at least five places in the world you’d like to visit.*/


let placeToVisit: string[] = ["paris","tokyo","bali","barcelona","istanbul"];

//print in orignal  order
console.log("orignal order:", placeToVisit);

//Print array in alphabetical order without modifying the actual list.

console.log("Alphabetical order:", placeToVisit.slice().sort());

//array is still in its original order by printing it.
console.log("orignal order:", placeToVisit);

//Print array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical order:", placeToVisit.slice().sort().reverse());

// array is still in its original order by printing it again.
console.log("orignal order:", placeToVisit);

//Reverse the order of your list. Print the array to show that its order has changed.

console.log("reverse order changed");
placeToVisit.reverse();
console.log(placeToVisit);

//Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log("orignal order:", placeToVisit.sort());
console.log(placeToVisit);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("reverse alphabetical order changed:", placeToVisit.sort().reverse());
console.log(placeToVisit);
