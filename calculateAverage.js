// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    let sum = 0;
    if (array.length){
      array.forEach(x=>sum+=x);
      return sum/array.length;
    }
    return sum;
  }