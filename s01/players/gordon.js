export const gordon = num => {
  return (
    (num % 3 ? "" : "fizz") +
      (num % 5 ? "" : "buzz") +
      (num % 7 ? "" : "hiss") +
      (num % 11 ? "" : "howl") || num
  );
};
