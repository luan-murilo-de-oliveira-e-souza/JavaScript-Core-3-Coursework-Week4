function convertToNewRoman(n) {
  romanNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let resultRomanNumber = "";

  for (let key in romanNumbers) {
    while (n >= romanNumbers[key]) {
      resultRomanNumber += key;
      n -= romanNumbers[key];
    }
  }
  return resultRomanNumber;
}

module.exports = convertToNewRoman;
