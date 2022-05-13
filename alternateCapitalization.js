// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. 
// Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

function capitalize(s){
    let capArr = [];
    let even = [s.charAt(0).toUpperCase()];
    let odd = [s.charAt(0)];
    for(let i=1;i<s.length;i++){
      if(i%2===0){
        even.push(s.charAt(i).toUpperCase());
        odd.push(s.charAt(i));
      } else {
        even.push(s.charAt(i));
        odd.push(s.charAt(i).toUpperCase());
      }
    }
    capArr.push(even.join(''));
    capArr.push(odd.join(''));
    return capArr;
  };