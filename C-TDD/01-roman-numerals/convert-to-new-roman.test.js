let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  let input = 37;
  let expected = "XXXVII";
  // Act
  let output = convertToNewRoman(37);
  // Assert
  expect(output).toEqual(expected);
});
