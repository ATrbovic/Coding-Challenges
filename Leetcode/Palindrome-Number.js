// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.

var isPalindrome = function(x) {
  if (x < 0) {
      return false;
  }
  let number = x;
  let reverse = 0;
  while (number > 0) {
      reverse = reverse * 10 + number % 10;
      number = parseInt(number / 10);
  }
  return x === reverse;
};