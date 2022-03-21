// Write a function to find the longest common prefix string amongst an array of strings.

var longestCommonPrefix = function(strs) {
  if (!strs.length) {
    return ''
  }
  const shortestStrLength = strs.reduce((currMin, str) => Math.min(currMin, str.length), Infinity)
  
  let commonPrefix = ''
  for (let i = 0; i < shortestStrLength; i++) {
    const testedPrefix = `${commonPrefix}${strs[0][i]}`
    for (let j = 1; j < strs.length; j++) {
      if (!strs[j].startsWith(testedPrefix)) {
        return commonPrefix
      }
    }
    commonPrefix = testedPrefix
  }
  return commonPrefix
};