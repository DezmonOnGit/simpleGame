import "./sass/default.sass";
import "./sass/game.sass";

import game from "./components/game";

const workarea =  document.getElementById('workarea');
const field = new game();

workarea.insertAdjacentHTML('afterbegin', field.renderGame());

console.log(field);
