function sales(carsSold) {
  const sumPriceCarByBrand = {};

  for (car of carsSold) {
    if (!sumPriceCarByBrand[car.make]) {
      sumPriceCarByBrand[car.make] = car.price;
    } else {
      sumPriceCarByBrand[car.make] += car.price;
    }
  }

  return sumPriceCarByBrand;
}

module.exports = sales;
