// Story
// A freak power outage at the zoo has caused all of the electric cage doors to malfunction and swing open...

// All the animals are out and some of them are eating each other!

// It's a Zoo Disaster!
// Here is a list of zoo animals, and what they can eat

// antelope eats grass
// big-fish eats little-fish
// bug eats leaves
// bear eats big-fish
// bear eats bug
// bear eats chicken
// bear eats cow
// bear eats leaves
// bear eats sheep
// chicken eats bug
// cow eats grass
// fox eats chicken
// fox eats sheep
// giraffe eats leaves
// lion eats antelope
// lion eats cow
// panda eats leaves
// sheep eats grass
// Kata Task
// INPUT
// A comma-separated string representing all the things at the zoo

// TASK
// Figure out who eats whom until no more eating is possible.

// OUTPUT
// A list of strings (refer to the example below) where:

// The first element is the initial zoo (same as INPUT)
// The last element is a comma-separated string of what the zoo looks like when all the eating has finished
// All other elements (2nd to last-1) are of the form X eats Y describing what happened
// Notes
// Animals can only eat things beside them

// Animals always eat to their LEFT before eating to their RIGHT

// Always the LEFTMOST animal capable of eating will eat before any others

// Any other things you may find at the zoo (which are not listed above) do not eat anything and are not edible

// Example
// Input

// "fox,bug,chicken,grass,sheep"

// Working

// 1	fox can't eat bug	
// "fox,bug,chicken,grass,sheep"
// 2	bug can't eat anything	
// "fox,bug,chicken,grass,sheep"
// 3	chicken eats bug	
// "fox,chicken,grass,sheep"
// 4	fox eats chicken	
// "fox,grass,sheep"
// 5	fox can't eat grass	
// "fox,grass,sheep"
// 6	grass can't eat anything	
// "fox,grass,sheep"
// 7	sheep eats grass	
// "fox,sheep"
// 8	fox eats sheep	
// "fox"
// Output

// ["fox,bug,chicken,grass,sheep", "chicken eats bug", "fox eats chicken", "sheep eats grass", "fox eats sheep", "fox"]



var whoEatsWho = function(zoo) {
    let feastEvents = [zoo];
    let currentZoo = zoo.split(',');
    
    function eatLeft(animals,predator,prey,i) {
      feastEvents.push(`${predator} eats ${prey}`);
      animals.splice(i-1,1);
      return timeToEat(animals);
    }
    function eatRight(animals,predator,prey,i) {
      feastEvents.push(`${predator} eats ${prey}`);
      animals.splice(i+1,1);
      return timeToEat(animals);
    }
    
    function timeToEat (animals) {
      for (let i=0;i<animals.length;i++) {
        switch (animals[i]) {
            case "antelope":
              if (animals[i-1] === 'grass') {
                return eatLeft(animals,animals[i],animals[i-1],i);
              } else if (animals[i+1] === 'grass') {
                return eatRight(animals,animals[i],animals[i+1],i);
              };
              break;
            
            case "big-fish":
              if (animals[i-1] === 'little-fish') {
                return eatLeft(animals,animals[i],animals[i-1],i);
              } else if (animals[i+1] === 'little-fish') {
                return eatRight(animals,animals[i],animals[i+1],i);
              };
              break;
            
            case "bug":
              if (animals[i-1] === 'leaves') {
                return eatLeft(animals,animals[i],animals[i-1],i);
              } else if (animals[i+1] === 'leaves') {
                return eatRight(animals,animals[i],animals[i+1],i);
              };
              break;
            
            case "bear":
              if (animals[i-1] === 'big-fish' || animals[i-1] === 'bug' || animals[i-1] === 'chicken' || animals[i-1] === 'cow' || animals[i-1] === 'leaves' || animals[i-1] === 'sheep') {
                return eatLeft(animals,animals[i],animals[i-1],i);
              } else if (animals[i+1] === 'big-fish' || animals[i+1] === 'bug' || animals[i+1] === 'chicken' || animals[i+1] === 'cow' || animals[i+1] === 'leaves' || animals[i+1] === 'sheep') {
                return eatRight(animals,animals[i],animals[i+1],i);
              }
              break;
            
            case "chicken":
              if (animals[i-1] === 'bug') {
                return eatLeft(animals,animals[i],animals[i-1],i);
              } else if (animals[i+1] === 'bug') {
                return eatRight(animals,animals[i],animals[i+1],i);
              }
              break;
            
            case "cow":
              if (animals[i-1] === 'grass') {
                return eatLeft(animals,animals[i],animals[i-1],i);
              } else if (animals[i+1] === 'grass') {
                return eatRight(animals,animals[i],animals[i+1],i);
              }
              break;
            
            case "fox":
              if (animals[i-1] === 'chicken' || animals[i-1] === 'sheep') {
                return eatLeft(animals,animals[i],animals[i-1],i);
              } else if (animals[i+1] === 'chicken' || animals[i+1] === 'sheep') {
                return eatRight(animals,animals[i],animals[i+1],i);
              }
              break;
            
            case "giraffe":
              if (animals[i-1] === 'leaves') {
                return eatLeft(animals,animals[i],animals[i-1],i);
              } else if (animals[i+1] === 'leaves') {
                return eatRight(animals,animals[i],animals[i+1],i);
              }
              break;
            
            case "lion":
              if (animals[i-1] === 'antelope' || animals[i-1] === 'cow') {
                return eatLeft(animals,animals[i],animals[i-1],i);
              } else if (animals[i+1] === 'antelope' || animals[i+1] === 'cow') {
                return eatRight(animals,animals[i],animals[i+1],i);
              }
              break;
            
            case "panda":
              if (animals[i-1] === 'leaves') {
                return eatLeft(animals,animals[i],animals[i-1],i);
              } else if (animals[i+1] === 'leaves') {
                return eatRight(animals,animals[i],animals[i+1],i);
              }
              break;
            
            case "sheep":
              if (animals[i-1] === 'grass') {
                return eatLeft(animals,animals[i],animals[i-1],i);
              } else if (animals[i+1] === 'grass') {
                return eatRight(animals,animals[i],animals[i+1],i);
              }
              break;
        }
      }
      return animals;
    }
    currentZoo = timeToEat(currentZoo);
    feastEvents.push(currentZoo.join(','));
    return feastEvents;
  }