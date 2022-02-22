// Write a function that takes an integer as input, and returns the number of bits that
// are equal to one in the binary representation of that number. 
// You can guarantee that input is non-negative.

var countBits = function(n) {
  const base = (n).toString(2).split('');
  
  const result = base.reduce((sum, num) => sum + Number(num), 0);
  
  return result;
};