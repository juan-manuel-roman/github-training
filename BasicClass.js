class BasicClass {
  // Constructor is the definition of how the object is goind to be instantiated.
  constructor(param) {
    this.number = param;
  }
  
  add(param) {
    this.number += param; // Shorthand for this.number = this.number + param;
  } // When no return is specified, functions return undefined;

  addThree(a, b, c) {
    this.number += (a + b + c);
  }

  multiply(param) {
    this.number *= param; // Shorthand for this.number = this.number * param;
  }

  clear() {
    this.number = 0;
  }
}

const object1 = new BasicClass(1);
const object2 = new BasicClass(5);

object1.multiply(10);
object2.add(30);

object1.clear();

