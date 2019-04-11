






var events = require('events');
var util = require('util');

var Person = function(name)
{
  this.name = name;
};

util.inherits(Person, events.EventEmitter);
var james = new Person('james');
var jamesi = new Person('jamesi');

var people = [james,jamesi];

people.forEach(function(Person)
{
  Person.on('speak',function(msg)
  {
    console.log(Person.name + ' said: '+ msg);
  });
});

james.emit('speak','i am the king')





var count= require('./count');
console.log(count.counter2(['there ','are','arra']));
console.log(count.adder(1,2));
console.log(count.pi);





function sayHi()
{
  console.log("hi");
}
sayHi();

var bye= function()
{
  console.log("bye");
}
function callFunction(lol)
{
  lol();
}
callFunction(bye);

bye();
console.log("hey bros");
var time =0;
var timer=0;
console.log(__dirname);

timer=setInterval(function(){
  time+=2;
  console.log(time+ "  sec has passed");
if (time>50) {
  clearInterval(timer);
}
},2000);
