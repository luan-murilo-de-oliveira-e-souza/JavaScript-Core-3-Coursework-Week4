// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let filterOnlyNumbers = numbers.filter((num) => typeof num === "number");
  let sumAllNumbers = filterOnlyNumbers.reduce((a, b) => a + b);
  return sumAllNumbers / filterOnlyNumbers.length;
}

module.exports = average;
