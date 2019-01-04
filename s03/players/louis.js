export const louis = input => {
  let i;
  for (i = 2; i < input; i++) {
    if (input % i == 0) {
      while (input % i == 0) {
        input /= i;
      }
    }
  }
  return i;
};

export const louisReborn = input => {
  // all prime number (exept 2 and 3) are in the form 6N-1 || 6N+1
  while (input % 2 == 0) input /= 2;
  while (input % 3 == 0) input /= 3;
  for (let i = 6; i <= input; i += 6) {
    const mun = i - 1;
    if (input % mun == 0) {
      while (input % mun == 0) {
        input /= mun;
      }
    }
    const pun = i + 1;
    if (input % pun == 0) {
      while (input % pun == 0) {
        input /= pun;
      }
    }
  }
  return input;
};
