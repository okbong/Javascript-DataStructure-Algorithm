function isValidCharacter(word)
{
  if((word<='Z' && word>='A') ||
          (word<='z' && word>='a'))
    return true;
  else
    return false;
}          

function countwords(sentence)
{
  //sentence=sentence.trim();
  var word_count=0;
  
  for(var i=0;i<sentence.length;i++)
  {
    var word=sentence[i];
    while(isValidCharacter(word))
    {
      i++;
      if(i==sentence.length)
        break;
      word=sentence[i];
    }
    word_count++;
    while(!isValidCharacter(word))
    {
      i++;
      if(i==sentence.length)
        break;
      word=sentence[i];
    }
  }
  return word_count;
}
console.log('hi');
console.log(countwords('Hello , this is Tom! mom!'));
