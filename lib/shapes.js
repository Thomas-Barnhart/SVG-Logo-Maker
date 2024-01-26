// Base class representing a generic shape
export class Shape {
  constructor() {
    // Initialize the color property for the shape
    this.color = "";
  }

  // Method to set the color of the shape
  setColor(colorVar) {
    this.color = colorVar;
  }
}

// Circle class, extending the Shape class
export class Circle extends Shape {
  // Method to render the circle as an SVG circle
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
  }
}

// Square class, extending the Shape class
export class Square extends Shape {
  // Method to render the square as an SVG rectangle
  render() {
    return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
  }
}

// Triangle class, extending the Shape class
export class Triangle extends Shape {
  // Method to render the triangle as an SVG polygon
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}
