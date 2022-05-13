// Given a number, find the permutation with the smallest absolute value (no leading zeros).

// -20 => -20
// -32 => -23
// 0 => 0
// 10 => 10
// 29394 => 23499
// The input will always be an integer.




function minPermutation(n) {
    let string = `${n}`;
    let array = string.split('');
    let negative = 0;
    if (array[0] === '-') {
      negative++;
      array.shift();
    };
    let nonZeroes = array.filter((a)=>(a !== '0'))
    let zeroes = array.filter((a)=>(a === '0'))
    zeroString = zeroes.join('')
    nonZeroes.sort((a,b)=>(a>b?1:-1));
    nonZeroes.splice(1,0,zeroString)
    if (negative > 0) {
      nonZeroes.unshift('-');
    }
    string = nonZeroes.join('')
    return parseInt(string);
  }