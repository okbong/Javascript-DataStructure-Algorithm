function pow(a,b)
{
  if(b==0)
    return 1;
  if(b==1)
    return a;
  
  var c=Math.floor(b/2);
  var tmp = pow(a,c);
  if(b%2==1)
  {
    return tmp*tmp*a;
  }
  else
    return tmp*tmp;
}

console.log(pow(2,7));
