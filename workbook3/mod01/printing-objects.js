class Car {
  constructor(name, engine) {
    this.name = name;
    this.engine = engine;
  }
  carInfo() {
    console.log("car", this.name);
  }
}

class Engine {
  constructor(type) {
    this.type = type;
  }

  engineInfo() {
    console.log("engine", this.type);
  }
}

let engine = new Engine("super");
let car = new Car("Mario", engine);

car.engine.engineInfo();
