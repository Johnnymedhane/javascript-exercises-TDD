const add = function(a,b) {
  return a + b;
	
};

const subtract = function(a, b) {
	return a- b;
};

const sum = function(array) {
	// const sum = a + b + c;
  // return sum;
  return array.reduce((sum, val) => sum + val,0);
};

const multiply = function( array) {
// return a * b;
return array.reduce((sum, num) => sum * num,1);
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
	if (num === 0)  1;
  let frac = 1;
  for (let i = num; i > 0; i--) {
    frac *= i;
  }
  return frac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
