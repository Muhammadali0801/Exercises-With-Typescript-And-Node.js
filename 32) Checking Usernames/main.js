"use strict";
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a
unique username.*/
let current_users = ["Naeem", "Ahad", "Anas", "Ali", "Zaryab"];
let new_users = ["Amjad", "Umer", "Saad", "Bilal", "Asad"];
for (let new_username of new_users) {
    let username_exists = false;
    for (let current_username of current_users) {
        if (new_username.toLowerCase() === current_username.toLowerCase()) {
            username_exists = true;
            break;
        }
    }
    if (username_exists) {
        console.log(`The username '${new_username}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username '${new_username}' is available.`);
    }
}
