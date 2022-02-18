// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together 
// the nodes of the first two lists.

var mergeTwoLists = function(l1, l2) {
  var mergedHead = { val : -1, next : null },
      crt = mergedHead;
  while(l1 && l2) {
      if(l1.val > l2.val) {
          crt.next = l2;
          l2 = l2.next;
      } else {
          crt.next = l1;
          l1 = l1.next;
      }
      crt = crt.next;
  }
  crt.next = l1 || l2;
  
  return mergedHead.next;
};