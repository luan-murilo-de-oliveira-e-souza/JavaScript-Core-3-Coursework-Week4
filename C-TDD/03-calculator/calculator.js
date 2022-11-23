function add(num) {
  const resultSumNumbers = num.split(",");
  return resultSumNumbers.reduce((accumulatedTotal, number) => {
    const integer = Number(number);
    if (integer > 1000) return accumulatedTotal;
    if (integer < 0)
      throw new Error(`Negative numbers not allowed: ${integer}`);
    return accumulatedTotal + integer;
  }, 0);
}

module.exports = add;
