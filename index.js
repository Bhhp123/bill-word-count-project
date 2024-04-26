#! /usr/bin/env node
import inquirer from 'inquirer';
import { exit } from 'process';
console.log('\n\t\t\t\x1b[44m======================================================\x1b[0m');
console.log('\t\t\t\x1b[48;2;255;0;0m======== Bilawal Hussain\'s WORD COUNT PROJECT ========\x1b[0m');
console.log('\t\t\t\x1b[44m======================================================\x1b[0m');
const countWords = (text) => {
    return text.trim().split(/\s+/).length;
};
const questions = [
    {
        type: 'input',
        name: 'text',
        message: '\x1b[34mEnter some text (or "exit" to quit):\x1b[0m',
    },
];
const askForInput = async () => {
    inquirer.prompt(questions).then((answers) => {
        const text = answers.text;
        if (text.toLowerCase() === 'exit') {
            console.log('\t\x1b[31mExiting...\x1b[0m');
            exit();
        }
        else {
            const wordCount = countWords(text);
            console.log(`\t\x1b[32mWord count: ${wordCount}\x1b[0m`);
            askForInput();
        }
    });
};
askForInput();
