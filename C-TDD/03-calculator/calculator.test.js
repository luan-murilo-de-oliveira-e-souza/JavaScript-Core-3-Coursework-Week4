let add = require("./calculator");

test("If empty string return 0 ", function () {
  // Arrange
  const input = "";
  // Act
  const expected = 0;
  // Assert
  const output = add(input);
  expect(output).toEqual(expected);
});

test(" if number is 1 or more return sum of numbers ", function () {
  // Arrange
  const input = "9,1,4";
  // Act
  const expected = 14;
  // Assert
  const output = add(input);
  expect(output).toEqual(expected);
});

test(" if number is > 1000 should be ignored, so adding 2 + 1001 = 2 ", function () {
  // Arrange
  const input = "1001,2";
  // Act
  const expected = 2;
  // Assert
  const output = add(input);
  expect(output).toEqual(expected);
});

test(" if there is a negative number return `negatives not allowed:`", function () {
  expect(() => add("-1,2,3")).toThrowError("Negative numbers not allowed: -1");
});
