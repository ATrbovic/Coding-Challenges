// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
  while(true) {
    let idx = partition(nums);
    if(nums.length - idx == k) {
      return nums[idx];
    } else if(nums.length - idx > k) {
      nums = nums.slice(idx + 1);
    } else {
      k = k - (nums.length - idx);
      nums = nums.slice(0, idx);
    }
  }
};

function partition(nums) {
  let l = -1;
  let r = 0;
  let pivot = nums[nums.length - 1];
  
  while(r < nums.length - 1) {
    if(nums[r] <= pivot) {
      l++;
      swap(nums, l, r);
    }
    r++;
  }
  swap(nums, l + 1, r);
  return l + 1;
}

function swap(nums, i, j) {
  if(i == j) return;
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}