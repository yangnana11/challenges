function findGreatest() {
    let result = {value:0, largest:0}
    for (let i = 999; i>=100; i--) {
      for (let j = i; j>=100; j--) {
        if (i*j==reverseNum(i*j) && result.largest<i*j) {
          result = {largest:i*j,value:[i,j]};
        }
      }
    }
    return result;
  }
  
  function reverseNum(number) {
    return parseFloat(number.toString().split('').reverse().join(''))
  }
  console.log(findGreatest())