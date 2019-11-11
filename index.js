const lobby = {
  games: [],
  players: []
};

let create = () => {
  const game = { name: "test" };
  lobby.games.push(game);
};

create();

const report = JSON.stringify(lobby, null, 2);

console.log("report test:", report);
