const infos = [
  { number: 3, text: "fizz" },
  { number: 5, text: "buzz" },
  { number: 7, text: "hiss" },
  { number: 11, text: "howl" }
];

export const bastien = value => {
  const result = infos.reduce(
    (acc, info) => (acc += value % info.number === 0 ? info.text : ""),
    ""
  );
  return !result ? value : result;
};
