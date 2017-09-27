(function(){

  function tallestMountain(mountainHeights) {
    mountainHeights.sort(function(a, b){return b-a});
    return (mountainHeights[0])
  }

  module.exports = tallestMountain;

  })()
