var questions = [
   //question 1:
  {
  	question: "Which branch of government can propose an amendment to the U.S. Constitution?",
  	answers: [
  		"Executive",
  		"Legislative",
  		"Judicial"
  	],
  	correctAnswerString: "Legislative",
  	correctanswer: 2,
  	userResponse: null
  },
  // question 2:
  {
  	question: "Which branch of U.S. Government can propose bills?",
  	answers: [
  		"Executive",
  		"Legislative",
  		"Judicial"
  	],
  	correctAnswerString: "Executive",
  	correctanswer: 1,
  	userResponse: null
  },
  //question 3:
  {
  	question: "Which Branch of government can declare executive actions unconstitutional?",
  	answers: [
  		"Executive",
  		"Legislative",
  		"Judicial"
  	],
  	correctAnswerString: "Judicial",
  	correctanswer: 3,
  	userResponse: null
  },
  //question 4: 
  {
  	question: "Which branch of government has the person who serves as commander and chief of the military?",
  	answers: [
  		"Executive",
  		"Legislative",
  		"Judicial"
  	],
  	correctAnswerString: "Executive",
  	correctanswer: 1,
  	userResponse: null
  },
  //question 5: 
  {
  	question: "Which branch of govt can formally accuse justices of crimes related to his/her duties?",
  	answers: [
  		"Executive",
  		"Legislative",
  		"Judicial"
  	],
  	correctAnswerString: "Legislative",
  	correctanswer: 2,
  	userResponse: null
  }
]

//Constants
var BEGINQUIZ = "#start";
var REMOVECLASS = ".hidden";
var STARTPAGE = ".start-page";



function generateQuizQuestions() {
  console.log("`generateQuizQuestions` ran");
  
  $(BEGINQUIZ).click(function(){
  	$(STARTPAGE).addClass(REMOVECLASS);
  	$("main").removeClass(REMOVECLASS);
  });
}


function startQuiz() {
  console.log("`startQuiz` ran");
  
  generateQuizQuestions();
};



function handleResponses() {
  generateQuizQuestions();
}

$(handleResponses());