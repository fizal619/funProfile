window.onload = function() {

  var buttonSlot = document.getElementById('pressButton');
  var spotOne = document.getElementById('place1');
  var spotTwo = document.getElementById('place2');
  var spotThree = document.getElementById('place3');
  var messegeDisplay = document.getElementById('messege');

  messegeDisplay.style.visibility = 'hidden';


  buttonSlot.addEventListener('click', function(event) {

    var numberPlaceOne = Math.round(Math.random());
    var numberPlaceTwo = Math.round(Math.random());
    var numberPlaceThree = Math.round(Math.random());
    var keepTrackOne;
    var keepTrackTwo;
    var keepTrackThree;

    messegeDisplay.style.visibility = 'hidden';

    if (numberPlaceOne % 2 == 0) {
      spotOne.innerHTML = 'X'
      keepTrackOne = true;
    } else {
      spotOne.innerHTML = 'O'
      keepTrackOne = false;
    }

    if (numberPlaceTwo % 2 == 0) {
      spotTwo.innerHTML = 'X'
      keepTrackTwo = true;
    } else {
      spotTwo.innerHTML = 'O'
      keepTrackTwo = false;
    }

    if (numberPlaceThree % 2 == 0) {
      spotThree.innerHTML = 'X'
      keepTrackThree = true;
      console.log(keepTrackThree);
    } else {
      spotThree.innerHTML = 'O'
      keepTrackThree = false;
      console.log(keepTrackThree);
    }

    if (keepTrackOne == true && keepTrackTwo == true && keepTrackThree == true ||
      keepTrackOne == false && keepTrackTwo == false && keepTrackThree == false) {
      messegeDisplay.style.visibility = 'visible';
    }
    /* logical error fixedif (keepTrackOne && keepTrackTwo && keepTrackThree == true ||
      keepTrackOne && keepTrackTwo && keepTrackThree == false) {
      messegeDisplay.style.visibility = 'visible';
    }*/
    /*if (keepTrackOne && keepTrackTwo && keepTrackThree == false) {
      messegeDisplay.style.visibility = 'visible';
    }*/
  })
}
