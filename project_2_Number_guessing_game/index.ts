#! /usr/bin/env node

import inquirer from "inquirer"
let roundNumber: number = Math.floor((Math.random() * 4) + 1);

let userInput = await inquirer.prompt({
    type: "number",
    name: "guessNumber",
    message: "Enter a number between 1 to 4"
})
// -------conditional -------------
if(userInput.guessNumber === roundNumber){
    console.log("congretulation! you guessed correctly ");
}else{
    console.log(`sorry! try next time. correct ans is: ${roundNumber}`);
}