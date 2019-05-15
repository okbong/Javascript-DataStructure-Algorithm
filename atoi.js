function myatoi(value)
{
  var sum=0;
  for(var i=0;i<value.length;i++)
  {
    sum = sum*10+parseInt(value[i]);
  }
  
  return sum;
}

console.log(myatoi('124'));  
