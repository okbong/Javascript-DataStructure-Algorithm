var str='bafegbdesazxcvjafjai';

function checkUniqueElement(str)
{
  var strarr=str.split('');
  strarr.sort();
  console.log(strarr);

  var same_word_count=0;
  var prev='';
  for(var i=0;i<strarr.length;i++)
  {
    //console.log('!'+strarr[i]);
    if(prev!=strarr[i]){
      if(same_word_count==1)
        console.log(prev);
      same_word_count=1;
      prev=strarr[i];
    }
    else{
      same_word_count++;
    }
    
    if(i==(strarr.length-1) && same_word_count==1)
    {
      console.log(strarr[i]);  
    }

  }
}

checkUniqueElement(str);
