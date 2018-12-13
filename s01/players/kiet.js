const chainIf = cases => input =>
  cases.reduce((acc, curr) => (curr[0](input) ? curr[1](acc) : acc), "");
const constant = value => () => value;
const True = constant(true);
const append = value => initialValue => `${initialValue}${value}`;
const when = (predicate, func) => value =>
  predicate(value) ? func(value) : value;
const isStringEmpty = value => value === "";
const isMultipleOf = number => input => input % number === 0;

export const kiet = input =>
  chainIf([
    [isMultipleOf(3), append("fizz")],
    [isMultipleOf(5), append("buzz")],
    [isMultipleOf(7), append("hiss")],
    [isMultipleOf(11), append("howl")],
    [True, when(isStringEmpty, constant(input))]
  ])(input);

const makeFizzBuzz = config => input =>
  config.reduce(
    (acc, curr) => (!(input % curr[0]) ? acc + curr[1] : acc),
    ""
  ) || input;

export const kietReborn = makeFizzBuzz([
  [3, "fizz"],
  [5, "buzz"],
  [7, "hiss"],
  [11, "howl"]
]);
