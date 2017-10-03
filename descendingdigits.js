(function(){
    
      function descendingDigits(number) {
        let digits = (""+number).split("");
        digits.sort(function(a, b){return b-a});
        let newNumber = parseInt(digits.join(''));

        return (newNumber)
      }
    
      module.exports = descendingDigits;
    
      })()