export default class Abstract {
    constructor() {

    };

    getRandom(min, max) {
        if(typeof min === 'string') {
            min = parseFloat(min);
        }

        if(typeof max === 'string') {
            max = parseFloat(max);
        }

        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    };

    renderHTML(parent, child, position) {
        parent.insertAdjacentHTML(position, child);

        return {
            parent: parent,
            child: child,
        };
    }
}