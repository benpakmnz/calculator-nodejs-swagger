module.exports = {
  calculate: function (operation, num1, num2) {
    let result;
    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        if (num2 === 0) {
          throw new Error("Cannot divide by zero");
        }
        result = num1 / num2;
        break;
      default:
        throw new Error("Invalid operation");
    }
    return result;
  },
};
