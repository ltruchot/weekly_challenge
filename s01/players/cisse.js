const keys = [
  {
    value: "fizz",
    divider: 3
  },
  {
    value: "buzz",
    divider: 5
  },
  { value: "hiss", divider: 7 },
  { value: "howl", divider: 11 }
];

export const cisse = (number, tab = keys) => {
  const string = tab.reduce(
    (acc, { divider, value }) =>
      number > 0 && number % divider === 0 ? `${acc}${value}` : acc,
    ""
  );
  return string.length > 0 ? string : number;
};

// const logFizzBuzzNumber = (tab = keys) => number =>
//   console.log(number, cisse(number, tab));

// const count = (targetNum, fn, cpt = 0) => {
//   fn(cpt);
//   return cpt < targetNum ? count(targetNum, fn, cpt + 1) : cpt;
// };

// const countFizzBuzz = (number, tab = keys) => {
//   count(number, logFizzBuzzNumber(tab));
// };

// // test
// // countFizzBuzz(35 * 3);
// countFizzBuzz(35 * 3, [
//   {
//     value: "fizz",
//     divider: 3
//   },
//   {
//     value: "buzz",
//     divider: 5
//   },
//   { value: "yo", divider: 7 },
//   { value: "hey", divider: 10 }
// ]);
