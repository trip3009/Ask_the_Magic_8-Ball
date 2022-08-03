 /* 
    SCRIPT.JS

    This is where you'll complete the SkillBuilder. Look at the Markdown tab (in the same pane as the console) for detailed README instuctions!
*/

let positiveAnswers = [
  "As I see it, yes",
  "It is certain",
  "It is decidedly so",
  "Yes",
  "Yes, definitely"
];

let negativeAnswers = [
  "My reply is no",
  "My sources say no",
  "There is no way",
  "No",
  "Absolutely not!"
];

let maybeAnswers = [
  "Ask again later",
  "Better to not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Reply hazy try again"
];

const NO_QUESTION_WARNING = "You need to ask a question!";

function chooseRandomAnswerType() {
	// Part 1: Your code here 👇
  // the function should return  "positive", "negative", "maybe"
  let randomNumber = getRandomNumber(0, 2);
  if (randomNumber === 0) {
    return "positive";
    // console.log(positiveAnswers);
  } else if (randomNumber === 1) {
    return "negative"
    // console.log(negtiveAnswers);
  } else {
    return "maybe";
    // console.log(maybeAnswers);
  }
};

chooseRandomAnswerTypeTest();

function chooseRandomAnswer(answerType) {
	// Part 2: Your code here 👇
  // the function answerType return to ["positive", "negative", "maybe"]
  //returnrandom answer based on answer type.
  // let negative = getRandom(negativeAnswers.length);
  // let maybe = getRandom(maybeAnswers.length);

  let randomIndex = getRandomNumber(0, 4);
  //random a random posittive answer
    if (answerType === "positive") {
    return positiveAnswers[randomIndex];
  } else if (answerType === "negative") {
    return negativeAnswers[randomIndex];
  } else {
    return maybeAnswers[randomIndex];
  }
};
// I thought the else function needed (answerType === "maybe")
chooseRandomAnswerTest();


function onAnswerRequested() {
  // Part 3: Your code here 👇
	if (getQuestionText()=== "") {
    supplyAnswer(NO_QUESTION_WARNING); 
  } else {
    let type = chooseRandomAnswerType();
    let answer = chooseRandomAnswer(type);
    supplyAnswer(answer);
  } 
};
  // if no question is answered show warning()
  //otherwise show a random answer using getQuestionText(), chooseRandonAnswerType(), supplyAnswer()
onAnswerRequestedTest();




/* LEVEL UP - describe how it works below!
  Describe here!
*/