// Use access private variable inside function
var name = "The Window";

var object = {
  name : "My Object",

  getNameFunc : function(){
      var that=this; 
    return function(){
      return that.name;
    };
  }

};

console.log(object.getNameFunc()());
　　


function foo() 
{ 
			 var b = 1; 
			 function inner(){ 
				 return b; 
			 } 
			 return inner; 
} 
var get_func_inner = foo();		 

console.log(get_func_inner()); 





// Use as constructor initial value
function foo1(outer_arg) { 
  
    function inner(inner_arg) { 
        return outer_arg + inner_arg; 
    } 
    return inner; 
} 
var get_func_inner = foo1(5); 
  
console.log(get_func_inner(4)); 
console.log(get_func_inner(3));





// Outer function 
function outer()  
{ 
    function create_Closure(val)  
    { 
        return function()  
        { 
            return val; 
        } 
    } 
    var arr = []; 
    var i; 
    for (i = 0; i < 4; i++)  
    { 
        arr[i] = create_Closure(i); 
    } 
    return arr; 
} 
var get_arr = outer(); 
console.log(get_arr[0]()); 
console.log(get_arr[1]()); 
console.log(get_arr[2]()); 
console.log(get_arr[3]()); 
