// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

var isAnagram = function(test, original) {
    if(test.length != original.length){
      return false;
    }
    let alpha = test.toLowerCase().split('');
    let beta = original.toLowerCase().split('');
    while (alpha.length > 0){
      for(let i=0;i<beta.length;i++){
        if (alpha[0]===beta[i]){
          alpha.shift();
          beta.splice(i,1)
        } else if (beta.indexOf(alpha[0]) === -1){
          return false;
        }
      }
    }
    if (alpha.length>0 ||  beta.length>0){
      return false;
    } else {
      return true;
    }
  };