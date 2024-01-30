import { Circle, Square, Triangle } from "./shapes.js";

// Test suite for the Circle class
describe("Circle Rendering Test", () => {
  // Test case for rendering a circle with a green background
  test("Should render a circle with a green background color", () => {
    // Create a new instance of the Circle class
    const shape = new Circle();
    
    // Set the color of the circle to green
    shape.setColor("green");

    // Assert that the rendered SVG matches the expected output
    expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="green" />');
  });
});

// Test suite for the Square class
describe("Square Rendering Test", () => {
  // Test case for rendering a square with a blue background
  test("Should render a square with a blue background color", () => {
    // Create a new instance of the Square class
    const shape = new Square();
    
    // Set the color of the square to blue
    shape.setColor("blue");

    // Assert that the rendered SVG matches the expected output
    expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="blue" />');
  });
});

// Test suite for the Triangle class
describe("Triangle Rendering Test", () => {
  // Test case for rendering a triangle with a purple background
  test("Should render a triangle with a purple background color", () => {
    // Create a new instance of the Triangle class
    const shape = new Triangle();
    
    // Set the color of the triangle to purple
    shape.setColor("purple");

    // Assert that the rendered SVG matches the expected output
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="purple" />');
  });
});

// Test suite for the Oval class
describe("Oval Rendering Test", () => {
  // Test case for rendering an oval with a red background
  test("Should render an oval with a red background color", () => {
    // Create a new instance of the Oval class
    const shape = new Oval();
    
    // Set the color of the oval to red
    shape.setColor("red");

    // Assert that the rendered SVG matches the expected output
    expect(shape.render()).toEqual('<ellipse cx="150" cy="115" rx="100" ry="60" fill="red" />');
  });
});

// Test suite for the Trapezoid class
describe("Trapezoid Rendering Test", () => {
  // Test case for rendering a trapezoid with a yellow background
  test("Should render a trapezoid with a yellow background color", () => {
    // Create a new instance of the Trapezoid class
    const shape = new Trapezoid();
    
    // Set the color of the trapezoid to yellow
    shape.setColor("yellow");

    // Assert that the rendered SVG matches the expected output
    expect(shape.render()).toEqual('<polygon points="70,190 230,190 290,300 10,300" fill="yellow" />');
  });
});