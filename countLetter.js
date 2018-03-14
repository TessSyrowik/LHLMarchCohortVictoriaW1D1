
//this function reports how many instances of characters were found
//return an object that represents stats
//only return 1 of each character plus its count




//count will need to be printed along character string

//if letters[i] = i then add to count

// var characterPrintout = {}; anticipating its use as an output part instead of a data structure
var counts = {};

function countLetters(sentence) {

  var charString = sentence.replace(/\s/g,"").split("");

  for(i = 0; i < charString.length; i++){
    // if(charString[i] === 'h'){
    if ( counts[charString[i]] ) { // tests whether a thing exists or not; variable is subobject of element
      // does the counter exist for this letter/[i]?
       counts[charString[i]] = counts[charString[i]] + 1;
    } else {
      counts[charString[i]] = 1;
    }
  // console.log(counts);
  }
}


 countLetters("lighthouse in the house");
 console.log(counts);




// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }