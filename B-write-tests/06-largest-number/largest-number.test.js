let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  let input = [3, 21, 88, 4, 36];
  // Act
  let output = 88;
  // Assert
  expect(getLargestNumber(input)).toEqual(output);
  expect(getLargestNumber(input)).toBe(output);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
