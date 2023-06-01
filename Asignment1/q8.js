function findMissingNums(nums) {
  const n = nums.length;
  const count = new Array(n + 1).fill(0);
  let duplicate, missing;

  for (const num of nums) {
    count[num]++;
    if (count[num] === 2) {
      duplicate = num;
    }
  }

  for (let i = 1; i <= n; i++) {
    if (count[i] === 0) {
      missing = i;
      break;
    }
  }

  return [duplicate, missing];
}

const nums = [1, 2, 2, 4];
const result = findMissingNums(nums);
console.log(result);
