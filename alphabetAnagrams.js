function anagramPosition (string) {
  // Write your code here, and
  // return your final answer.
  var str = string.split('').sort();
  var string = string.split('');
  var count = 1;

  string.forEach((item) => {
    count += str.indexOf(item) * permutations(str.slice(0, 1));
    console.log('count ', count)
    str = str.splice(str.indexOf(item), 1);
  })

  return count;
}

function repetitions(arr){
  //don't call this function it is already being invoked in permutations
  var results = []
  var lettercount = arr.reduce((total, item) => {
    total[item] ? total[item]++ : total[item] = 1;
    return total;
  }, {});
  
  for(var key in lettercount){
    if(lettercount[key] > 1){
      results.push(lettercount[key]);
    }
  }
  if (results.length === 0) results[0] = 1;
  return results; //array containing number number of times each individual letter repeats
}

function permutations(arr){
  //finds number of perms an array of characters can have
  var denom = repetitions(arr);
  var den = denom.reduce((total, val) => {
    return total * factorial(val);
  }, 1);
  console.log('den ', den);
  return (factorial(arr.length) / den);
}



var f = [];

function factorial(n){
    if (n == 0 || n == 1)
      return 1;
    if (f[n] > 0)
      return f[n];
    return f[n] = factorial(n-1) * n;
}
