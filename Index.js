const inquirer = require("inquirer");
const fs = require("fs");

const genLog = require('./utils/genLogSVG.js')

// const texVal = async (input) => {
//     if (input.length < 0 || input.length > 3) {
//        return true;
//     }
//     return false;
//  };

const que = [
    {
        type:'input',
        message:'Put up to Three characters here',
        name:'tex',
        // validate:{
        //     len: (0,3)
        // }
    },
    {
        type:'input',
        message:'Choose the color of the text',
        name:'texCol'
    },
    {
        type:'list',
        message:'Choose a Shape:',
        name:'sha',
        choices: [
            "Circle",
            "Triangle",
            "Square"
        ]
    },
    {
        type:'input',
        message:'Choose the color of the shape',
        name:'shaCol'
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.error(err) : console.log("Success"));
}

function init() {
    inquirer.prompt(que).then(responses => {
        console.log(responses);
        writeToFile('logo.svg', genLog(responses));
    })
}

init();