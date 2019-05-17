function divid(whole, element)
{
  var count=0;
  while(whole>element)
  {
    whole-=element;
    count++;
  }
  return count;
}


console.log(divid(10,3));
