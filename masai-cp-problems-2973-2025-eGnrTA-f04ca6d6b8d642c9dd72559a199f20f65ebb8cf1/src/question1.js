// Problem 1: Currying
function evaluate(operation) {
  return function (a) {
    return function (b) {
      switch (operation) {
        case "mul":
          return a * b;
        case "sum":
          return a + b;
        case "div":
          return b === 0 ? Infinity : a / b;
        case "sub":
          return a - b;
        default:
          return "Invalid Operation";
      }
    };
  };
}

// Problem 2: Infinite Currying
function multiply(a) {
  let result = a;
  function innerMultiply(b) {
    if (b === undefined) return result;
    result *= b;
    return innerMultiply;
  }
  return innerMultiply;
}

// Problem 3: Currying
function sumOfTwoNumbers(a) {
  return function (b) {
    return a + b;
  };
}

// Problem 4: Flattening an Array
function flattenArray(arr) {
  const flattened = [];
  function flatten(arr) {
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        flattened.push(item);
      }
    });
  }
  flatten(arr);
  return flattened;
}

// Exporting the functions for testing
export { evaluate, multiply, sumOfTwoNumbers, flattenArray };
