var reverse = function(){

    var string = prompt("eneter a string");
   
    var wordsArr = string.split(" ");
    var reversedWordsArr= [];

    for(var x = 0; x< wordsArr.length; x++){
        var reversedWord = "";
        for(var y = wordsArr[x].length - 1; y >= 0; y--){
  
            reversedWord += wordsArr[x][y];
        }
        reversedWordsArr.push(reversedWord);

    }


    document.getElementById("reversedtext").innerText = reversedWordsArr.join(" ");


}

window.onload = function () {
    reverse();
}