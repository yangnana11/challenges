let prime=[2,3];
function findPrime(maxIndex) {
  let i=5;
  while (prime.length<maxIndex) {
    let j =0;
    for (j=0;j<prime.length;j++) {
      if (i%prime[j]==0) {
        break;
      }
    }
    if (j==prime.length) {
      prime.push(i);
    }
    i+=2;
  }
}
findPrime(10001);
console.log(prime[prime.length-1]);