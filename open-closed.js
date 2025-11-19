class Shape {
  area() {
    throw new Error('Método area() deve ser implementado');
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class AreaCalculator {
  calculateTotal(shapes) {
    return shapes.reduce((total, shape) => total + shape.area(), 0);
  }
}

const shapes = [
  new Rectangle(10, 5),
  new Circle(7)
];

const calculator = new AreaCalculator();
console.log('Área total:', calculator.calculateTotal(shapes));
