// class is the reserved keyword for defining classes
class Mathematics {

  add(a, b) {
    return a + b;
  }

  // Parameters are separated by comma
  addThree(a, b, c) {
    // The return keyword tells the program th retrun the given value.
    return a + b + c
  }

  // Parameters with ... are interpreted as arrays, to receive multiple ones.
  addMultiple(...elements) {
    // Reduce function(accumulator, currentElement) { body }
    // In an array, parses the array and applies the body operations to the elements
    return elements.reduce(function(x, y) { return x + y });
  }

  multiply(a, b) {
    return a * b;
  }

  // Reuse functions
  square(x) {
    this.multiply(x, x);
  }

  // Nested functions
  cube(x) {
    this.multiply(this.multiply(x, x), x);
  }

  // Recursion
  factorial(number) {
    if (number === 1) {
      return number;
    }
    return number * this.factorial(number - 1);
  }

  /* Example 
  factorial(10) 10 === 1 ? NOT
  factorial(10) = 10 * factorial(9) ... 9 === 1 ? NOT
  factorial(9) = 9 * factorial(8) ... 8 === 1 ? NOT
  factorial(8) = 8 * factorial(7) ... 7 === 1 ? NOT  8 * ...
  factorial(7) = 7 * factorial(6) ... 6 === 1 ? NOT  7 * 720 => 5040
  factorial(6) = 6 * factorial(5) ... 5 === 1 ? NOT  6 * 120 => 720
  factorial(5) = 5 * factorial(4) ... 4 === 1 ? NOT  5 * 24 => 120
  factorial(4) = 4 * factorial(3) ... 3 === 1 ? NOT  4 * 6 => 24
  factorial(3) = 3 * factorial(2) ... 2 === 1 ? NOT  3 * 2 => 6
  factorial(2) = 2 * factorial(1) ... 1 === 1 ? YES! return 1
  2 * 1 => 2 
  
  */
}

let myMath = new Mathematics();
let sum = myMath.add(1, 2);
