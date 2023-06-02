function uniqueNumber(nums) {
  let numSet = new Set();

  for (let num of nums) {
    if (numSet.has(num)) {
      numSet.delete(num);
    } else {
      numSet.add(num);
    }
  }

  return Array.from(numSet)[0];
}

const nums = [2, 2, 1];
const result = uniqueNumber(nums);
console.log(result);
