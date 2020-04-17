function BinaryReversal(str) { 
  let bin = (+str).toString(2);
  let result = '';
  for(let i = bin.length-1; i>=0; i--) {
    result+=bin.charAt(i);
  }
  while (result.length%8!=0) {
    result+='0';
  }
  // code goes here  
  return parseInt(result,2); 

}
   
// keep this function call here 
console.log(BinaryReversal(readline()));