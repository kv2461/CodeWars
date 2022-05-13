// Your objective is to add formatting to a plain number to display it as price.

// The function should return a string like this:

// var price = numberToPrice(13253.5123);
// console.log(price); // 13,253.51
// Numbers should use the standard comma for every 3 numbers and dot to separate the cents, 
// cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or 
// none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

// function should return a string 'NaN' if the input is not a valid number


var numberToPrice = function(number) {
    if (typeof number !== "number"){
      return 'NaN';
    }
    let array = `${number}`.split('.')
    
    let negative = false;
    
    if (array[0][0] === '-') {
      array[0] = array[0].slice(1);
      negative = true;
    }
    
    function parseNum(num) {
      let array = num.split('');
        for (let i = array.length; i > -1; i--) {
            let counter = array.length - i - 1;
            if (counter % 3 === 0 && counter !== 0) {
                array[i] = `${array[i]},`;
            }
        }
      return array.join('');
      }
    
    function truncateCents(num) {
      let truncated = num.slice(0,2);
      return truncated;
    }
    
    if (array.length>1) {
      if (array[1].length<2) {
        array[1] = array[1]+'0';
      }
        array[1] = truncateCents(array[1]);
      } else {
      array.push('00')
      }
      
    array[0] = parseNum(array[0]);
    if (negative === true) {
      return `-${array.join('.')}`
    }
    return array.join('.')
  }