function bubbleSort(array) {
  let n = array.length;
  let swaped;
  for (let i = 0; i < n - 1; i++) {
    swaped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swaped = true;
      }
    }
    if (!swaped) break;
  }
  return array;
}
const array = [10, 4, 56, 4, 1, 6, 89, 71, 12, 0];
console.log("Original array", array);
console.log("Bubble sort array", bubbleSort(array));
