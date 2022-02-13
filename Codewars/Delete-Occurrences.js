function deleteNth(arr, x) {
  let totals = {};
  return arr.filter(o => (totals[o] = ++totals[o] || 0) < x);
}

console.log(deleteNth([1, 1, 1, 1], 2));
console.log(deleteNth([20, 37, 20, 21], 1));