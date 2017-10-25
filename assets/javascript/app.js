// INITIALIZE VARIABLES: questions, questions/choices/answersArrays and index
//


var questions = [
  {
    q: "When was the band, Kiss, formed?",
    c: ["1981", "1971", "1978", "1973"],
    a: 3,
  }, {
    q: "Which member of the band had a reality TV show known as Family Jewels?",
    c: ["Peter", "Paul", "Gene", "Ace"],
    a: 2,
  }, {
    q: "Which member is deaf in his right ear?",
    c: ["Peter", "Paul", "Gene", "Ace"],
    a: 1,    
  }, {
    a: "Who has a very hard time remembering the lyrics to his own songs?",
    c: ["Peter", "Paul", "Gene", "Ace"],
    a: 2,
  }, {
    q: "What was Eric Carr's orginal make-up design before the band chose to go with The Fox for his character?",
    c: ["The Hawk", "The Wolf", "The Elk", "The Rabbit"],
    a: 0,
  }, {
    q: "Which of the original members was first to leave the group in 1980?",
    c: ["Peter", "Paul", "Gene", "Ace"],
    a: 0,
  }, {
    q: "What was the name given to Kiss's fan club?",
    c: ["Kiss This!", "Kiss Army", "Kiss Maniacs", "Kiss Club"],
    a: 1,
  }, {
    q: "When Marvel comics printed the first Kiss comic books, featuring the members as super-heroes, what was added as a publicity stunt?",
    c: ["Coupon", "45 Record", "Concert Tickets", "Blood in the Ink"],
    a: 3,
  }, {
    q: "What is the name of Ace Frehley's band when he's not touring with Kiss?",
    c: ["Ace's High", "Frehley's Comet", "Ace in the Hole", "Spiders from Mars"],
    a: 1,
  }, {
    q: "Which of the original 4 members solo albums has done the best?",
    c: ["Peter", "Paul", "Gene", "Ace"],
    a: 2
  }
];

  var index = 4;
  var correctAnswerIndex = questions[index].a;
  console.log("Question: " + questions[index].q);
  console.log("Choice 0: " + questions[index].c[0]);
  console.log("Choice 1: " + questions[index].c[1]);
  console.log("Choice 2: " + questions[index].c[2]);
  console.log("Choice 3: " + questions[index].c[3]);
  console.log("Answer: " + questions[index].c[correctAnswerIndex]);

// startGame();


getQuestion();


// RESETGAME FUNCTION TO RE-INITIALIZE GAME AFTER IT ENDS (RESET BUTTON) (RANDOMIZE QUESTION/ANSWERS, START TIMER)
// 

function resetGame (){
  // Clear the <div>
  $("#question").text("Questions");
  $("#choice0").text(" ");
  $("#choice1").text(" ");
  $("#choice2").text(" ");
  $("#choice3").text(" ");
  $("#score").text("0");
  $("#timer").text("0");
  $("#answer").text("None");

  // Set score to 0; Set index to 0
  var score = 0;
  var index = 0;
}

// RESETGAME FUNCTION TO RE-INITIALIZE GAME AFTER IT ENDS (RESET BUTTON) (RANDOMIZE QUESTION/ANSWERS, START TIMER)
// 

function getQuestion (){

  // Select the next question and place it in the <div>
  $("#question").text(questions[index].q);
  $("#choice0").text(questions[index].c[0]);
  $("#choice1").text(questions[index].c[1]);
  $("#choice2").text(questions[index].c[2]);
  $("#choice3").text(questions[index].c[3]);
  $("#score").text("0");
  $("#timer").text("0");
  $("#answer").text(questions[index].c[correctAnswerIndex]);

  // Reset the timer


  // Set score to 0
  index++;

}

// NEXTQUESTION FUNCTION TO SELECT NEXT QUESTION (SELECT QUESTION/ANSWERS, START TIMER)
//







  // // INITIALIZE VARIABLES
  // // 

  // var userNumber = 0;
  // var targetNumber = 0;

  // var totalWins = 0;
  // var totalLosses = 0;

  // // Insert Game Stats
  // $("#user-number").text(userNumber);
  // $("#target-number").text(targetNumber);
  // $("#wins").text(totalWins);
  // $("#losses").text(totalLosses);


  // // STARTNEW FUNCTION TO RE-INITIALIZE CRYSTAL VALUES & TARGET NUMBER
  // // 

  // startNew();

  // function startNew() {
  // blueCounter = 0;
  // brownCounter = 0;
  // pinkCounter = 0;
  // greenCounter = 0;
  // blueValue = Math.floor(Math.random() * 10) + 1;
  // brownValue = Math.floor(Math.random() * 10) + 1;
  // pinkValue = Math.floor(Math.random() * 10) + 1;
  // greenValue = Math.floor(Math.random() * 10) + 1;
  // console.log(blueValue);
  // console.log(brownValue);
  // console.log(pinkValue);
  // console.log(greenValue);
  // userNumber = 0;
  // targetNumber = ((Math.floor(Math.random() * 3) + 1)*blueValue) + ((Math.floor(Math.random() * 3) + 1)*brownValue) + ((Math.floor(Math.random() * 3) + 1)*pinkValue) + ((Math.floor(Math.random() * 3) + 1)*greenValue);
  // console.log(targetNumber);

  // $("#user-number").text(userNumber);
  // $("#target-number").text(targetNumber);
  // }





  // // CLICK EVENTS (CRYSTALS AND GAME RESET)
  // // 

  // // On-CLick event for blue button
  // $("#blue").on("click", function() {
  //   // console.log(startNew.blueValue);
  //   blueCounter += blueValue;
  //   userNumber = blueCounter + brownCounter + pinkCounter + greenCounter;
  //   $("#user-number").text(userNumber);
  //   // Check if User Matched Target Number (ie Win)
  //   if (userNumber === targetNumber) {
  //     totalWins += 1;
  //     $("#wins").text(totalWins);
  //     alert("You win!");
  //     startNew();

  //   // Check if User Overshot Target Number (ie Lose)
  //   } else if (userNumber > targetNumber) {
  //     totalLosses += 1;
  //   $("#losses").text(totalLosses);
  //     alert("You Lose!");
  //     startNew();

  //   }

  // });

  // // On-CLick event for brown button
  // $("#brown").on("click", function() {
  //   brownCounter += brownValue;
  //   console.log(brownCounter);
  //   userNumber = blueCounter + brownCounter + pinkCounter + greenCounter;
  //   $("#user-number").text(userNumber);
  //   // Check if User Matched Target Number (ie Win)
  //   if (userNumber === targetNumber) {
  //     // If the numbers match we'll celebrate the user's win.
  //     totalWins += 1;
  //     $("#wins").text(totalWins);
  //     alert("You win!");
  //     startNew();

  //   // Check if User Overshot Target Number (ie Lose)
  //   } else if (userNumber > targetNumber) {
  //     totalLosses += 1;
  //   $("#losses").text(totalLosses);
  //     alert("You Lose!");
  //     startNew();

  //   }
  // });

  // // On-CLick event for pink button
  // $("#pink").on("click", function() {
  //   pinkCounter += pinkValue;
  //   userNumber = blueCounter + brownCounter + pinkCounter + greenCounter;
  //   $("#user-number").text(userNumber);    
  //   // Check if User Matched Target Number (ie Win)
  //   if (userNumber === targetNumber) {
  //     // If the numbers match we'll celebrate the user's win.
  //     totalWins += 1;
  //     $("#wins").text(totalWins);
  //     alert("You win!");
  //     startNew();

  //   // Check if User Overshot Target Number (ie Lose)
  //   } else if (userNumber > targetNumber) {
  //     totalLosses += 1;
  //   $("#losses").text(totalLosses);
  //     alert("You Lose!");
  //     startNew();

  //   }
  // });

  // // On-CLick event for green button
  // $("#green").on("click", function() {
  //   greenCounter += greenValue;
  //   userNumber = blueCounter + brownCounter + pinkCounter + greenCounter;
  //   $("#user-number").text(userNumber);    
  //   // Check if User Matched Target Number (ie Win)
  //   if (userNumber === targetNumber) {
  //     // If the numbers match we'll celebrate the user's win.
  //     totalWins += 1;
  //     $("#wins").text(totalWins);
  //     alert("You win!");
  //     startNew();

  //   // Check if User Overshot Target Number (ie Lose)
  //   } else if (userNumber > targetNumber) {
  //     totalLosses += 1;
  //   $("#losses").text(totalLosses);
  //     alert("You Lose!");
  //     startNew();

  //   }
  // });


  //   // On-CLick event for Game Reset
  // $("#reset").on("click", function() {

  // var totalWins = 0;
  // var totalLosses = 0;
  // $("#wins").text(totalWins);
  // $("#losses").text(totalLosses);
  // startNew();
  // });
