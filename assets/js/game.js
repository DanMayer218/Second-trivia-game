// The questions
$(document).ready(function() {
  var question1 = {
    text: "What does HTML stand for?",
    answer: [
      "<div class='text-center btn btn-info btn-block' data-correct='true'>Horrifically timed maniacal laughter</div>",
      "<div class='text-center btn btn-info btn-block'>Hypertext Markup Language</div>",
      "<div class='text-center btn btn-info btn-block'>Hypnotext makeout language</div>"
    ],

    correct: false
  };

  var question2 = {
    text: "CSS can be used in which of the following ways?",
    answer: [
      "<div class='text-center btn btn-info btn-block' data-correct='true'>Inline, only on a wednesday and only to make text bold</div>",
      "<div class='text-center btn btn-info btn-block'>To manipulate your loved ones and the general population as a whole</div>",
      "<div class='text-center btn btn-info btn-block'>inline, linked by stylesheet and written in the header</div>"
    ],

    correct: false
  };

  var question3 = {
    text: "Which of the following stands for a CDN?",
    answer: [
      "<div class='text-center btn btn-info btn-block' data-correct='true'>Chilling, dining, napping</div>",
      "<div class='text-center btn btn-info btn-block'>Criminally dedicated network</div>",
      "<div class='text-center btn btn-info btn-block'>Content delivery network</div>"
    ],
    correct: false
  };

  var question4 = {
    text: "Javascript and Java are.....",
    answer: [
      "<div class='text-center btn btn-info btn-block' data-correct='true'>are not the same, and yet everyone thinks they are!</div>",
      "<div class='text-center btn btn-info btn-block'>JQuerys cousins who we dont talk about anymore!</div>",
      "<div class='text-center btn btn-info btn-block'>A new hip hop group called J-cubed!</div>"
    ],
    correct: false
  };

  var question5 = {
    text: "Bootstrap is...",
    answer: [
      "<div class='text-center btn btn-info btn-block' data-correct='true'>a six month intensive coding class hosted at Columbia University</div>",
      "<div class='text-center btn btn-info btn-block'>a language created by Timberland</div>",
      "<div class='text-center btn btn-info btn-block'>a very popular CSS framework for developing responsive/mobile websites</div>"
    ],

    correct: false
  };

  var question6 = {
    text: "What is a responsive website?",
    answer: [
      "<div class='text-center btn btn-info btn-block' data-correct='true'>a website that returns your calls after your first date</div>",
      "<div class='text-center btn btn-info btn-block'>HTML and CSS that will make a website appropriate for the device it is being displayed on</div>",
      "<div class='text-center btn btn-info btn-block'>A website that maintains a pulse for more than 30 seconds</div>"
    ],

    correct: false
  };

  var question7 = {
    text: "What is an array?",
    answer: [
      "<div class='text-center btn btn-info btn-block' data-correct='true'>a single variable that is used to store different elements</div>",
      "<div class='text-center btn btn-info btn-block'>an all you can eat buffet in Yonkers</div>",
      "<div class='text-center btn btn-info btn-block'>A large fish with a baseball team named after it</div>"
    ],

    correct: false
  };

  var question8 = {
    text: "What does it mean to Git Commit",
    answer: [
      "<div class='text-center btn btn-info btn-block' data-correct='true'>Move in, get married and maybe have some little ones.</div>",
      "<div class='text-center btn btn-info btn-block'>Lose your mind and git committed involuntarily by other family members</div>",
      "<div class='text-center btn btn-info btn-block'>If it isn't early and often, your doing it wrong</div>"
    ],

    correct: false
  };

  var question9 = {
    text: "Why did Ron cut down the DOM tree in the woods??",
    answer: [
      "<div class='text-center btn btn-info btn-block' data-correct='true'>to come home with a console.log for the fire</div>",
      "<div class='text-center btn btn-info btn-block'>If he did do it, did it make a sound?</div>",
      "<div class='text-center btn btn-info btn-block'>Thankfully he was able to follow his websites cookies back out of the dark forest</div>"
    ],

    correct: false
  };

  
 
//  Storing all the questions and answers as an arraY
  var questionBank = [
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9
  ];
  var bankLength = questionBank.length;
  var count = 0;
  var intervalID;
  var time = 20;

// CLICK FUNCTION TO START THE GAME
  $("#start").click(function() {
    popQuestions(questionBank[count]);
    $("#splashScreen").css("display", "none");
    $("#questions").css("display", "inherit");
  });

//   FUNCTION TO DISPLAY THE QUESTIONS AND RANDOMIZE THE ANSWER ORDERS
  function popQuestions(array) {
    randomizeAnswers();
    intervalID = setInterval(timer, 1000);
    $("#snarf").css("background", "#FFF");
    $("#text").html("<div><h4>" + array.text);

    for (var i = 0; i < array.answer.length; i++) {
      $("#answers").append(array.answer[i]);
    }

    correct();
  }

//   FUNCTION TO GENERATE THE NEXT QUESTION 
  function nextQuestion() {
    popQuestions(questionBank[count]);
  }

//   HOW TO HANDLE THE ANSWER RESULTS AND TO CHECK THE AGAINST THE QUESTION BANK
  function correct() {
    $("#answers div").click(function() {
      var questCorrect = $(this).data("correct");

      if (questCorrect === true) {
        $(this).css("background", "#5CB85C");
        questionBank[count].correct =
          "I see youve been practicing young cricket";
        count++;
        clearInterval(intervalID);
        time = 20;
        setTimeout(function() {
          gameOverCheck();
        }, 300);
      } else {
        $(this).css("background", "#D9534F");
        questionBank[count].correct =
          "This is bootcamp coder! your never going to survive if you dont know your stuff!!";
        count++;
        clearInterval(intervalID);
        time = 20;
        setTimeout(function() {
          gameOverCheck();
        }, 300);
      }
    });
  }

  function gameOverCheck() {
    if (count === questionBank.length) {
      $("#questions").css("display", "none");
      showResults();
      $("#gameOver").css("display", "inherit");
    } else {
      $("#answers").empty();
      nextQuestion();
    }
  }

  function showResults() {
    for (var i = 0; i < bankLength; i++) {
      $("#results").append(
        "<div>Question #" + [i + 1] + ": " + questionBank[i].correct + "</div>"
      );
    }
  }

  $("#restart").click(function() {
    count = 0;
    $("#results").empty();

    for (var i = 0; i < bankLength; i++) {
      questionBank[i].correct = false;
    }

    $("#answers").empty();
    $("#gameOver").css("display", "none");
    $("#splashScreen").css("display", "inherit");
  });

  function timer() {
    $("#timer h1").html("00:0" + time);
    $("#timer").css("visibility", "inherit");

    if (time === 0) {
      $("#snarf").css("background", "#D9534F");
      clearInterval(intervalID);
      time = 20;
      questionBank[count].correct =
        "Better stick with the psuedo coding rookie.";
      count++;
      setTimeout(function() {
        gameOverCheck();
      }, 600);
    }
    time--;
  }

  function randomizeAnswers() {
    for (var i = 0; i < questionBank.length; i++) {
      questionBank[i].answer.sort(function(a, b) {
        return 0.5 - Math.random();
      });
    }
  }
});
