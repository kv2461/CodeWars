// Consider a deck of 52 cards, which are represented by a string containing their suit and face value.

// Your task is to write two functions encode and decode that translate an array of cards to/from an array of integer codes.

// function encode :

// input : array of strings (symbols)

// output : array of integers (codes) sorted in ascending order

// function decode :

// input : array of integers (codes)

// output : array of strings (symbols) sorted by code values

// ['Ac', 'Ks', '5h', 'Td', '3c'] -> [0, 2 ,22, 30, 51] //encoding
// [0, 51, 30, 22, 2] -> ['Ac', '3c', 'Td', '5h', 'Ks'] //decoding
// The returned array must be sorted from lowest to highest priority (value or precedence order, see below).

// Card suits:
// name    |  symbol   |  precedence
// ---------------------------------
// club          c            0
// diamond       d            1
// heart         h            2
// spade         s            3
// 52-card deck:
//   c     |     d     |    h     |    s
// ----------------------------------------
//  0: A      13: A      26: A      39: A
//  1: 2      14: 2      27: 2      40: 2
//  2: 3      15: 3      28: 3      41: 3
//  3: 4      16: 4      29: 4      42: 4
//  4: 5      17: 5      30: 5      43: 5
//  5: 6      18: 6      31: 6      44: 6
//  6: 7      19: 7      32: 7      45: 7
//  7: 8      20: 8      33: 8      46: 8
//  8: 9      21: 9      34: 9      47: 9
//  9: T      22: T      35: T      48: T
// 10: J      23: J      36: J      49: J
// 11: Q      24: Q      37: Q      50: Q
// 12: K      25: K      38: K      51: K



function encode (input) {
  
    let cards = [];
    
    for (let i = 0; i<input.length; i++) {
      
      let value = 0;
      
      switch (input[i][0]) {
          case 'A':
            value += 0;
            break;
          case 'T':
            value += 9;
            break;
          case 'J':
            value += 10;
            break;
          case 'Q':
            value += 11;
            break;
          case 'K':
            value += 12;
            break;
          default:
            value += parseInt(input[i][0]) - 1;
      }
      
      switch (input[i][1]) {
          case 'c':
            break;
          case 'd':
            value += 13;
            break;
          case 'h':
            value += 26;
            break;
          case 's':
            value += 39;
            break;
      }
      
      cards.push(value);
    }
    
    return cards.sort((a,b)=>a>b?1:-1);
  }
  
  ///////////////////////////////////////////
  
  
  function decode (input) {
    input.sort((a, b) => a > b ? 1 : -1);
    let cards = [];
    
    for (let i = 0; i < input.length; i++) {
      let cardVal = []
      let value = input[i];
      let counter = 0;
      while (value >= 13) {
        counter++;
        value -= 13;
      }
      
      switch(counter) {
          case 0:
            cardVal.push('c');
            break;
          case 1:
            cardVal.push('d');
            break;
          case 2:
            cardVal.push('h');
            break;
          case 3:
            cardVal.push('s');
            break;
      }
      
      switch(value) {
          case 0:
            cardVal.unshift('A');
            break;
          case 9:
            cardVal.unshift('T');
            break;
          case 10:
            cardVal.unshift('J');
            break;
          case 11:
            cardVal.unshift('Q');
            break;
          case 12:
            cardVal.unshift('K');
            break;
          default:
            cardVal.unshift(`${parseInt(value) + 1}`);
      }
      
      cards.push(cardVal.join(''));
    }
    
    return cards;
  }