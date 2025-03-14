// do while loop
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// //Ask user if they want to print hello world using dowhile loop
// let userInput;
// do {
//   console.log("Hello World");
//   userInput = prompt("Do you want to print hello world yes/no").toLowerCase();
// } while (userInput === "yes");
// guess the number game
// let com = Math.floor(Math.random() * 100) + 1;
// let userInput1;
// do {
//   userInput1 = Number(prompt("Enter a valid number between 1 to 100"));
//   if (isNaN(userInput1) || userInput1 < 1 || userInput1 > 100) {
//     console.log("Please enter a valid no");
//     continue;
//   }
//   if (userInput1 > com) console.log("Too high, Plz try again");
//   else if (userInput1 < com) console.log("Too low,Plz try again");
//   else console.log("Congratulations u guessed it");
// } while (userInput1 !== com);
// Calculator program
let userInput2;
do {
  let num1 = Number(prompt("Enter first number"));
  let num2 = Number(prompt("Enter second number"));
  let operator = prompt("Enter an operator,+,-,*,/");
  switch (operator) {
    case "+":
      console.log("result" + (num1 + num2));
      break;
    case "-":
      console.log("result" + (num1 - num2));
      break;
    case "*":
      console.log("result" + num1 * num2);
      break;
    case "/":
      if (num2 !== 0) console.log("result" + (num1 + num2));
      else console.log("Plz enter a valid no");
      break;
    default:
      console.log("plz enter a valid operator");
  }
  userInput2 = prompt("Do you want to run it again? yes/no").toLowerCase();
} while (userInput2 === "yes");
