export default class Game {
    constructor () {

    }

    renderGame() {

        return `<div class="game">
                    ${this.renderField()}
                </div>`;
    }

    renderField() {
        return `<div class="game__field"></div>`;
    }
}