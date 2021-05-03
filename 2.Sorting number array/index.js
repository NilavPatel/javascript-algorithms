var numArray = [10, 5, 28, 17, 30, 50, 20, 4];

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var value = arr[i];
        arr[i] = arr[j];
        arr[j] = value;
      }
    }
  }
  return arr;
}

console.log(sort(numArray));
