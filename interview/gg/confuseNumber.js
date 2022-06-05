/**
 * We can rotate digits by 180 degrees to form new digits. When 0, 1, 6, 8, 9 are rotated 180 degrees, they become 0, 1, 9, 8, 6 respectively. When 2, 3, 4, 5, and 7 are rotated 180 degrees, they become invalid. A confusing number is a number that when rotated 180 degrees becomes a different number with each digit valid.(Note that the rotated number can be greater than the original number.) Given a positive integer N, return the number of confusing numbers between 1 and N inclusive.
*/
let invalid=["2","3","4","5","7"];
function findConfuse(max) {
  let sum=0;
  for (let i=1;i<=max;i++) {
    let num = i.toString().split("");
    if (num.some(n=>invalid.includes(n))==false) {
      // console.log(i);
      sum++;
    }
  }
  return sum;
}
console.log("Total: "+findConfuse(1000000));