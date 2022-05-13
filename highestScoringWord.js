// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    let highest = "";
    let highestScore = 0;
    let currentScore = 0;
    let wordsArray = x.split(' ');
    for (let i = 0; i<wordsArray.length;i++){
      let word = wordsArray[i].split('');
      currentScore = word.reduce((total,letter)=>total+(letter.charCodeAt()-96),0);
      if (currentScore>highestScore){
        highestScore = currentScore;
        highest = wordsArray[i];
      }
    }
    return highest;
  }