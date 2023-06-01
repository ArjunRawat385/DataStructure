function longestHarmoniousSub(nums) {
  const numCount = new Map();
  let longestSubsequence = 0;

  for (const num of nums) {
    numCount.set(num, (numCount.get(num) || 0) + 1);
  }

  for (const [num, count] of numCount) {
    if (numCount.has(num + 1)) {
      const currentSubsequence = count + numCount.get(num + 1);
      longestSubsequence = Math.max(longestSubsequence, currentSubsequence);
    }
  }

  return longestSubsequence;
}

const nums = [1, 3, 2, 2, 5, 2, 3, 7];
const output = longestHarmoniousSub(nums);
console.log(output);
