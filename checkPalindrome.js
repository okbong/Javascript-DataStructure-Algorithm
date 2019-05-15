function checkPalindrome(sentence)
{
  var mid=sentence.length/2;
  
  for(var i=0;i<mid;i++)
  {
    console.log(sentence[i]+"<->"+sentence[sentence.length-i-1]);
    if(sentence[i]!=sentence[sentence.length-i-1])
      return false;
  }
  return true;
}

console.log(checkPalindrome('abcddcba'));
