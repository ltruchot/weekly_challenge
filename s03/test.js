import { players } from "./players";

describe("Largest prime factor", () => {
  players.forEach(player => {
    it(`${player.name}'s function is working`, () => {
      expect(player.fn(600851475143)).toEqual(6857);
    });
  });
});
