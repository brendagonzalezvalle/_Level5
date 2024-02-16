// ### **Extract Unique Characters:**

// Write a function called **`extractUniqueCharacters`** that takes an array of strings and returns a new array containing only the unique characters from all the strings.


let outputArray = [];

function extractUniqueCharacters(strings) {

   const stringOfWords = strings.toString().split("")
   // console.log(stringOfWords)
   // return test
   const uniqueArr = []
   stringOfWords.map(char => {
      if (!uniqueArr.includes(char)){
         uniqueArr.push(char)
      }
   
   })

//    let outputArray = stringOfWords.filter(function (v, i, self) {
 
//       // It returns the index of the first
//       // instance of each value
//       console.log(i,self.indexOf(v))
//       return i == self.indexOf(v);
      
//   });

  return uniqueArr;


  
  
  
}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
// console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']





function mathTable(number){
//  console.log(number)

 for(let i = 1; i <= 10; i++){
   const total = number * i
   console.log(`${number} * ${i} = ${total}`)
 }
}

mathTable(5)

//use a for loop
//console.log a multiplication table  from 1 - 10

// 3 * 1 = 3
// 3 * 2 = 6
// 3 * 3 = 9