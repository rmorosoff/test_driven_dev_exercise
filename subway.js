(function(){
    
      function subway(peeps, rent) {

        // return 99 as error if length of arrays do not match
        if (peeps.length != rent.length) {
            return 99
        }

        let topProfit = 0;
        let bestLocation = 0;

        for (let i = 0; i < peeps.length; i++ ) {
            let profit = peeps[i]*10 - rent[i];
            if (profit > topProfit) {
                topProfit = profit;
                bestLocation = i;
            }


        }

        return (bestLocation)

    }
    
      module.exports = subway;
    
})()