///Given two arrays of strings a1 and a2 return a sorted array r 
// in lexicographical order of the strings of a1 which are substrings of strings of a2.

unction inArray(array1,array2){
  const _match = []

  for (let i = 0; i < array2.length; i++) {
    for (let x = 0; x < array1.length; x++) {
      const a1El = array1[x];
      const a2El = array2[i];
      if (a2El.includes(a1El)) {
        _match.push(a1El)
      }
    }
  }

  return _match.filter((el, i, a) => a.indexOf(el) === i).sort((a, b) => {
    const _a = a.toLowerCase();
    const _b = b.toLowerCase();

    if (_a < _b) {
      return -1;
    }

    return 1;
  })
}