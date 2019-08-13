




    var pos = 0, quiz, quizStatus, question, choice, choices, chA, chB, chC, correct = 0;

            // My vars to grab various HTML elements by ID quickly.
        var answerbox = get("answerbox");
        var questionbox = get("questionbox");
        var counterbox = get("counterbox");
        var resultbox = get("resultbox");
        var quizStatus = get("quizStatus");


        // Multi dimensional array using several arrays enclosed in one big one.
var questions = [
    ["What does HTML stand for?",'Horrifically timed maniacal laughter', 'Hypertext Markup Language','Hypnotext makeout language','Hypertext Markup Language'],
    ["CSS can be used in which of the following ways?", 'Inline, only on a wednesday and only to make text bold','To manipulate your loved ones and the general population as a whole','inline, linked by stylesheet and written in the header', 'inline, linked by stylesheet and written in the header'],
    ["Which of the following stands for a CDN?", 'Chilling, dining, napping','Criminally dedicated network', 'Content delivery network', 'Content delivery network'],
    ["Javascript and Java are.....", "are not the same, and yet everyone thinks they are!", "JQuerys cousins who we dont talk about anymore!", "A new hip hop group called J-cubed!", "are not the same, and yet everyone thinks they are!"],
    ["Bootstrap is...", "a six month intensive coding class hosted at Columbia University", "a language created by Timberland", "a very popular CSS framework for developing responsive/mobile websites", "a very popular CSS framework for developing responsive/mobile websites"],
    ["What is a responsive website?", "a website that returns your calls after your first date", "HTML and CSS that will make a website appropriate for the device it is being displayed on","A website that maintains a pulse for more than 30 seconds", "HTML and CSS that will make a website appropriate for the device it is being displayed on"],
    ["What is an array?", "a single variable that is used to store different elements", "an all you can eat buffet in Yonkers", "A large fish with a baseball team named after it", "a single variable that is used to store different elements"],
    ["What does it mean to Git Commit", "Move in, get married and maybe have some little ones.", "Lose your mind and git committed involuntarily by other family members", "the commit command is used to save changes to your local repository", "the commit command is used to save changes to your local repository"],
    ["Why did Ron cut down the DOM tree in the woods??", "to come home with a console.log for the fire", "If he did do it, did it make a sound?", "Thankfully he was able to follow his websites cookies back out of the dark forest", "to come home with a console.log for the fire"]
];

        

            // I want this function to initiate the quiz upon page load,  I want it to write the question
            // to the question Box, answers etc... This should be very similar to the next function which 
            // will prompt the next question and record the answer on submit.
            // 

                    // This is to initiate the start of the game upon window load.
            window.addEventListener("load", startQuiz, false);


            var quizStatus = get("quizStatus");
                // This is the function that will start upon window load.
        var startQuiz = { 
        pos = 0,
        correct = 0,
        quizStatus = "Question "+(pos+1)+" of 9";
        question = questions [pos][0];
        chA = questions[pos][1];
        chB = questions[pos][2];
        chC = questions[pos][3];
        questionbox.innerHTML = "<h3>"+question+"</h3>";
        answerbox.innerHTML += "<input type='radio' id='choices' value='A'> "+chA+"<br>";
        answerbox.innerHTML += "<input type='radio' id='choices' value='B'> "+chB+"<br>";
        answerbox.innerHTML += "<input type='radio' id='choices' value='C'> "+chC+"<br>";
        answerbox.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
};




var submit = function submission {

    choices = getElementById('choices');
    for (var i = 0; i<choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
        if (choice == questions[pos][4]) {
            correct++;
        }
            pos++;
            renderQuestion();

}

function renderQuestion(){
    nextQuestion = get("questionbox");
    if(pos >= questions.length){
      questionbox.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
      get("quizStatus").innerHTML = "Test completed";
      // resets the variable to allow users to restart the test
      pos = 0;
      correct = 0;
      // stops rest of renderQuestion function running when test is completed
      return false;
      
    }

    get("quizStatus").innerHTML = "Question "+(pos+1)+" of 9";
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>"+question+"</h3>";
    // the += appends to the data we started on the line above
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
  }
  

