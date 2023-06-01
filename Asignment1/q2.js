function removeElement(nums, val) {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }
  return pointer;
}
const nums = [5, 2, 7, 3, 7, 4, 7, 8, 9, 7];
const val = 7;
const result = removeElement(nums, val);
console.log(result);
console.log(nums);
