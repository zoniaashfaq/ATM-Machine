import inquirer from "inquirer"

import chalk from "chalk"

//----------ATM MACHINE--------------

let Balance: number = 50000;
let myPin: number = 1234;

let pinAnswer = await inquirer.prompt([
    {
        name: "YourPin",
        message: "Enter your pin number",
        type: "number",
    },
]);
if (pinAnswer.YourPin === myPin) {
    let answer = await inquirer.prompt([
        {
            name: "accountType",
            message: "Select your account type",
            type: "list",
            choices: ["Current Account", "Savings Account"],
        },
        {
            name: "Transaction",
            message: "Select your transaction method",
            type: "list",
            choices: ["Cash Withdrawl", "Fast Cash"]
        },
    ]);
    if (answer.Transaction === "Cash Withdrawl") {
        let answer = await inquirer.prompt([
            {
                name: "Withdrawl",
                message: "Enter the amount you want to withdraw",
                type: "input",
            }
        ]);
        if (Balance >= answer.Withdrawl) {
            Balance -= answer.Withdrawl;
            console.log(`💲 Your remainin balance is ${Balance} 💲`);
        }
        else {
            console.log(`❗❗ NOT SUFFIECIENT BALANCE ❗❗`)
        }
    } else {
        let fastCash = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Enter the ammount you want to withdraw",
                type: "list",
                choices: ["1000", "5000", "10000", "20000"]
            },
        ]);
        if (Balance >= fastCash.fastCash) {
            Balance -= fastCash.fastCash
            console.log(`💲 Your remainin balance is ${Balance} 💲`);
        } else {
            console.log(`❗❗ NOT SUFFIECIENT BALANCE ❗❗`)
        }
    }
}

