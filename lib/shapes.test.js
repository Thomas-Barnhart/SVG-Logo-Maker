import { Circle, Square, Triangle } from "./shapes.js";

// Test suite for the Circle class
describe("Circle test", () => {
  // Test case for rendering a circle with a green background
  test("test for a circle with a green background", () => {
    // Create a new instance of the Circle class
    const shape = new Circle();
    
    // Set the color of the circle to green
    shape.setColor("green");

    // Assert that the rendered SVG matches the expected output
    expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="green" />');
  });
});

// Test suite for the Square class
describe("Square test", () => {
  // Test case for rendering a square with a blue background
  test("test for a square with a blue background", () => {
    // Create a new instance of the Square class
    const shape = new Square();
    
    // Set the color of the square to blue
    shape.setColor("blue");

    // Assert that the rendered SVG matches the expected output
    expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="blue" />');
  });
});

// Test suite for the Triangle class
describe("Triangle test", () => {
  // Test case for rendering a triangle with a purple background
  test("test for a triangle with a purple background", () => {
    // Create a new instance of the Triangle class
    const shape = new Triangle();
    
    // Set the color of the triangle to purple
    shape.setColor("purple");

    // Assert that the rendered SVG matches the expected output
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="purple" />');
  });
});
