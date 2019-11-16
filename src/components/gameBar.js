import Game from "./game";
import abstractClass from "./abstractClass";

export default class Bar extends abstractClass{

    constructor (gameNode){
        super();

        if(typeof gameNode === 'undefined') {
            gameNode = document.querySelector('.game');
        }

        this.gameNode = gameNode;
    }

    addGameBar() {
        this.createWrapper();
        this.createCounter();
    }

    createWrapper() {
        let wrapper = `<div class="game__bar"></div>`;

        this.renderHTML(this.gameNode, wrapper, 'afterbegin');
        this.node = document.querySelector('.game__bar');
    }

    createCounter(counter = 0) {

        let points = `<div class="game__points">${counter}</div>`;

        this.renderHTML(this.node, points, 'afterbegin');

        this.pointsNode = this.node.querySelector('.game__points');
        this.points = counter;
    }

    resetCounter() {
        this.pointsNode.innerHTML = 0;
        this.points = 0;
    }

    increaseCounter(growth) {
        if(typeof growth === 'undefined') {
            growth = 1;
        }

        console.log(growth, this.points);
        this.points += growth;

        this.pointsNode.innerHTML = this.points;
    }

}