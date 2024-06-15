const calculatorService = require("../service/CalculatorService");

module.exports.calculate_operation = function calculate_operation(
  req,
  res,
  next
) {
  const operation = req.headers.operation;
  const { num1, num2 } = req.body;

  try {
    const result = calculatorService.calculate(operation, num1, num2);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
