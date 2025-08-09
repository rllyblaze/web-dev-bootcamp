//  IF STATEMENT

// let random = Math.random();
// if (random < 0.5 ){
//     console.log("YOUR NUMBER IS LESS THAN 0.5!!!")
//     console.log(random);
// }
//  else {
//     console.log("Your number is greater or equal to 0.5")
//  }
//  console.log(random)

// const dayOfWeek = prompt("Enter a day of the week").toLowerCase();
// if (dayOfWeek === "monday") {
//     console.log("UGH I HATE MONDAYS!")
// } else if (dayOfWeek === "saturday") {
//     console.log("I LOVE SATURDAYS!!!")
// } else if (dayOfWeek === "friday") {
//     console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!!!")
// } else {
//     console.log("MEH")
// }

// 0 -5 - FREE
// 5 - 10 CHILD $10
// 10 - 65 ADULT $20
// 65+ SENIOR $10

// const age = 89;

// if (age < 5) {
//     console.log("You are a child! You get in for free.")
// } else if ( age < 10) {
//     console.log("You are a teenager! You get in for $10.")
// } else if (age < 65){
//     console.log("You are an adult! You get in for $20.")
// } else {
//     console.log("You are a senior! You get in for $10.")
// }

const password = prompt("please enter a new password");

if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
    console.log("Valid password")
    } else {
    console.log("Password cannot contain spaces!")
    } 
} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}

