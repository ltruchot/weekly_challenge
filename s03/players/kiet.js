export const kiet = input => {
  let value = +input;
  let largestPrime = -1;

  if (!value || value <= 1) {
    return largestPrime;
  }

  while (value % 2 === 0) {
    largestPrime = 2;
    value /= 2;
  }

  for (let i = 3; i <= Math.sqrt(value); i += 2) {
    while (value % i === 0) {
      largestPrime = i;
      value /= i;
    }
  }

  return value > largestPrime ? value : largestPrime;
};
