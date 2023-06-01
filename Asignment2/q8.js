function minScore(nums, k) {
  const n = nums.length;
  let minVal = nums[0];
  let maxVal = nums[0];

  for (let i = 1; i < n; i++) {
    minVal = Math.min(minVal, nums[i]);
    maxVal = Math.max(maxVal, nums[i]);
  }

  if (maxVal - minVal <= 2 * k) {
    return 0;
  }

  minVal += k;
  maxVal -= k;

  for (let i = 0; i < n; i++) {
    minVal = Math.min(minVal, nums[i]);
    maxVal = Math.max(maxVal, nums[i]);
  }

  return maxVal - minVal;
}

const nums = [1];
const k = 0;
const output = minScore(nums, k);
console.log(output);
