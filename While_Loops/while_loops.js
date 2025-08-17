// let count = 0;
// while (count < 10){
//     count++;
//     console.log(count)
// }

// const SECRET = "BabyHippo";

// let guess = prompt("Enter the secret code....");
// while(guess !== SECRET ){
//     guess = prompt("Enter the secret code...");
// }
// console.log("CONGRATS! YOU GOT THE SECRET!!!")

// let input = prompt("Hey, say something")

// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }

// console.log('Okay, you win!')

// for (let i = 0; i< 1000; i++){
//     console.log(i);
//     if (i === 100) break;
// }

let maximum = parseInt(prompt("Enter the maximun number!"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1


let guess = prompt("Enter your first guess!(Type 'q' to quit)");
let attempts = 1;
while(parseInt(guess) !== targetNum) {
    if(guess === 'q') break;
    guess = parseInt(guess);
 
    if(guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
        attempts++;
    } else if(guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:");
        attempts++;
    } else {
        guess = prompt("Invalid guess, Please enter a new number or 'q' to quit")
    }

}
if (guess === 'q') {
    console.log("OK, YOU QUIT!")
} else {
    console.log('OKAY, YOU WIN')
    console.log(`You got it! It took you ${attempts} guesses`)
    }
