var string = "I love india, india is a beautiful country.";

function getCharFrequency(str) {
  var frequency = {};
  for (let char of str) {
    if (!frequency[char]) {
      frequency[char] = 0;
    }
    frequency[char] = frequency[char] + 1;
  }
  return frequency;
}

console.log(getCharFrequency(string));
