function longestWord (string) {
    var indWords = string.split(" ")
    var longest = "";
    for (var i=0;i< indWords.length; i++) {
        var word = indWords[i].trim();
        if (word.length >= longest.length){
        longest = word;
        }
    }
    console.log(longest)
    return longest ;
}
    
function shortestWord (string) {
    var indWords = string.split(" ");
    var max = 9;
    var shortest = " ";
    for ( var i=0; i<indWords.length; i++){
        var word = indWords[i].trim();
        if (word.length <= max){
          max = word.length;
          shortest = word;
        }
    }
    console.log (shortest);
    return shortest;
}

function wordLengths(string){
    let indWords = string.split(" ");
    total = 0;
       
    for (var i=0; i<indWords.length; i++){
         var word = indWords[i].trim();
         var counter = word.length
         total= total + counter;
    }
       console.log (total)
       return total;
}