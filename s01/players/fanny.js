export const fanny = nb => {
  const rules = {
    3: "fizz",
    5: "buzz",
    7: "hiss",
    11: "howl"
  };
  return Object.keys(rules).reduce(
    (acc, key, index, array) =>
      nb % key === 0 && nb !== 0
        ? acc + rules[key]
        : index === array.length - 1 && acc === ""
        ? nb
        : acc,
    ""
  );
};
