const corresp = {
  3: "fizz",
  5: "buzz",
  7: "hiss",
  11: "howl"
};

export const louis = function(input) {
  let rep = "";
  Object.keys(corresp).forEach(key => {
    if (input % key === 0) rep += corresp[key];
  });
  rep = rep !== "" ? rep : input;
  return rep;
};
