// Write an algorithm that takes an array and moves all of the zeros to the end, 
// preserving the order of the other elements.

var moveZeros = function (arr) {
  let final = [];
  let zeros = [];

  arr.map(value => {
    if(value === 0){
      zeros.push(0);
    }else{
      final.push(value);
    }
  })

  return final.concat(zeros);
}