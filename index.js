// Importing the Inquirer library for interactive command-line prompts
const inquirer = require("inquirer");

// Importing the File System module to read and write files
const fs = require("fs");

// Importing shape classes (Triangle, Square, Circle) from the shapes module
const { Triangle, Square, Circle } = require("./lib/shapes");

// Function to generate the SVG file based on user input
function writeToFile(fileName, answers) {
  // Initialize an empty string to store the SVG content
  let svgString = "";

  // Define the width and height of the SVG container
  svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

  // Use the <g> tag to group elements and ensure proper layering (text on top of the shape)
  svgString += "<g>";

  // Insert the chosen shape into the SVG string
  svgString += `${answers.shape}`;

  // Create an instance of the selected shape class and add properties to the SVG string based on the user's choice
  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  // Add <text> tag for text alignment, content, color, and default font size of "40"
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;

  // Close the <g> tag to end the grouping
  svgString += "</g>";

  // Close the </svg> tag to complete the SVG content
  svgString += "</svg>";

  // Use the File System module to write the SVG file
  fs.writeFile(fileName, svgString, (err) => {
    // Log any errors or a success message to the console
    if (err) {
      console.log("Error occurred while generating the logo:", err);
    } else {
      console.log("Logo successfully generated as logo.svg");
    }
  });
}

// Function to prompt the user for logo customization details
function promptUser() {
  inquirer
    .prompt([
      // Prompt for the text content of the logo
      {
        type: "input",
        message: "Enter the text for your logo (up to three characters):",
        name: "text",
      },
      // Prompt for the text color (accepts color keywords or hexadecimal numbers)
      {
        type: "input",
        message: "Choose the text color (color keyword or hexadecimal):",
        name: "textColor",
      },
      // Prompt for the shape of the logo (Triangle, Square, Circle)
      {
        type: "list",
        message: "Choose the shape of the logo:",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      // Prompt for the background color of the shape
      {
        type: "input",
        message: "Choose the background color of the shape (color keyword or hexadecimal):",
        name: "shapeBackgroundColor",
      },
    ])
    .then((answers) => {
      // Check for errors in the text input (should be 3 characters or less)
      if (answers.text.length > 3) {
        console.log("Error: Text must be three characters or less.");
        // Call promptUser recursively to prompt the user again
        promptUser();
      } else {
        // Call the writeToFile function to generate the SVG file
        writeToFile("images/Logo.svg", answers);
      }
    });
}

// Initiate the logo customization process by calling the promptUser function
promptUser();
