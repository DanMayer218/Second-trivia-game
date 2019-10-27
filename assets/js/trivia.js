$(document).ready(function() {
	
	var question1 = {
		text: "What does HTML stand for?", 
		answer: "Hypertext Markup Language",
		wrong: ["Horrifically timed maniacal laughter", "Hypnotext makeout language"],
		correct: false,
	}

	var question2 = {
		text: "CSS can be used in which of the following ways",
		answer: "inline, linked by stylesheet and written in the header",
		wrong: ["Inline, only on a wednesday and only to make text bold", "To manipulate your loved ones and the general population as a whole"],
		correct: false,
	}

	var question3 = {
		text: "Which of the following stands for a CDN?", 
		answer: "Content delivery network",
		wrong: ["Chilling, dining, napping", "Criminally dedicated network"],
		correct: false,
	}

	var question4 = {
		text: "Javascript and Java are.....", 
		answer: "are not the same, and yet everyone thinks they are!",
		wrong: ["A new hip hop group called J-cubed!", "JQuerys cousins who we dont talk about anymore!"],
		correct: false,
	}

	var question5 = {
		text: "Bootstrap is...", 
		answer: "a very popular CSS framework for developing responsive/mobile websites",
		wrong: ["a six month intensive coding class hosted at Columbia University", "a language created by Timberland"],
		correct: false,
	}

	var question6 = {
		text: "What is a responsive website?",
		answer: "HTML and CSS that will make a website appropriate for the device it is being displayed on",
		wrong: ["a website that returns your calls after your first date", "A website that maintains a pulse for more than 30 seconds"],
		correct: false,
	}

	var question7 = {
		text: "What is an array?", 
		answer: "a single variable that is used to store different elements",
		wrong: ["an all you can eat buffet in Yonkers", "A large fish with a baseball team named after it"],
		correct: false,
	}

	var question8 = {
		text: "What does it mean to Git Commit", 
		answer: "he commit command is used to save changes to your local repository",
		wrong: ["Move in, get married and maybe have some little ones.", "ose your mind and git committed involuntarily by other family members"],
		correct: false,
	}

	var question9 = {
		text: "Why did Ron cut down the DOM tree in the woods?", 
		answer: "to come home with a console.log for the fire",
		wrong: ["If he did do it, did it make a sound?", "Thankfully he was able to follow his websites cookies back out of the dark forest"],
		correct: false,
	}

	var questionBank = [question1, question2, question3, question4, question5, question6, question7, question8, question9];
	var bankLength = questionBank.length;
	var count = 0;
	var intervalID; 
	var time = 20;


$("#start").click(function() {

	createQuestions(questionBank[count]);
	$("#splashScreen").css('display', 'none');
	$("#questions").css('display', 'inherit');

});



function createQuestions(array) {

	intervalID = setInterval(timer, 1000);
	$("#snarf").css('background', '#FFF');
	$("#text").html("<div><h4>" + array.text);
	$("#answers").html("<div class='text-center btn btn-info btn-block' data-correct='true'>" + array.answer);

	for (var i = 0; i < array.wrong.length; i++) {
		$("#answers").append("<div class='text-center btn btn-info btn-block' data-correct='false'>" + array.wrong[i]);
	};

	correct();
}


function nextQuestion() {
	createQuestions(questionBank[count]);
}


function correct() {
	$("#answers div").click(function() {

		var questCorrect = $(this).data("correct");

		if (questCorrect === true) {
			$(this).css('background', '#5CB85C');
			questionBank[count].correct = "Aha, so youve been paying attention young cricket.";
			count++;
			clearInterval(intervalID);
			time = 20;
			setTimeout(function() {
				checkGameEnd();		
			}, 100);

		} else {
			$(this).css('background', '#D9534F');
			questionBank[count].correct = "Is bootcamp just a game to you? C'mon!!!!!";
			count++;
			clearInterval(intervalID);
			time = 20;
			setTimeout(function() {
				checkGameEnd();		
			}, 100);	
		}

	});
}


function checkGameEnd() {
	if (count === questionBank.length) {
	$("#questions").css('display', 'none');	
	createResults();
	$("#gameOver").css('display', 'inherit');

	} else {
		nextQuestion();
	}
}


function createResults() {

	for (var i = 0; i < bankLength; i++) {

		$("#results").append("<div>Question #"+[i+1]+': ' + questionBank[i].correct + "</div>");
	}
}


$("#restart").click(function() {

	count = 0;
	$("#results").empty();	

	for (var i = 0; i < bankLength; i++) {
		questionBank[i].correct = false;
	}

	$("#gameOver").css('display', 'none');
	$("#splashScreen").css('display', 'inherit');

});


function timer() {
	$("#timer h1").html("00:0"+time);
	$("#timer").css('visibility', 'inherit');

	if (time === 0) {

		$("#snarf").css('background', '#D9534F');
		clearInterval(intervalID);
		time = 20;
		questionBank[count].correct = "Don't come back until you node your code";
		count++;
		setTimeout(function() {
			checkGameEnd();		
		}, 600);
	}
	time--;
};





});