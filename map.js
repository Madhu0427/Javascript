const phoneNamesAndPrices = [
  { name: "iphone 11", price: 50000 },
  { name: "mi 11x pro", price: 42000 },
  { name: "one plus 9r", price: 45000 },
  { name: "iqoo 7", price: 28000 },
  { name: "rog 3", price: 42000 },
  { name: "S20 pro", price: 120000 },
  { name: "Redmi Note 10 pro", price: 17000 },
  { name: "Redmi Note 10 pro max", price: 20000 },
  { name: "Iqoo z3", price: 17500 },
];
//Returns results for every item in the array
phonesAbove50k = phoneNamesAndPrices.map((mobile) => {
  if (mobile.price >= 50000) {
    mobile.comment = "Above Mid Range";
  }
  return mobile;
});
console.table(phonesAbove50k);
