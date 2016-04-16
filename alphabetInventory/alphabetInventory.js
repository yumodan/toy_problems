function alphaCount (alphabet, text) {
// Given an alphabet and a string of text,
// write a method that tallies the count of each letter defined in said
// alphabet (case insensitive), then return the result of this tally.
  alphabet = alphabet.toLowerCase();
  text = text.toLowerCase();

  var hash = {};
  var res = '';

  for(var i = 0; i < text.length; i++){
    if(hash[text[i]]){
      hash[text[i]]++;
    }else{
      hash[text[i]] = 1;
    }
  }

  for(var j = 0; j < alphabet.length; j++){
    if(hash[alphabet[j]]){
      res += ','+alphabet[j] + ':' + hash[alphabet[j]];
    }
  }

  return res.slice(1) || "no matches";
}
