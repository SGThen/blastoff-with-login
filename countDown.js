// Set the starting time set to 11 becuase the time being shown needs to start at 10. 
// 11 will start counting from 11 and display 10.
var timeLeft = 11;

// Display the starting time
document.getElementById("timer").innerHTML = timeLeft;

// Create a variable to store the setInterval function
var intervalId;

// Function to start the countdown when button is clicked
function startTimer() {
    // Start the timer
    intervalId = setInterval(countdown, 1000);

    // Stop the timer after 10 seconds
    setTimeout(function(){
        clearInterval(intervalId);
        document.getElementById("timer").innerHTML = "Blast off!";
    }, 11000);
    
}

// Countdown function
function countdown() {
    timeLeft--;
    document.getElementById("timer").innerHTML = timeLeft;
    if(timeLeft <= 0){
      clearInterval(intervalId);
      //added the warning for the halfway point. added the seconds remaining as my little flair and ocd of not having the units of measure. 
      }
    
    if(timeLeft <= 5){
        document.getElementById("timer").innerHTML = "Warning, Less than halfway to launch, time left = " + timeLeft + " seconds remaining"  ; 
        
    }

       
}

//this is the name login function.

function showName() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    if (!firstName || !lastName) {
      alert("Please enter both your first and last name.");
    } else {
      var fullName = firstName + " " + lastName;
      if (fullName.length > 20) {
        alert("The full name cannot be longer than 20 characters.");
      } else {
        document.getElementById("displayName").innerHTML = "Thank you " + fullName;
      }
    }
  }

  //badge number validation for 3 number and no more. added an alert and was able to submit badge number on the alert or prompt
  function validateBadgeNumber() {
    var badgeNumber = document.getElementById("badgeNumber").value;
    while (isNaN(badgeNumber) || badgeNumber.length != 3) {
      alert("Invalid badge number");
      badgeNumber = prompt("Enter your badge number:");
    }
    document.getElementById("displayBadgeNumber").innerHTML =  "Access Granted For Badge Number: " + badgeNumber ;
  }

//these are for the start and stop buttons. need to find a way to see if they are working.

var audio = document.getElementById("myAudio");
      
document.getElementById("playBtn").addEventListener("click", function() {
  audio.play();
});

document.getElementById("pauseBtn").addEventListener("click", function() {
  audio.pause();
});



