(function(){
    
      function containsVowel(word) {
        if (word.match(/[aeiouAEIOU]/)) {
            return true
        } else {
            return false
        }
      }
    
      module.exports = containsVowel;
    
      })()