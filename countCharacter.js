var counts = {};

function countPosition(sentence) {

  var charString = sentence.replace(/\s/g,"").split("");

  for(i = 0; i < charString.length; i++){
    if ( counts[charString[i]] ) {
       counts[charString[i]].push(i);
    } else {
      counts[charString[i]] = [i];
    }
  }
  return counts;
}


 countPosition("lighthouse in the house");
 console.log(counts);






