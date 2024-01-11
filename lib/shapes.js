// Base class representing a generic shape
class Shape {
    constructor() {
      // Initialize the color property for the shape
      this.color = "";
    }
  
    // Method to set the color of the shape
    setColor(colorVar) {
      this.color = colorVar;
    }
  }
  
  // Triangle class, extending the Shape class
  class Triangle extends Shape {
    // Method to render the triangle as an SVG polygon
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  // Square class, extending the Shape class
  class Square extends Shape {
    // Method to render the square as an SVG rectangle
    render() {
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  // Circle class, extending the Shape class
  class Circle extends Shape {
    // Method to render the circle as an SVG circle
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
  
  // Exporting the Triangle, Square, and Circle classes for external use
  module.exports = { Triangle, Square, Circle };
  