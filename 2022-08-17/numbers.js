const numbers = [10, 0x67F, 12.11, 0o67];
const ints = numbers.map(number => parseFloat(number, 10));
console.log(ints);
console.log(parseInt('22abc'), Number('22abc'));
console.log(0x67F + 12.11);
// mindegyik szám? típusellenőrzés
// NaN 
// Infinity, -Infinity
// console.log(Number.isNaN('NaN'));
// MIN pés MAX_SAFE_INTEGER
// number, bigint