
var empObj={
  name:'Tom',
  age: 18,
  say: function(words){
    console.log(words+' my name is'+this.name);
  }
}

empObj.say('Hello');

empObj.say2=function(){
  console.log('hello2');
}

empObj.say2();


