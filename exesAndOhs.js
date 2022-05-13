// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. 
// The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
    let xs = [];
    let os = [];
    let array = str.split('');
    for (let i = 0; i < array.length; i++){
      if (array[i].toLowerCase() === 'x') {
        xs.push(array[i]);
      } else if (array[i].toLowerCase() === 'o') {
        os.push(array[i]);
      }
    }
    
    if (xs.length === os.length) {
      return true
    } else {
      return false;
    }
  }