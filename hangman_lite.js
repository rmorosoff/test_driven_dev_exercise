(function(){

function hangMan(word, letter) {
  // Initialize match count to zero
  let matchCount = 0;

  // use a for loop to traverse the word and increment counter when we get a letter match
  for (let i=0; i < word.length; i += 1) {
        if (word[i] === letter) {
            matchCount += 1;
        }
      }
  return matchCount;
  

}

module.exports = hangMan;

})()
