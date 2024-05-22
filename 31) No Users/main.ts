/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.*/

let usernames: string[] = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let username of usernames) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
