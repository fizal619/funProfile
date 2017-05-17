window.onload = function() {

  var buttonSlot = document.getElementById('pressButton');
  var spotOne = document.getElementById('place1');
  var spotTwo = document.getElementById('place2');
  var spotThree = document.getElementById('place3');

  buttonSlot.addEventListener('click', function(event) {

  var numberPlaceOne = Math.random();
  var numberPlaceTwo = Math.random();
  var numberPlaceThree = Math.random();

console.log(numberPlaceThree);
console.log(numberPlaceTwo);
console.log(numberPlaceOne);

    /*spotOne.innerHTML = Math.random();
    spotTwo.innerHTML = Math.random();
    spotThree.innerHTML = Math.random();*/

      if(numberPlaceOne % 2 == 0){
        spotOne.innerHTML = 'X'
      }else{spotOne.innerHTML = 'O' }

      if(numberPlaceTwo % 2 == 0){
        spotTwo.innerHTML = 'X'
      }else{spotTwo.innerHTML = 'O' }

      if(numberPlaceThree % 2 == 0){
        spotThree.innerHTML = 'X'
      }else{spotThree.innerHTML = 'O' }


  })
}
