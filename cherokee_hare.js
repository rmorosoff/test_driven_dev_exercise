(function(){

  
  function cherokeeHare(startingPopulation, birthRate, numberOfWeeks) {
  // use currentPopulation to keep track of the population as it grows
  let currentPopulation = startingPopulation;

  // use a for loop to simulate each week and calculate the population growth inside the loop
  for (let i=0; i < numberOfWeeks; i += 1) {
    currentPopulation = currentPopulation + currentPopulation*birthRate;
  }

  // be nice and round the the final population to a whole number
  currentPopulation = Math.round(currentPopulation);
  return currentPopulation;

}

module.exports = cherokeeHare;

})()
