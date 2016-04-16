function charSum (str) {
// Given a string of arbitrary size, convert each character into its integer equivalent and sum the entirety.
  var res = 0;
  for(var i = 0; i < str.length; i++){
    if(parseInt(str[i])){
      res += parseInt(str[i]);
    }
  }
  return res;
}
