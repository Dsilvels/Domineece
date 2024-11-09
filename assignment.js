//this function is creatred to store numbers
function twoSum(nums, target) {
let map = new Map ();
//loop the elements in the array
 for (let i = 0; i < nums.length; i++) {
// find the difference
let difference = target - nums[i];
//connect back to map to make sure map has difference
if (map.has(difference)) {
return [map.get(difference), i];
} 
// Store the current number
map.set(nums[i], i); }
// If no solution is found, return an empty array return 
[];
}



// Test cases 
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2] 
// Edge cases
console.log(twoSum([0, 4, 3, 0], 0)); 
console.log(twoSum([], 0)); 
