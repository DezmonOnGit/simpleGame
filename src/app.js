import "./sass/default.sass";
import "./sass/game.sass";

import Game from "./components/game";

const mainGame = new Game();

mainGame.createGame(300, 300);
mainGame.start();
mainGame.addBar();


console.log(mainGame);
