// // Transpose of a matrix
//  let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// let ans = Array.from({ length: matrix[0].length }, () => Array(matrix.length));
// for (let i = 0; i < ans.length; i++) {
//   for (let j = 0; j < ans[i].length; j++) {
//     ans[i][j] = matrix[j][i];
//   }
// }
// console.log(ans);

// rotate image(Transpose + reverse)
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let i = 0; i < matrix.length; i++) {
  for (let j = i; j < matrix[i].length; j++) {
    let temp = matrix[i][j];
    matrix[i][j] = matrix[j][i];
    matrix[j][i] = temp;
  }
}
for (let k = 0; k < matrix.length; k++) {
  let l = 0,
    m = matrix[k].length - 1;
  while (l < m) {
    let temp = matrix[k][l];
    matrix[k][l] = matrix[k][m];
    matrix[k][m] = temp;
    l++;
    m--;
  }
}
console.log(matrix);
