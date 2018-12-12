export const stephanie = (i, ...otherConditions) => {
  // Check arguments' format
  if (!Number.isInteger(i)) return "Please enter an integer as first argument";

  const checkConditions = cond =>
    !Array.isArray(cond) ||
    cond.length !== 2 ||
    typeof cond[0] !== "string" ||
    !Number.isInteger(cond[1]);

  if (otherConditions.some(checkConditions))
    return 'Please enter a valid format for the conditions (ex: ["my-word", 8]).';

  // Word/integer association
  const pairs = [
    ["fizz", 3],
    ["buzz", 5],
    ["hiss", 7],
    ["howl", 11],
    ...otherConditions
  ];

  const str = pairs.reduce(
    (acc, [word, nb]) => `${acc}${!(i % nb) ? word : ""}`,
    ""
  );
  return str.length ? str : i;
};
