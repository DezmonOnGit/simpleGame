import AbstractClass from "./abstractClass";
import GameBar from "./gameBar";

export default class Game extends AbstractClass{
    constructor () {
        super();

        this.workarea = document.getElementById('workarea');
    }

    createGame(fieldWidth, fieldHeight) {
        let wrapper = `<div class="game">${this.makeField(fieldWidth, fieldHeight)}</div>`;

        this.renderHTML(this.workarea, wrapper, 'afterbegin');

        this.wrapper = document.querySelector('.game');
        this.field.node = document.querySelector('.game__field');
    }

    makeField(width, height) {
        if(typeof width === 'number') {
            width += 'px';
        }

        if(typeof height === 'number') {
            height += 'px';
        }

        this.field = {
            width: width || '500px',
            height: height || '500px',
        };

        return `<div class="game__field" style="width:${this.field.width}; height:${this.field.height};"></div>`;
    }

    createGameItem(width, height, color) {
        this.item = {
            width: width || this.getRandom(20, 50) + 'px',
            height: height || this.getRandom(20, 50) + 'px',
            color: color || 'white',
        };

        this.item.offsetX = this.getRandom(0, (parseInt(this.field.width) - parseInt(this.item.width))) + 'px';
        this.item.offsetY = this.getRandom(0, (parseInt(this.field.height) - parseInt(this.item.height))) + 'px';

        let item = `<div class="game__item" style="width:${this.item.width}; height:${this.item.height}; top:${this.item.offsetY}; left:${this.item.offsetX}; background-color:${this.item.color}"></div>`

        this.renderHTML(this.field.node, item, 'afterbegin');
        this.item.node = document.querySelector('.game__item');
    }

    start() {
        this.createGameItem();
        this.itemOnClick();
    }

    itemOnClick() {
        this.field.node.addEventListener('click', (evt) => {
            if(evt.target.classList.contains('game__item')) {
                this.item.node.remove();
                this.item = {};

                this.createGameItem();

                if(typeof this.bar !== 'undefined') {
                    this.bar.increaseCounter();
                }
            }
        });
    }

    addBar() {
        this.bar = new GameBar();
        this.bar.addGameBar();
    }
}