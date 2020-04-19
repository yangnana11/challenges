function LetterChanges(str) { 
  let vowel = ['a','e','o','u','i'];
  let result = '';
  for(let i = 0; i<str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >=97 && code < 122) {
      let replace = String.fromCharCode(code+1);
      if (vowel.indexOf(replace)>=0) {
        result += replace.toUpperCase();
      } else {
        result += replace;
      }
    } else if (code == 122) {
      result += 'A';
    } else {
      result += str.charAt(i);
    }
  }
  // code goes here  
  return result; 

}
   
// keep this function call here 
console.log(LetterChanges(readline()));