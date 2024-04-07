#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlueBright.bold(`\n\t Welcome to my "CURRANCY CONVERTOR PROGRAM"\n`));
//define the list of  currancy & their rates
let exchange_rate = {
    "USD": 1,
    "ERU": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.70
};
//take input from inquirer for currancy exchange
let userchoice = await inquirer.prompt([{
        name: "from_currancy",
        type: "list",
        message: "Please select the currancy to convert from",
        choices: ["USD", "ERU", "JYP", "CAD", "AUD", "PKR"]
    },
    //choose the country want to find the currancy
    {
        name: "to_currancy",
        type: "list",
        message: "Please select the currancy to convert into",
        choices: ["USD", "ERU", "JYP", "CAD", "AUD", "PKR"]
    },
    //convert amount into
    {
        name: "amount",
        type: "input",
        message: "Enter  the amount to convert",
    },
]);
// using formula for currancy conversion
let from_amount = exchange_rate[userchoice.from_currancy];
let to_amount = exchange_rate[userchoice.to_currancy];
let amount = userchoice.amount;
//using base amount for conversion using formula
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//display the console amount 
console.log(`Converted Amount ${chalk.bgBlackBright(converted_amount.toFixed(2))}`);
