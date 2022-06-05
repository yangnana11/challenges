function solution(n) {

    var sum = 1;
    var data = new Uint8Array(n + 1);
    data[0] = 1;
    data[1] = 1;
    var bound = Math.floor(Math.sqrt(n));
    for (var i = 2; i <= bound; i++) {
      if (data[i] === 0) {
        for (var j = i + i; j <= n; j+= i) {
          if (data[j] === 0) {
            data[j] = 1;
            sum+= j;
          }
        }
      }
    }
    return n * (n + 1) / 2 - sum;
  }
  console.log(solution(2000000));