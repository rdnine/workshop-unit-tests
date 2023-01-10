const { add } = require('./math')

test('should summarize all number values in an array', () => {
  // Arrange
  const numbers = [1, 2];
  const assert = 3;

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(assert);
});

test('should yield NaN if a least one invalid number is provided', () => {
  const inputs = ['invalid', 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

test('should yield a correct sum if an array of numeric string values is provided', () => {
  const numbers = ['1', '2'];
  const assert = 3;
  const result = add(numbers);

  expect(result).toBe(assert);
});

test('should yield 0 if an empty array is provided', () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

test('should throw an error if no value is passed into the function', () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow(/is not iterable/);
});

test('should throw an error if provided with multiple arguments instead of an array', () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow(/is not iterable/);
});