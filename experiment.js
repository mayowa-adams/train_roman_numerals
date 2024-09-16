class Rectangle {
  constructor(height, width) {
    this.__height = height;
    this.__width = width;
    this.span = 33;
  }

  get area() {
    return this.__height;
  }

  get volume() {
    return this.__width;
  }

  set parameter(x) {
    return (this.__width = x);
  }

  *getSlides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

const arr = new Rectangle(12, 13);
console.log(arr.area);
arr.parameter = 34;
console.log(arr.volume);

Rectangle.prototype.bitch = "goat";
console.log(arr.bitch);
Rectangle.prototype.span = 45;
console.log(arr.span);