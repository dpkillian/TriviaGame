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
    q: "Who has a very hard time remembering the lyrics to his own songs?",
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
    c: ["A Coupon", "A 45 Record", "Concert Tickets", "Blood in the Ink"],
    a: 3,
  }, {
    q: "What is the name of Ace Frehley's band when he's not touring with Kiss?",
    c: ["Ace's High", "Frehley's Comet", "Ace in the Hole", "Spiders from Mars"],
    a: 1,
  }, {
    q: "Which of the original 4 members solo albums has done the best?",
    c: ["Peter", "Paul", "Gene", "Ace"],
    a: 3,
  }, {
    q: "Done",
    c: ["One", "Two", "Three", "Four"],
    a: 0    
  }
];


  var score = 0;
  var index = 0;
  var correctAnswerIndex = questions[index].a;
  var clockRunning = false;
  var intervalId;


// RESET GAME ON PAGE LOAD
resetGame();

// This code will run as soon as the page loads
window.onload = function() {
  $("#start").on("click", beginFirstQuestion);
  $("#next").on("click", getQuestion);
  $("#choice0").on("click", evalAnswer0);
  $("#choice1").on("click", evalAnswer1);
  $("#choice2").on("click", evalAnswer2);
  $("#choice3").on("click", evalAnswer3);



};

// RESETGAME FUNCTION TO RE-INITIALIZE GAME ON PAGE LOAD
// 

function resetGame (){
  // Clear the <div>
  $("#question").text("Questions");
  $("#choice0").text(" - ");
  $("#choice1").text(" - ");
  $("#choice2").text(" - ");
  $("#choice3").text(" - ");
  $("#score").text("0");
  $("#timer").text("0");
  $("#answer").text(" - ");

  // Set score to 0; Set index to 0
  var score = 0;
  var index = 0;
};



// BEGINFIRSTQUESTION FUNCTION TO CHANGE START BUTTON AND GET FIRST QUESTION
// 

function beginFirstQuestion (){

  // Set score to 0; Set index to 0
  score = 0;
  index = 0;
  correctAnswerIndex = questions[index].a;

  // getQuestion();
  $("#score").text(score);
  $("#question").text(questions[index].q);
  $("#choice0").text(questions[index].c[0]);
  $("#choice1").text(questions[index].c[1]);
  $("#choice2").text(questions[index].c[2]);
  $("#choice3").text(questions[index].c[3]);
  $("#answer").text(" - ");

  // CONSOLE LOG QUESTION, CHOICES AND ANSWER
  console.log("Question: " + questions[index].q);
  console.log("Choice 0: " + questions[index].c[0]);
  console.log("Choice 1: " + questions[index].c[1]);
  console.log("Choice 2: " + questions[index].c[2]);
  console.log("Choice 3: " + questions[index].c[3]);
  console.log("Answer: " + questions[index].c[correctAnswerIndex]);
  console.log(index);
  console.log("----------------");

  // Reset the timer
  clock.reset();

  // Start the timer
  clock.start();


};

// GETQUESTION FUNCTION TO GET QUESTION/ANSWERS AND START TIMER
// 

function getQuestion (){

  // CONSOLE LOG QUESTION, CHOICES AND ANSWER
  console.log("Question: " + questions[index].q);
  console.log("Choice 0: " + questions[index].c[0]);
  console.log("Choice 1: " + questions[index].c[1]);
  console.log("Choice 2: " + questions[index].c[2]);
  console.log("Choice 3: " + questions[index].c[3]);
  console.log("Answer: " + questions[index].c[correctAnswerIndex]);
  console.log(index);
  console.log("----------------");




  // Check to see if we are at the end of the questions array
  if (index <= 9){
  // Select the next question and place it in the <div>
  $("#question").text(questions[index].q);
  $("#choice0").text(questions[index].c[0]);
  $("#choice1").text(questions[index].c[1]);
  $("#choice2").text(questions[index].c[2]);
  $("#choice3").text(questions[index].c[3]);
  $("#answer").text(" - ");


  // Reset the timer
  clock.reset();

  // Start the timer
  clock.start();


  // Increment index for the next question
  } else {
    // stopGame()
    console.log("GAME OVER");
    $("#answer").text("Game Over!  Your score was: " + ((100)*(score/100))+ "%");
    $("#question").text("Questions");
    $("#choice0").text(" - ");
    $("#choice1").text(" - ");
    $("#choice2").text(" - ");
    $("#choice3").text(" - ");
  }

};

// EVALANSWER FUNCTIONS CHECKS ANSWER
// 

function evalAnswer0 (){

  console.log("Answer: " + questions[index].c[correctAnswerIndex]);
  console.log(index);
  console.log("----------------");

  if (questions[index].c[0] === questions[index].c[correctAnswerIndex]){
    console.log("CORRECT");
    $("#answer").text("Correct!!  The answer was: " + questions[index].c[correctAnswerIndex]);
    score = score + 10;
    $("#score").text(score);
  } else {
    console.log ("INCORRECT");
    $("#answer").text("Sorry, wrong answer!!  The answer was: " + questions[index].c[correctAnswerIndex]);
  }

  // document.getElementById("kiss-image").innerHTML ='<img class="img-responsive center-block" src="../images/image' + index + '.jpg">';
  // $("#kiss-image").html("<img src=../images/image'" + index + "'.jpg/>");

  clock.stop();
  index++;
  correctAnswerIndex = questions[index].a;

}

function evalAnswer1 (){

  console.log("Answer: " + questions[index].c[correctAnswerIndex]);
  console.log(index);
  console.log("----------------");

  if (questions[index].c[1] === questions[index].c[correctAnswerIndex]){
    console.log("CORRECT");
    $("#answer").text("Correct!!  The answer was: " + questions[index].c[correctAnswerIndex]);
    score = score + 10;
    $("#score").text(score);
  } else {
    console.log ("INCORRECT");
    $("#answer").text("Sorry, wrong answer!!  The answer was: " + questions[index].c[correctAnswerIndex]);

  }

  clock.stop();
  index++;
  correctAnswerIndex = questions[index].a;

}

function evalAnswer2 (){

  console.log("Answer: " + questions[index].c[correctAnswerIndex]);
  console.log(index);
  console.log("----------------");

  if (questions[index].c[2] === questions[index].c[correctAnswerIndex]){
    console.log("CORRECT");
    $("#answer").text("Correct!!  The answer was: " + questions[index].c[correctAnswerIndex]);
    score = score + 10;
    $("#score").text(score);
  } else {
    console.log ("INCORRECT");
    $("#answer").text("Sorry, wrong answer!!  The answer was: " + questions[index].c[correctAnswerIndex]);
  }

  clock.stop();
  index++;
  correctAnswerIndex = questions[index].a;

}

function evalAnswer3 (){

  console.log("Answer: " + questions[index].c[correctAnswerIndex]);
  console.log(index);
  console.log("----------------");

  if (questions[index].c[3] === questions[index].c[correctAnswerIndex]){
    console.log("CORRECT");
    $("#answer").text("Correct!!  The answer was: " + questions[index].c[correctAnswerIndex]);
    score = score + 10;
    $("#score").text(score);

  } else {
    console.log ("INCORRECT");
    $("#answer").text("Sorry, wrong answer!!  The answer was: " + questions[index].c[correctAnswerIndex]);
 }

  clock.stop();
  index++;
  correctAnswerIndex = questions[index].a;

}

function timesUp (){
  $("#answer").text("Sorry, times up!!  The answer was: "+ questions[index].c[correctAnswerIndex]);

  clock.stop();
  index++;
  correctAnswerIndex = questions[index].a;

}

var clock = {
  time: 10,

  reset: function(){
    clock.time = 10;
    $("#timer").text("10");
  },

  start: function() {
    // Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(clock.count, 1000);
        clockRunning = true;
    }
  },  

  stop: function() {
    // Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
    },

  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    clock.time--;

    if (clock.time >= 0){

    // Write clock.time to the <div>
    $("#timer").text(clock.time);
    } 

    // If clock.time === 0, then stop the clock
      else {
      timesUp();
      clock.stop;
    }
  },

};


