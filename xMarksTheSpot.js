// #'x' marks the spot

// ##Task:

// Given a two dimensional array, return the co-ordinates of 'x'.

// If 'x' is not inside the array, or if 'x' appears multiple times, return []

// The co-ordinates should be zero indexed.

// You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

// Example test cases:

// 'Return an empty array if input is an empty array' => []

// [] 

// 'Return an empty array if no x found' => []

// [
//   ['o', 'o'],
//   ['o', 'o']
// ]

// 'Return an empty array if more than one x found' => []

// [
//   ['x', 'o'],
//   ['o', 'x']
// ]

// 'Return [0,0] when x at top left' => [0, 0]

// [
//   ['x', 'o'],
//   ['o', 'o']
// ]

// 'Return [4,6] for the example below' => [4, 6]

// [
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
// ]


const xMarksTheSpot = (input) => {
    let answer = [];
    let array = [...input];
    if (array.length===0) {
      return [];
    }
    for (let i=0;i<array.length;i++) {
      for (let j=0;j<array[i].length;j++) {
        if (array[i][j] === 'x') {
          answer.push(i);
          answer.push(j);
        }
      }
    }
    if (answer.length !== 2) {
      return []
    } else {
      return answer;
    }
  }