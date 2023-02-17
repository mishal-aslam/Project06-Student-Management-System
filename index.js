#! /usr/bin/env node
import inquirer from 'inquirer';
inquirer
    .prompt([
    {
        type: 'input',
        name: 'paragraph',
        message: 'Enter a paragraph of text:',
    },
])
    .then((answers) => {
    const paragraph = answers.paragraph;
    const words = paragraph;
    const wordCount = words.split(" ").length;
    const characterCount = words.replace(/\s/g, '').length;
    console.log(`The paragraph has ${wordCount} words and ${characterCount} characters without whitespaces.`);
});
