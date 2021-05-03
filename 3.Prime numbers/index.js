function getPrime() {
  var primes = [];
  for (let i = 2; i <= 100; i++) {
    var isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
}

// 0, 1 are not prime, do not consider them into calculation
console.log(getPrime());
