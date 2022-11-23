let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  let input = 7;
  let expected = "VII";
  // Act
  let output = convertToOldRoman(7);
  // Assert
  expect(output).toEqual(expected);
});
