const sum = elements => elements.reduce((a, b) => a + b);
const diff = (a, b) => a - b;
const mult = (elements) => elements.reduce((a, b) => a * b);
const divide = (a, b) => a / b;

module.exports = { sum, diff, mult, divide };

