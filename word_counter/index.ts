import inquirer from "inquirer";

let user_ans = await inquirer.prompt({
    type: "input",
    name: "word",
    message: "please enter your sentence:"
});

let word_count = user_ans.word.trim().split(" ").length
console.log(`your sentence has ${word_count} words`);

