export const fizzBuzzHissHowl = (int) => {
  let res = '';
  if (int % 3 === 0) {
    res += 'fizz';
  }
  if (int % 5 === 0) {
    res += 'buzz';
  }
  if (int % 7 === 0) {
    res += 'hiss';
  }
  if (int % 11 === 0) {
    res += 'howl';
  }

  if (!res) {
    res = int;
  }

  return res;
};
