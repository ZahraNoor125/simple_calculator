#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the Opearator to perfome function",
        type: "list",
        name: "opearator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.opearator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.opearator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.opearator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.opearator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operator");
}
;
