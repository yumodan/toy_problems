function isAnagram (a, b) {
//Given two strings, return true if one string is an anagram of another.
  var hash = {};
  for(var i = 0; i < a.length; i++){
    hash[a[i]] ? hash[a[i]]++ : hash[a[i]] = 1;
  }
  for(var j = 0; j < b.length; j++){
    if(b[j] === ' ') continue;

    if(hash[b[j]]){
      hash[b[j]]--
    }else{
      return false;
    }
  }
  return true;
}
