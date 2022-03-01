// Given two sorted arrays nums1 and nums2 of size m and n respectively, 
// return the median of the two sorted arrays.

var findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let a=0,b=0;
  for(let k=0;k<(m+n+1)/2;k++){
      let i = nums1[0];
      let j = nums2[0];
      a=b;
      if(i!=undefined && (j==undefined ||i<j)){
          b = nums1.shift();
      }
      else {
          b = nums2.shift();
      }
  }  
  return (m+n)%2===0 ? (a+b)/2:b;
};