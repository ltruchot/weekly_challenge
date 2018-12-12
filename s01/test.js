import { players } from "./players";
import { fizzBuzzHissHowl } from "./solution";

describe("fizzbuzzhisshowl", () => {
  let toTest;
  const iterations = 10000;

  beforeEach(() => {
    toTest = [];
    for (let i = 1; i < iterations; i++) {
      toTest.push(fizzBuzzHissHowl(i));
    }
  });
  players.forEach(player => {
    it(`${player.name}'s function is working`, () => {
      const test = [];
      for (let i = 1; i < iterations; i++) {
        test.push(player.fn(i));
      }
      expect(test).toEqual(toTest);
    });
  });
});
