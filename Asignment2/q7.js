function monotonic(nums) {
  const n = nums.length;
  let inc = true;
  let dec = true;

  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) {
      inc = false;
    }

    if (nums[i] > nums[i - 1]) {
      dec = false;
    }
  }

  return inc || dec;
}

const nums = [1, 2, 2, 3];
const result = monotonic(nums);
console.log(result);
