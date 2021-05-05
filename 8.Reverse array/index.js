var data = [1, 2, 3, 4, 5, 6, 7];

function reverseArray(arr) {
  var start = 0;
  var end = arr.length - 1;
  if (start == end) {
    // only 1 item in array
    return array;
  }
  while (start < end) {
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

console.log(reverseArray(data));
