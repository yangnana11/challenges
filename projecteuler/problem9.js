function findPythagorean(sum) {
    for (let b=sum-1; b>0; b--) {
      for (let a= b-1; a>0; a--) {
        let c = sum - a- b;
        // console.log([a,b,c]);
        if (c*c==a*a+b*b) {
          return [a,b,c];
        }
      }
    }
    return [];
  }
  // console.log(findPythagorean(1000))
  let arr = findPythagorean(1000)
  console.log(arr);
  console.log(arr.reduce((a,b)=>a*b,1))