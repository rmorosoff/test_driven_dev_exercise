(function(){

  function palindrome(word) {

    // convert the string to an array and display it in the console
    let wordArray = word.split("");
    
    // now reverse the array and display it in the console
    let reverseArray = wordArray.reverse();
    
    // now convert the reversed array into a string and display it in the console
    let reverseWord = reverseArray.join("");
    
    // now check if word equals reverseWord.  If true, we have a palindrome
    return (word === reverseWord) 

  }

  module.exports = palindrome;

})()
