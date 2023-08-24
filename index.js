const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./shapes.js");

const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "Title",
    default: "Not Provided",
  },
  {
    type: "input",
    message: "Please enter up to 3 characters",
    name: "Characters",
    default: "Not Provided",
  },
  {
    type: "input",
    message:
      "Please enter a color keyword (OR a hexadecimal number) for the text",
    name: "TextColor",
    default: "Not Provided",
  },
  {
    type: "list",
    message: "Which shape would you select?",
    name: "Shape",
    choices: ["Circle", "Triangle", "Square"],
    default: "Not Provided",
  },
  {
    type: "input",
    message:
      "Please enter a color keyword (OR a hexadecimal number) for the shape",
    name: "ShapeColor",
    default: "Not Provided",
  },
];

//why does writetofile need a function

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log(`${fileName} created!`)
  );
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers.Shape);
    writeToFile(
      "demo1.svg",
      shapes.shapeCheck(
        answers.Shape,
        answers.ShapeColor,
        answers.Characters,
        answers.TextColor
      )
    );
  });
}

init();
