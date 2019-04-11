var counter2= function(arr)
{
  return "there "+ 'are '+arr.length+' elements in this array';
};
var adder =function(a,b)
{
    return 'the sum is '+(a+b);
};
var pi=3.1416;

module.exports.counter2= counter2;
module.exports.adder=adder;
module.exports.pi=pi;
