function LongestWord(sen) { 
  let reg = /[A-Za-z0-9]+/gm;
  let arr = sen.match(reg);
  let longest = arr.reduce(function (a, b) { return a.length >= b.length ? a : b; });
  return longest; 

}
   
// keep this function call here 
console.log(LongestWord(readline()));