function printpairs(arr, sum)
{
  let s = new Set();
  for (let i = 0; i < arr.length; ++i)
  {
      let temp = sum - arr[i];

      // checking for condition
      if (s.has(temp)) {
        console.log(
          "Pair with given sum "
          + sum + " is (" + arr[i]
          + ", " + temp + ")");
        break;
      }
      s.add(arr[i]);
  }
  console.log(s)
}
 
let A = [ 1,5,3,2,9];
let n = 8;
printpairs(A,n)