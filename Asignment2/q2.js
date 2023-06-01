function candies(candyType) {
  const uniqueCandies = new Set(candyType);
  const maxAllowed = candyType.length / 2;

  return Math.min(uniqueCandies.size, maxAllowed);
}
const candyType = [1, 1, 2, 2, 3, 3];
const result = candies(candyType);
console.log(result);
