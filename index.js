const inquirer = require("inquirer");
const fs = require("fs");

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
  {
    type: "input",
    name: "Github_account",
    message: "What is your Github account?",
    default: "Not Provided",
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
  });
}

init();

// Want us to use inheritance with classes for SHape --> Triagne, Circle, and Square
