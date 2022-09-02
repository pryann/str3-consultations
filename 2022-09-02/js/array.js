const arr = [1, 2, 3, 4, 5, 6, 7, 8];
let odd = [];
let even = [];

// Mutate
// for (let i = 0; i < arr.length; i += 1) {
//   if (arr[i] % 2 === 0) {
//     even.push(arr[i]);
//   } else {
//     odd.push(arr[i]);
//   }
// }

for (let i = 0; i < arr.length; i += 1) {
  if (arr[i] % 2 === 0) {
    even = [...even, arr[i]];
  } else {
    odd = [...odd, arr[i]];
  }
}

console.log(even, odd);
