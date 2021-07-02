const phoneNamesAndPrices = [
    { name: 'iphone 11', price: 50000 },
    { name: 'mi 11x pro', price: 42000 },
    { name: 'one plus 9r', price:45000},
    { name: 'iqoo 7', price: 28000 },
    { name: 'rog 3', price: 42000 },
    { name: 'S20 pro', price: 120000 },
    { name: 'Redmi Note 10 pro', price:17000},
    { name: 'Redmi Note 10 pro max', price: 20000 },
    { name: 'Iqoo z3', price: 17500 },
]
//Returns an array back after filtering
phonesAbove20k=phoneNamesAndPrices.filter(mobile=>mobile.price>=20000)
console.table(phonesAbove20k)