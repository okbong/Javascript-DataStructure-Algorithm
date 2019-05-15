function reverseArray(arr)
{
  for(var i=0;i<arr.length/2;i++)
  {
    var tmp=arr[i];
    console.log(arr[i]+'<->'+arr[arr.length-1-i]);
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i]=tmp;
  }
  
  return arr;
}

console.log(reverseArray([1,2,3,4,5]));
