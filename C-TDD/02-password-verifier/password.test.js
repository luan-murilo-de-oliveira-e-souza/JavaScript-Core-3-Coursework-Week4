let verifyPassword = require("./password");

test("If the password is less than 8 characters should return 'Password rejected'", function () {
  // Arrange
  const input = "pass";
  // Act
  const expected = "Password rejected";
  // Assert
  const output = verifyPassword(input);
  expect(output).toEqual(expected);
});

test("If the password is null should return 'Password rejected'", function () {
  // Arrange
  const input = null;
  // Act
  const expected = "Password rejected";
  // Assert
  const output = verifyPassword(input);
  expect(output).toEqual(expected);
});

test("If the password does not have at least 1 uppercase letter should return 'Password rejected'", function () {
  // Arrange
  const input = "password";
  // Act
  const expected = "Password rejected";
  // Assert
  const output = verifyPassword(input);
  expect(output).toEqual(expected);
});

test("If the password does not have at least 1 number should return 'Password rejected'", function () {
  // Arrange
  const input = "password";
  // Act
  const expected = "Password rejected";
  // Assert
  const output = verifyPassword(input);
  expect(output).toEqual(expected);
});
