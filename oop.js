// 1st way
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

// 2nd way//
function Car(modal, year){
  this.modal=modal;
  this.year=year;
  this.summary=function(){
    console.log(this.year+' '+this.modal);
  }
}

let car1=new Car('toyota',2019);
let car2=new Car('honda',2017);

car1.summary();
car2.summary();

// 3rd way
// what is configurable, writeable, enumerable
// https://imweb.io/topic/56d40adc0848801a4ba198ce
let car = Object.create(Object.prototype,
  {
    name:{
      value: 'Fiesta',
      configurable: true,
      writable: true,
      enumerable: false
    },
    maker:{
      value: 'Ford',
      configurable: true,
      writable: true,
      enumerable: true
    }
  });
console.log(car.name) 

// 4th way ES6
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker =  maker;
    this.engine = engine;
  }
  
  start() {
    console.log("Starting...");
  }
}
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
console.log(bike1.name);    //Output: Hayabusabike2.start();   //Output: Kawasaki
