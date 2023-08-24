const { text } = require("express");

class Shape {
  constructor(shapeName, shapeColor, textName, textColor) {
    this.shapeName = shapeName;
    this.shapeColor = shapeColor;
    this.textName = textName;
    this.textColor = textColor;
  }

  render() {}
}

class Circle extends Shape {
  constructor(shapeName, shapeColor, textName, textColor) {
    super(shapeName, shapeColor, textName, textColor);
  }
  SVG = `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">
  <svg height="210" width="500">
  <circle cx="200" cy="130" r="80" style="fill:${this.shapeColor};stroke:purple;stroke-width:1" />
  </svg>
  <text x="200" y="155" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textName}</text>
  </svg>`;
  render() {
    returns`<circle cx="200" cy="130" r="80" style="fill:${this.shapeColor};stroke:purple;stroke-width:1" />`;
  }
}

class Square extends Shape {
  constructor(shapeName, shapeColor, textName, textColor) {
    super(shapeName, shapeColor, textName, textColor);
  }
  SVG = `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">
  <svg height="210" width="500">
  <rect x="100" y="50" width="200" height="150" style="fill:${this.shapeColor};stroke:purple;stroke-width:1" />
  </svg>
  <text x="200" y="155" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textName}</text>
  </svg>`;
  render() {
    returns`<rect x="100" y="50" width="200" height="150" style="fill:${this.shapeColor};stroke:purple;stroke-width:1" />`;
  }
}

class Triangle extends Shape {
  constructor(shapeName, shapeColor, textName, textColor) {
    super(shapeName, shapeColor, textName, textColor);
  }
  SVG = `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">
  <svg height="210" width="500">
  <polygon points="200,10 300,190 100,190" style="fill:${this.shapeColor};stroke:purple;stroke-width:1" />
  </svg>
  <text x="200" y="155" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textName}</text>
  </svg>`;
  render() {
    returns`<polygon points="200,10 300,190 100,190" style="fill:${this.shapeColor};stroke:purple;stroke-width:1" />`;
  }
}

function shapeCheck(shapeName, shapeColor, textName, textColor) {
  switch (shapeName) {
    case "Circle":
      const circle1 = new Circle(shapeName, shapeColor, textName, textColor);
      console.log(circle1);
      return circle1.SVG;
    case "Square":
      const square1 = new Square(shapeName, shapeColor, textName, textColor);
      console.log(square1);
      return square1.SVG;
    case "Triangle":
      const triangle1 = new Triangle(
        shapeName,
        shapeColor,
        textName,
        textColor
      );
      console.log(triangle1);
      return triangle1.SVG;
  }
}

module.exports = {
  Shape,
  Circle,
  Square,
  Triangle,
  shapeCheck,
};
