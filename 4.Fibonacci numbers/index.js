function getFibonacci() {
  let result = [0, 1];
  let num1 = 0;
  let num2 = 1;
  let total = num1 + num2;
  while (total <= 100) {
    total = num1 + num2;
    result.push(total);
    num1 = num2;
    num2 = total;
  }
  return result;
}

console.log(getFibonacci());
