let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  let input = ["Irina", "Etza", "Daniel"];
  let expected = ["Irn", "Etz", "Dnl"];
  // Act
  let output = removeVowelsFromWords(input);
  // Assert
  expect(output).toEqual(output);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
