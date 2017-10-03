(function(){
    
      function longX(xstring) {

        let tempLength = 0;
        let maxLength = 0;

        for (let i = 0; i < xstring.length; i++ ) {
            if (xstring[i] === "x") {
                tempLength++
            } else {
                if (tempLength > maxLength) {
                    maxLength = tempLength
                }
                tempLength = 0
            }


        }

        return (maxLength)

    }
    
      module.exports = longX;
    
})()