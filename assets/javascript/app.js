
  // INITIALIZE VARIABLES
  // 

  var userNumber = 0;
  var targetNumber = 0;

  var totalWins = 0;
  var totalLosses = 0;

  // Insert Game Stats
  $("#user-number").text(userNumber);
  $("#target-number").text(targetNumber);
  $("#wins").text(totalWins);
  $("#losses").text(totalLosses);


  // STARTNEW FUNCTION TO RE-INITIALIZE CRYSTAL VALUES & TARGET NUMBER
  // 

  startNew();

  function startNew() {
  blueCounter = 0;
  brownCounter = 0;
  pinkCounter = 0;
  greenCounter = 0;
  blueValue = Math.floor(Math.random() * 10) + 1;
  brownValue = Math.floor(Math.random() * 10) + 1;
  pinkValue = Math.floor(Math.random() * 10) + 1;
  greenValue = Math.floor(Math.random() * 10) + 1;
  console.log(blueValue);
  console.log(brownValue);
  console.log(pinkValue);
  console.log(greenValue);
  userNumber = 0;
  targetNumber = ((Math.floor(Math.random() * 3) + 1)*blueValue) + ((Math.floor(Math.random() * 3) + 1)*brownValue) + ((Math.floor(Math.random() * 3) + 1)*pinkValue) + ((Math.floor(Math.random() * 3) + 1)*greenValue);
  console.log(targetNumber);

  $("#user-number").text(userNumber);
  $("#target-number").text(targetNumber);
  }





  // CLICK EVENTS (CRYSTALS AND GAME RESET)
  // 

  // On-CLick event for blue button
  $("#blue").on("click", function() {
    // console.log(startNew.blueValue);
    blueCounter += blueValue;
    userNumber = blueCounter + brownCounter + pinkCounter + greenCounter;
    $("#user-number").text(userNumber);
    // Check if User Matched Target Number (ie Win)
    if (userNumber === targetNumber) {
      totalWins += 1;
      $("#wins").text(totalWins);
      alert("You win!");
      startNew();

    // Check if User Overshot Target Number (ie Lose)
    } else if (userNumber > targetNumber) {
      totalLosses += 1;
    $("#losses").text(totalLosses);
      alert("You Lose!");
      startNew();

    }

  });

  // On-CLick event for brown button
  $("#brown").on("click", function() {
    brownCounter += brownValue;
    console.log(brownCounter);
    userNumber = blueCounter + brownCounter + pinkCounter + greenCounter;
    $("#user-number").text(userNumber);
    // Check if User Matched Target Number (ie Win)
    if (userNumber === targetNumber) {
      // If the numbers match we'll celebrate the user's win.
      totalWins += 1;
      $("#wins").text(totalWins);
      alert("You win!");
      startNew();

    // Check if User Overshot Target Number (ie Lose)
    } else if (userNumber > targetNumber) {
      totalLosses += 1;
    $("#losses").text(totalLosses);
      alert("You Lose!");
      startNew();

    }
  });

  // On-CLick event for pink button
  $("#pink").on("click", function() {
    pinkCounter += pinkValue;
    userNumber = blueCounter + brownCounter + pinkCounter + greenCounter;
    $("#user-number").text(userNumber);    
    // Check if User Matched Target Number (ie Win)
    if (userNumber === targetNumber) {
      // If the numbers match we'll celebrate the user's win.
      totalWins += 1;
      $("#wins").text(totalWins);
      alert("You win!");
      startNew();

    // Check if User Overshot Target Number (ie Lose)
    } else if (userNumber > targetNumber) {
      totalLosses += 1;
    $("#losses").text(totalLosses);
      alert("You Lose!");
      startNew();

    }
  });

  // On-CLick event for green button
  $("#green").on("click", function() {
    greenCounter += greenValue;
    userNumber = blueCounter + brownCounter + pinkCounter + greenCounter;
    $("#user-number").text(userNumber);    
    // Check if User Matched Target Number (ie Win)
    if (userNumber === targetNumber) {
      // If the numbers match we'll celebrate the user's win.
      totalWins += 1;
      $("#wins").text(totalWins);
      alert("You win!");
      startNew();

    // Check if User Overshot Target Number (ie Lose)
    } else if (userNumber > targetNumber) {
      totalLosses += 1;
    $("#losses").text(totalLosses);
      alert("You Lose!");
      startNew();

    }
  });


    // On-CLick event for Game Reset
  $("#reset").on("click", function() {

  var totalWins = 0;
  var totalLosses = 0;
  $("#wins").text(totalWins);
  $("#losses").text(totalLosses);
  startNew();
  });
