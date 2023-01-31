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
        document.getElementById("displayName").innerHTML = "Hello, " + fullName;
      }
    }
  }

  function validateBadgeNumber() {
    var badgeNumber = document.getElementById("badgeNumber").value;
    while (isNaN(badgeNumber) || badgeNumber.length > 3 || badgeNumber <= 0) {
      alert("Invalid badge number. Please enter a number with 3 or fewer digits.");
      badgeNumber = prompt("Enter your badge number:");
    }
    document.getElementById("displayBadgeNumber").innerHTML = "Access Granted!" ;
  }