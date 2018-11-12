var reverse = function(){

    var string = prompt("eneter a string");
   
    //split the words by spaces
    var wordsArr = string.split(" ");
    //create an empty array to store our reversed strings
    var reversedWordsArr= [];

    
    //use foreach loop to loop through wordsArr we made we don't care about index here
    wordsArr.forEach(word => {
        //tmp holder for the word we reverse
        var reversedWord = '';

        //now we do care about the index so use normal forloop and loop through each character in the current word
        //from the for each
        for(var i = word.length - 1; i >= 0; i--){
            //looping backwards add the last character to the word and continue
            reversedWord += word[i];
        }

        //push reversed word into the array
        reversedWordsArr.push(reversedWord);
    })


    //print the word out by setting it in  reversedtext innerText
    document.getElementById("reversedtext").innerText = reversedWordsArr.join(" ");


}

window.onload = function () {
    reverse();
}