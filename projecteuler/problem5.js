function findList(max) {
    let d=[1];
    for (let i = 1; i<=max; i++) {
      let num = i;
      let j=d.length-1;
      while (num!=1 && j>=0) {
        if (num%d[j]==0) {
          num = num/d[j];
        }
        j--;
      }
      if (num>1) {
        d.push(num);
      }
    }
    return d;
  }
  function maxNum(list) {
    return list.reduce((a,b)=>a*b,1);
  }
  console.log(maxNum(findList(20)));