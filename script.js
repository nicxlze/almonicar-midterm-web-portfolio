function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    const icon = document.querySelector(".nav-icon-6");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  document.addEventListener('DOMContentLoaded', function(event) {
    // Array with texts to type in typewriter
    var dataText = ["Computer Science Student", "Aspiring Web Developer"];
  
    // Typewriter function
    function typeWriter(text, i, fnCallback) {
      if (i < text.length) {
        document.querySelector("#typewriter").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback);
        }, 100); // Speed of typing
      } else if (typeof fnCallback === 'function') {
        setTimeout(fnCallback, 700); // Wait before calling the callback
      }
    }
  
    // Function to start the typewriter animation for texts
    function StartTextAnimation(i) {
      if (i < dataText.length) {
        typeWriter(dataText[i], 0, function() {
          StartTextAnimation(i + 1);
        });
      } else {
        // If all texts are done, restart from the first text
        setTimeout(function() {
          StartTextAnimation(0);
        }, 2000); // Delay before restarting the loop (optional)
      }
    }
  
    // Start the animation
    StartTextAnimation(0);
  });
  