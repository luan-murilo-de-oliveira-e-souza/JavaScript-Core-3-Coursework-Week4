let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  let input = ["Irina", "Etza", "Daniel"];
  // Act
  let output = ["Irn", "Etz", "Dnl"];
  // Assert
  expect(removeVowelsFromWords(input)).toEqual(output);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
