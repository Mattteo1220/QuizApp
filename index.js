var questions = [
   //question 1:
  {
  	question: "Which branch of government can propose an amendment to the U.S. Constitution?",
  	answers: [
  		"Executive",
  		"Legislative",
  		"Judicial"
  	],
    ID: 1,
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
    ID: 2,
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
    ID: 3,
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
    ID: 4,
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
    ID: 5,
  	correctAnswerString: "Legislative",
  	correctanswer: 2,
  	userResponse: null
  }
]

//Constants
var BEGINQUIZ = "#start";
var REMOVECLASS = "hidden";
var STARTPAGE = ".start-page";
var SET = "main";
var QUESTION = ".question";
var NEXTIDENTIFIER = "#js-forward";
var CURRENTQUESTION = 1;
var ANSSHEET = "#AnswerSheet";
var GOBACK = "#js-return";
var NUMQUESTION = 1;
var NUMOFQUESTION = ".clicker";
var ANSWERS = ".answers";
var FINISH = "Finish";
var END = "#end"
var PLAYAGAIN = "#playAgain"

function renderQuestion(ID){
  console.log("`renderQuestion` ran");
  $(SET).removeClass(REMOVECLASS);
  $(STARTPAGE).addClass(REMOVECLASS);
  $(ANSSHEET).html("");
  for (var i = 0; i < questions.length; i++) {
    if (questions[i].ID === ID) {
      $(questions[i].answers).each(function(){
      $(ANSSHEET).append('<p><input type="button" value="'+this+'" data-parentid="'+questions[i].ID+'" class="answers"></p>');
      });
      $(QUESTION).html(questions[i].question);
    }
  }
  $(ANSWERS).click(function(){
    setResponse($(this).val(""), $(this).data("parentid"));
  });
}

function getNextSetOfQuestions() {
  console.log("`getNextSetOfQuestions` ran");

  $(NEXTIDENTIFIER).on("click", function(){
    CURRENTQUESTION++;
    renderQuestion(CURRENTQUESTION);
  });
}

function goBackSetOfQuestions() {
  console.log("'goBackSetOfQuestions' ran");

  $(GOBACK).click(function(){
    CURRENTQUESTION--;
    renderQuestion(CURRENTQUESTION);
  });
}

function startQuiz() {
  console.log("`startQuiz` ran");
  $(BEGINQUIZ).click(function(){
    renderQuestion(CURRENTQUESTION);
  })
}

function numOfQuestions() {
  console.log("`numOfQuestions` ran");
  var clicker = 1;

  $(NUMOFQUESTION).text(clicker);
  if (clicker < questions.length) {
    $(NEXTIDENTIFIER).click(function(event){
      clicker++
      if (clicker === questions.length){
        $(NEXTIDENTIFIER).on("click", function(event){
          $(SET).addClass(REMOVECLASS);
          $(END).removeClass(REMOVECLASS);
        });
      }
      $(NUMOFQUESTION).text(clicker);
    })
  }
    $(GOBACK).on("click", function(event){
    clicker--;
    $(NUMOFQUESTION).text(clicker);
      if (clicker === 1) {
        $(GOBACK).off("click");
      }
  });
  };


function setResponse(response, id) {
  for (var i = 0; i < questions.length; i++) {
    if (questions[i].ID === id) {
      questions[i].userResponse = response;
  }
  }
}

function endTest() {

}

function playAgain() {
  $(PLAYAGAIN).on("click",function(event){
    $(END).addClass(REMOVECLASS);
    $(STARTPAGE).removeClass(REMOVECLASS);
  })
}



function handleResponses() {
  getNextSetOfQuestions();
  startQuiz();
  goBackSetOfQuestions();
  numOfQuestions();
  playAgain();
};


$(handleResponses());