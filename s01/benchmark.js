import { players } from "./players";
players.forEach(player => {
  suite("iterations:", function() {
    const iterations = 10000;
    benchmark(`${player.name}'s function`, function() {
      for (var i = 1; i < iterations; i++) {
        player.fn(i);
      }
    });
  });
});
