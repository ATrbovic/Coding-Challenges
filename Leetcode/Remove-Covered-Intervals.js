// Given an array intervals where intervals[i] = [li, ri] represent the 
// interval [li, ri), remove all intervals 
// that are covered by another interval in the list.

var removeCoveredIntervals = function(intervals) {
  intervals.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

  const stack = [];
  stack.push(intervals.pop());
  
  while (intervals.length > 0) {
      const [currStart, currEnd] = intervals.pop();
      const [prevStart, prevEnd] = stack[stack.length - 1];
      
      if (currStart >= prevStart && currEnd <= prevEnd) {
          continue;
      } else {
          stack.push([currStart, currEnd]);
      }
  }
  
  return stack.length;
};