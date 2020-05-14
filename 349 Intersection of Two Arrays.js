
/* SOLUTION 1 SPLICE */
// var intersect = function(nums1, nums2) {
//   let result = []
//   for (let i of nums2) {
//       if (nums1.includes(i)){
//           result.push(i)
//           nums1.splice(nums1.indexOf(i),1)
//       }
//   }
//   return result

// };

/* SOLUTION 2 HASH then ARRAY*/
var intersect = function(nums1, nums2) {
  let hash = {}
  let result = []

  for (let i of nums1){
    debugger
    hash[i] = hash[i]+1 || 1
  }
  console.log(hash)

  for (let number of nums2){
    if (hash[number]) {
      hash[number]--
      result.push(number)
    }
  }
  return result

};

intersect([1,2,2,3], [1,2])
