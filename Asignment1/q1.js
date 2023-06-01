function targetSum(nums, target) {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numMap) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }
}
const nums = [3, 8, 7, 15, 5];
const target = 15;
const result = targetSum(nums, target);
console.log(result);
