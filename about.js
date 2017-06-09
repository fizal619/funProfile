  window.onload = function() {



    var paraObj = document.getElementById('paragraph');

    paraObj.style.visibility = 'hidden';

    var requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozrequestAnimationFrame ||
      window.webkitrequestAnimationFrame ||
      window.msrequestAnimationFrame;

    console.log(paraObj);

    paraObj.addEventListener("load", function(event) {
      event.preventDefault();
      var currentOpacity = 0;


      function fadeIn() {
        var b = setTimeOut(function() {
          requestAnimationFrame(fadeIn());
          currentOpacity += 0.5;
          paraObj.style.opacity = currentOpacity + "px";
          console.log(currentOpacity);
          debugger;
          paraObj.style.visibility = 'visible';


        }, 2000);


      }
      fadeIn();

    });








  }
