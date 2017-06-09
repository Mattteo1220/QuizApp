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

function startQuiz() {
  console.log("`startQuiz` ran");
  var startPoint = BEGINQUIZ.forEach(function(event){
    event.preventDefault();
    $(BEGINQUIZ).click(function(question){
      for (var i = 0; i < question.length; i++) {
        if (question[i] == )
      }
    })

});
}


function renderQuestions() {
	console.log("`renderQuestions` ran");
   // This will render the first set of questions once the end user clicks start.
   
   };

function handleResponses() {
  renderQuestions();
}

$(handleResponses());