#! /usr/bin/env node
import inquirer from "inquirer"

let myBalance = 0;
let isContinue = true;
const pinCode = 1234;

const message = "welcome to ATM";
console.log(message);

//let pin_ans = await inquirer.prompt({
//    type: "number",
//   name: "ans",
//    message: "please enter your pin: "
//})

//if(pin_ans.ans === 1234){
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "list",
            message: "select any option",
            choices: ["deposite", "withdraw", "fast cash","balance check"]
        })
    
        // ---------------Deposite ------------
        if(ans.list === "deposite"){
            let ans = await inquirer.prompt({
                type: "number",
                name: "Depodite_amount",
                message: "please enter the amount: "
            })
            if(ans.Depodite_amount > 0){
                myBalance +=  ans.Depodite_amount;
                console.log(myBalance);
            }
    }
    
     //-------------------withdraw-----------------
    
     else if(ans.list === "withdraw"){
        let ans = await inquirer.prompt({
            type: "number",
            name: "withdraw_amount",
            message: "please enter the amount: "
        })
        if(ans.withdraw_amount <= myBalance){
            myBalance -= ans.withdraw_amount;
            console.log(myBalance);
        }else{
            console.log("insufficient balance");
        }
    }
    //----------------------fast cash----------------------
    else if(ans.list === "fast cash"){
        let ans = await inquirer.prompt({
            type: "list",
            name: "fast_cash",
            message: "select any option",
            choices: ["500","1000","2000","5000"]
        })
        if(ans.fast_cash <= myBalance){
            if(ans.fast_cash === "500"){
            myBalance -= ans.fast_cash;
            console.log(myBalance);
        
        }else if(ans.fast_cash === "1000"){
            myBalance -= ans.fast_cash;
            console.log(myBalance);
        }else if(ans.fast_cash === "2000"){
            myBalance -= ans.fast_cash;
            console.log(myBalance);
        
        }else if(ans.fast_cash === "5000"){
            myBalance -= ans.fast_cash;
            console.log(myBalance);
        }
    }
    }
    //------------------------check balance---------------
    else if(ans.list === "balance check"){}
        console.log(`your balance is ${myBalance}`)
    //-----------------------while condition---------------
        let while_ans = await inquirer.prompt({
            type: "confirm",
            name: "condition",
            message: "Do you want to continue",
            //choices: ["yes","no"]
        })
        if(while_ans.condition === false){
            isContinue = false;
        }
    
    } while (isContinue);

//}
//else{
//    console.log("incorrect pin");
//}