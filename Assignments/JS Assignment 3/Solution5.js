/*Write a function to replace wrong word with correct word in any sentance.
Like this - correctfn(string, wrong, correct)
Use string.replace in function.*/

function replaceWrongWithCorrect(sentence, wrong, correct) {
  const correctedSentence = sentence.replace(wrong,correct);
  return correctedSentence;
}  
const inputSentence = "This is a test sentence with wrong word.";
const wrongWord = "wrong";
const correctWord = "correct";
const correctedSentence = replaceWrongWithCorrect(inputSentence, wrongWord, correctWord);
console.log(correctedSentence);