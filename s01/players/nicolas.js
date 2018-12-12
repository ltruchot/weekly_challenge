const converters = {
  3: "fizz",
  5: "buzz",
  7: "hiss",
  11: "howl"
};
const fizzBuzzHissHowlAndMore = c => n =>
  Object.keys(c).reduce((a, k) => (n % k === 0 ? a + c[k] : a), "") || n;
export const nicolas = fizzBuzzHissHowlAndMore(converters);
