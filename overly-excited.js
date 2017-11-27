// Create an array that contains the words in the sentence
var sentence = ["I","have","to","run","to","the","store","for","milk","and","cereal"];

// The addExcitement function should accept the array as the sole argument
function addExcitement (wordArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */
    let sentenceHolder = " ";
    for (i = 0; i < sentence.length; i++) {
        var counter = i + 1;
        if (counter % 3 === 0) {
            console.log(sentenceHolder+= (sentence[i]) + "! ");
        } else {
            console.log(sentenceHolder+= (sentence[i]) + " ");
        }

    }
    
}

// Invoke the function and pass in the array
addExcitement(sentence);
