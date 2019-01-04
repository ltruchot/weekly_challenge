export const loic = (n, factor = 2) => {
  while (factor) {
    const prod = n / factor;
    if (prod === 1) {
      return factor;
    } else if (Number.isInteger(prod)) {
      return loic(prod, factor);
    }
    factor++;
  }
};
