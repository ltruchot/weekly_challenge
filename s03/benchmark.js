import { players } from "./players";
players.forEach(player => {
  suite("iterations:", function() {
    benchmark(`${player.name}'s function`, function() {
      player.fn(600851475143);
    });
  });
});
