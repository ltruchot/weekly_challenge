const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const isMultipleOf = int => v => v % int === 0;
const lastTruthyInPair = pair => pair[1] || pair[0];

const replaceMutiple = (mul, str) => v => {
  const pair = [v[0] || v, v[1] || ""];
  const checkMultiple = isMultipleOf(mul);
  const computedValue = checkMultiple(pair[0]) ? pair[1] + str : pair[1];
  return [pair[0], computedValue];
};

export const loic = pipe(
  replaceMutiple(3, "fizz"),
  replaceMutiple(5, "buzz"),
  replaceMutiple(7, "hiss"),
  replaceMutiple(11, "howl"),
  lastTruthyInPair
);
