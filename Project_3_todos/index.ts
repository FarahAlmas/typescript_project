#! /usr/bin/env node

import inquirer from "inquirer";
let todosList = [];
let condition = true;
while (condition) {
  let todosQues= await inquirer.prompt([
    {
        name:"firstQues",
        type:"input",
        message:"what would you like to add in your todos",
    },
    {
        name:"secondQues",
        type:"confirm",
        message:"do you want to add more todos",
        default: "true",
    },
]);
todosList.push(todosQues.firstQues);
console.log(todosList);
condition = todosQues.secondQues;
}
