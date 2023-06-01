function maxProduct(nums) {
  nums.sort((a, b) => b - a);

  const product1 = nums[0] * nums[1] * nums[2];

  const product2 = nums[0] * nums[nums.length - 1] * nums[nums.length - 2];

  return Math.max(product1, product2);
}

const nums = [1, 2, 3];
const result = maxProduct(nums);
console.log(result);
