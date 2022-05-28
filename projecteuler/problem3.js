function largestPrimeFactor(number) {

    if(number%2===0){
      return 2;
    }
  
    var prime = [];
    var i = 3;
  
    while(number != 1){
      if(number % i == 0){
        number /= i;
        prime.push(i);
      }else{
        i+=2;
      }
    }
    return prime[prime.length-1];
  }
  
  let result = largestPrimeFactor(600851475143)
  console.log(result);