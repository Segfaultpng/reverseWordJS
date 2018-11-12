var reverse = function(){

    var string = prompt("eneter a string");
   
    //make words array (words split by the spaces)
    var wordsArr = string.split(" ");

    //make an empty array of all the reversed words that we are gathering
    var reversedWordsArr= [];

    //make a for loop to loop through every word in our array we could use a foreach here!
    for(var x = 0; x< wordsArr.length; x++){
        //have a tmp holder for our new reversed word
        var reversedWord = "";

        //loop through the characters in this current word starting from the back because we want to reverse it.
        for(var y = wordsArr[x].length - 1; y >= 0; y--){
  
            //wordsArr[x] is currently holding our word. So grabbing the current character is done by adding the [y]
            reversedWord += wordsArr[x][y];
        }
        //push our reversed word here
        reversedWordsArr.push(reversedWord);

    }


    //change reversedtext to be what our reversed word array has inside of it
    document.getElementById("reversedtext").textContent = reversedWordsArr.join(" ");


}

window.onload = function () {
    reverse();
}