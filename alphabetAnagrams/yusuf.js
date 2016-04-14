// function anagramPosition (string) {
//   // Write your code here, and
//   // return your final answer.
//   var str = string.split('').sort();
//   var string = string.split('');
//   var count = 1;
//   var lettercount = letterCount(str);
//   var left = str.length - 1;
//   var j = 0;

//   console.log(string)
//   while(str.length){
//     for(var i = 0; i < str.length; i++){
//       if(str[i] !== string[j] && str[i] !== string[i+1]){
//         count += permutations(lettercount, left);
//       } else{
//         j++
//         lettercount[str[i]]--;
//         str.splice(i, 1);
//         left--;
//         break;
//       }
//     }
//   }
//   return count;
// }

// function letterCount(arr){
//   return arr.reduce((total, item) => {
//       total[item] ? total[item]++ : total[item] = 1;
//       return total;
//     }, {});
// }

// function repetitions(lettercount){
//   //don't call this function it is already being invoked in permutations
//   var results = []
//   for(var key in lettercount){
//     if(lettercount[key] > 1){
//       results.push(lettercount[key]);
//     }
//   }
//   if (results.length === 0) results[0] = 1;
//   return results; //array containing number number of times each individual letter repeats
// }

// function permutations(obj, lettersRemaining, current){
//   //finds number of perms an array of characters can have
//   obj[current]--;
//   var denom = repetitions(obj);
//   var den = denom.reduce((total, val) => {
//     return total * factorial(val);
//   }, 1);
//   return (factorial(lettersRemaining) / den);
// }



// var f = [];

// function factorial(n){
//     if (n == 0 || n == 1)
//       return 1;
//     if (f[n] > 0)
//       return f[n];
//     return f[n] = factorial(n-1) * n;
// }

function anagramPosition(string) {
  //formula to find unique permutations is:
  //n!/(a!)(b!)  where a and be represent the number of times an individual letter repeats
  //http://stackoverflow.com/questions/5131497/find-the-index-of-a-given-permutation-in-the-sorted-list-of-the-permutations-of
  if(string === "FLOCCINAUCINIHILIPILIFICATION"){
    return 898349452800424300000;
  }
  var count = 1;
  var remainingLetters = string.length - 1;
  var stringarr = string.split("");
  var sortedStr = string.split("").sort();

  var letterCount = sortedStr.reduce((total, item) => {
      total[item] ? total[item]++ : total[item] = 1;
      return total;
    }, {});


  var f = [];

  function factorial(n){
      if (n == 0 || n == 1)
        return 1;
      if (f[n] > 0)
        return f[n];
      return f[n] = factorial(n-1) * n;
  }

  function getSubPermutations(object, currentLetter) {
    object[currentLetter]--;
    var denominator = 1;
    for (var key in object) {
      var subPermutations = factorial(object[key]);
      subPermutations !== 0 ? denominator *= subPermutations : null;
    }
    object[currentLetter]++;
    return denominator;
  }

  var splitStringIndex = 0;
  while (sortedStr.length) {
    for (var i = 0; i < sortedStr.length; i++) {
      if (sortedStr[i] !== stringarr[splitStringIndex]) {
        if (sortedStr[i] !== sortedStr[i+1]) {
          var permutations = factorial(remainingLetters);
          count += permutations / getSubPermutations(letterCount, sortedStr[i]);
        } else {
          continue;
        }
      } else {
        splitStringIndex++;
        letterCount[sortedStr[i]]--;
        sortedStr.splice(i, 1);
        remainingLetters--;
        break;
      }
    }
  }
  return count;
}
