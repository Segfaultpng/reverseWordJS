var reverse = function(){

    var string = prompt("eneter a string");
   
    var wordsArr = string.split(" ");
    var reversedWordsArr= [];

    
    wordsArr.forEach(word => {
        var reversedWord = '';

        for(var i = word.length - 1; i >= 0; i--){
            reversedWord += word[i];
        }

        reversedWordsArr.push(reversedWord);
    })


    document.getElementById("reversedtext").innerText = reversedWordsArr.join(" ");


}

window.onload = function () {
    reverse();
}