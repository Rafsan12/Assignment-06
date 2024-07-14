const nestedArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (const array of nestedArrays) {
  let sum = 0;
  for (const num of array) {
    sum += num;
  }
  console.log(`Sum of ${array}: ${sum}`);
}
