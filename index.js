import inquirer from "inquirer";
import fs from "fs";
import { Circle, Square, Triangle } from "./lib/shapes";

async function writeToFile(fileName, answers) {
  let svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

  svgString += "<g>";
  svgString += `${answers.shape}`;

  let shapeChoice;
  switch (answers.shape) {
    case "Triangle":
      shapeChoice = new Triangle();
      svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
      break;
    case "Square":
      shapeChoice = new Square();
      svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
      break;
    default:
      shapeChoice = new Circle();
      svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  svgString += "</g>";
  svgString += "</svg>";

  await fs.promises.writeFile(fileName, svgString);
  console.log("Generated logo.svg");
}

async function promptUser() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        message: "What text would you like your logo to display? (Enter up to three characters)",
        name: "text",
      },
      {
        type: "input",
        message: "Choose text color (Enter color keyword OR a hexadecimal number)",
        name: "textColor",
      },
      {
        type: "list",
        message: "What shape would you like the logo to render?",
        choices: ["Circle", "Square", "Triangle"],
        name: "shape",
      },
      {
        type: "input",
        message: "Choose shape's color (Enter color keyword OR a hexadecimal number)",
        name: "shapeBackgroundColor",
      },
    ]);

    if (answers.text.length > 3) {
      console.log("Must enter a value of no more than 3 characters");
      await promptUser();
    } else {
      await writeToFile("logo.svg", answers);
    }
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

promptUser();
