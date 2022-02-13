///Given two arrays of strings a1 and a2 return a sorted array r 
// in lexicographical order of the strings of a1 which are substrings of strings of a2.

function inArray(array1, array2) {
  var i, j, result = [];

  outer: for (j = 0; j < array1.length; j++) {
      for (i = 0; i < array2.length; i++) {
          if (array2[i].includes(array1[j])) {
              result.push(array1[j]);
              continue outer;
          }
      }
  }
  return result.sort();
}

var Test = {
  assertSimilar: function (a, b) {
      console.log('result', a);
      console.log('given', b);
  }
};

a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
a1 = ["xyz", "live", "strong"];
Test.assertSimilar(inArray(a1, a2), ["live", "strong"]);
a1 = ["live", "strong", "arp"];
Test.assertSimilar(inArray(a1, a2), ["arp", "live", "strong"]);
a1 = ["tarp", "mice", "bull"];
Test.assertSimilar(inArray(a1, a2), []);