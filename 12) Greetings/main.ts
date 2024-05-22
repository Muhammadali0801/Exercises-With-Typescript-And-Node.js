/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a
 message to them. The text of each message should be the same, but each message should be personalized with the
  person’s name.*/



  let names: string[] = ["Ali", "hamza", "Azmat", "Asad"];
  let greetingMessage: string = "Asalam-o-Alikum, ";
  
  // Printing a personalized message to each person
  console.log("Sending greetings:");
  for (let i = 0; i < names.length; i++) {
      console.log(`${greetingMessage}${names[i]}!`);
  }