  window.onload = function(){



    var buttonSlot = document.getElementById('pressButton');
    var spotOne = document.getElementById('place1');
    var spotTwo = document.getElementById('place2');
    var spotThree = document.getElementById('place3');
    var spotFour = document.getElementById('place4');
    var spotFive = document.getElementById('place5');
    var spotSix = document.getElementById('place6');
    var spotSeven = document.getElementById('place7');
    var spotEight = document.getElementById('place8');
    var spotNine = document.getElementById('place9');
    var messegeDisplay = document.getElementById('messege');
    var aboutLinkObj = document.getElementById('aboutLink');
    var homeLinkObj = document.getElementById('homeLink');
    var contactLinkObj = document.getElementById('contactLink');
    var head = document.getElementById('heading');


    messegeDisplay.style.visibility = 'hidden';


    buttonSlot.addEventListener('click', function(event) {

      $('.game').effect('shake', {
        times: 1
      }, 200);

      head.style.color = 'white';

      var numberPlaceOne = Math.round(Math.random());
      var numberPlaceTwo = Math.round(Math.random());
      var numberPlaceThree = Math.round(Math.random());
      var numberPlaceFour = Math.round(Math.random());
      var numberPlaceFive = Math.round(Math.random());
      var numberPlaceSix = Math.round(Math.random());
      var numberPlaceSeven = Math.round(Math.random());
      var numberPlaceEight = Math.round(Math.random());
      var numberPlaceNine = Math.round(Math.random());
      var keepTrackOne;
      var keepTrackTwo;
      var keepTrackThree;
      var keepTrackFour;
      var keepTrackFive;
      var keepTrackSix;
      var keepTrackSeven;
      var keepTrackEight;
      var keepTrackNine;


      messegeDisplay.style.visibility = 'hidden';

      if (numberPlaceOne % 2 == 0) {
        spotOne.style.backgroundColor = 'black';
        spotOne.style.color = 'white';
        spotOne.innerHTML = 'X'

        keepTrackOne = true;
      } else {
        spotOne.style.backgroundColor = 'white';
        spotOne.style.color = 'black';
        spotOne.innerHTML = 'O'
        keepTrackOne = false;
      }

      if (numberPlaceTwo % 2 == 0) {
        spotTwo.style.backgroundColor = 'black'
        spotTwo.style.color = 'white';
        spotTwo.innerHTML = 'X'
        keepTrackTwo = true;
      } else {
        spotTwo.style.backgroundColor = 'white';
        spotTwo.style.color = 'black';
        spotTwo.innerHTML = 'O'
        keepTrackTwo = false;
      }

      if (numberPlaceThree % 2 == 0) {
        spotThree.style.backgroundColor = 'black';
        spotThree.style.color = 'white';
        spotThree.innerHTML = 'X'
        keepTrackThree = true;
      } else {
        spotThree.style.backgroundColor = 'white';
        spotThree.style.color = 'black';
        spotThree.innerHTML = 'O'
        keepTrackThree = false;
      }
      if (numberPlaceFour % 2 == 0) {
        spotFour.style.backgroundColor = 'black';
        spotFour.style.color = 'white';
        spotFour.innerHTML = 'X'
        keepTrackFour = true;
      } else {
        spotFour.style.backgroundColor = 'white';
        spotFour.style.color = 'black';
        spotFour.innerHTML = 'O'
        keepTrackFour = false;
      }
      if (numberPlaceFive % 2 == 0) {
        spotFive.style.backgroundColor = 'black';
        spotFive.style.color = 'white';
        spotFive.innerHTML = 'X'
        keepTrackFive = true;
      } else {
        spotFive.style.backgroundColor = 'white';
        spotFive.style.color = 'black';
        spotFive.innerHTML = 'O'
        keepTrackFive = false;
      }
      if (numberPlaceSix % 2 == 0) {
        spotSix.style.backgroundColor = 'black';
        spotSix.style.color = 'white';
        spotSix.innerHTML = 'X'
        keepTrackSix = true;
      } else {
        spotSix.style.backgroundColor = 'white';
        spotSix.style.color = 'black';
        spotSix.innerHTML = 'O'
        keepTrackSix = false;
      }
      if (numberPlaceSeven % 2 == 0) {
        spotSeven.style.backgroundColor = 'black';
        spotSeven.style.color = 'white';
        spotSeven.innerHTML = 'X'
        keepTrackSeven = true;
      } else {
        spotSeven.style.backgroundColor = 'white';
        spotSeven.style.color = 'black';
        spotSeven.innerHTML = 'O'
        keepTrackSeven = false;
      }
      if (numberPlaceEight % 2 == 0) {
        spotEight.style.backgroundColor = 'black';
        spotEight.style.color = 'white';
        spotEight.innerHTML = 'X'
        keepTrackEight = true;
      } else {
        spotEight.style.backgroundColor = 'white';
        spotEight.style.color = 'black';
        spotEight.innerHTML = 'O'
        keepTrackEight = false;
      }
      if (numberPlaceNine % 2 == 0) {
        spotNine.style.backgroundColor = 'black';
        spotNine.style.color = 'white';
        spotNine.innerHTML = 'X'
        keepTrackNine = true;
      } else {
        spotNine.style.backgroundColor = 'white';
        spotNine.style.color = 'black';
        spotNine.innerHTML = 'O'
        keepTrackNine = false;
      }



      if (keepTrackOne == true && keepTrackTwo == true && keepTrackThree == true ||
        keepTrackOne == false && keepTrackTwo == false && keepTrackThree == false) {
        messegeDisplay.style.visibility = 'visible';
        messegeDisplay.style.backgroundColor = 'black';
        messegDisplay.style.color = 'white';
        head.style.color = 'black';
      }

      if (keepTrackFour == true && keepTrackFive == true && keepTrackSix == true ||
        keepTrackFour == false && keepTrackFive == false && keepTrackSix == false) {
        messegeDisplay.style.visibility = 'visible';
        messegeDisplay.style.backgroundColor = 'black';
        messegDisplay.style.color = 'white';
        head.style.color = 'black';
      }
      if (keepTrackSeven == true && keepTrackEight == true && keepTrackNine == true ||
        keepTrackSeven == false && keepTrackEight == false && keepTrackNine == false) {
        messegeDisplay.style.visibility = 'visible';
        messegeDisplay.style.backgroundColor = 'black';
        messegDisplay.style.color = 'white';
        head.style.color = 'black';
      }




    })

    aboutLinkObj.addEventListener('hover', function(event) {
      event.preventDefault();




    });

/*==============================================
================== about.html
================================================*/
paraObj.style.visibility = 'hidden';
var paraObj = document.getElementById('paragraph');

var requestAnimationFrame =
 window.requestAnimationFrame ||
 window.mozrequestAnimationFrame ||
 window.webkitrequestAnimationFrame ||
 window.msrequestAnimationFrame;

 console.log(paraObj);

    paraObj.addEventListener("load", function(event) {
      event.preventDefault();
      var currentOpacity = 0;



    var fadeObj = function fadeIn() {
      var b = setTimeOut(function(){
        requestAnimationFrame(fadeIn());
          currentOpacity += 0.1;
       paraObj.style.opacity = currentOpacity;
       console.log(currentOpacity);
       debugger;
       paraObj.style.visibility = 'visible';


     }, 2000);
      clearTimout(fadeIn());

      }
      fadeIn();

    });



  };
