// Palindrom string means which will be read same from left to right and right to left
function isPalindrome(str) {
  var isPal = true;
  var x = 0;
  var y = str.length - 1;
  while (x != y && x < y) {
    if (str[x] != str[y]) {
      isPal = false;
      break;
    }
    x++;
    y--;
  }
  return isPal;
}

console.log("NilavvaliN : " + isPalindrome("NilavvaliN"));
console.log("Nilav valiN : " + isPalindrome("Nilav valiN"));
console.log("NilavPatel : " + isPalindrome("NilavPatel"));
