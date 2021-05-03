// Palindrom string means which will be read same from left to right and right to left
function isPalindrome(str) {
  if (str.length % 2 != 0) {
    return false;
  }
  var isPal = true;
  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      isPal = false;
      break;
    }
  }
  return isPal;
}

console.log("NilavvaliN : " + isPalindrome("NilavvaliN"));
console.log("Nilav valiN : " + isPalindrome("Nilav valiN"));
console.log("NilavPatel : " + isPalindrome("NilavPatel"));
