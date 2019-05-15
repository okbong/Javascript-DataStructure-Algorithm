function sumtosingledigit2(number)
{
  var sum=0;
  while(number>=10)
  {
    var digit=number%10;
    sum+=digit;
    if(sum>10)
      sum=sum%10+1;
    number=Math.floor(number/10);
  }
  
  sum+=number;
  if(sum>10)
    sum=sum%10+1;

  return sum;
}

function sumtosingledigit(num)
{
    var sum=0;
    while(num>0){
        var dig=num%10;
        sum+=dig;
        
        if(sum>9)
            sum=sum%10+Math.floor(sum/10);
        num=Math.floor(num/10);
    }
    return sum;
}


console.log('sumtosingledigit:'+sumtosingledigit(123));
