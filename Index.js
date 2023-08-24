const Game = require("./Game");

let [clg] = Game.newGame("Allen", "Harry");
console.log(clg);

console.log(clg.play(0));
console.log(clg.play(1));
console.log(clg.play(4));
console.log(clg.play(2));
console.log(clg.play(8));