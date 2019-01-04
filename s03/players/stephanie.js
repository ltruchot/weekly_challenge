// + rapide, callstack moins surchargé
export const stephanie = nb => {
  for (let i = 2; i < nb; i++) {
    if (nb % i === 0) {
      return stephanie(nb / i);
    }
  }
  return nb;
};

// + fonctionnel mais - rapide et risque de surcharge du callstack
export const stephanieReborn = (factor, i = 2) =>
  i < factor
    ? stephanieReborn(factor % i === 0 ? factor / i : factor, ++i)
    : factor;
