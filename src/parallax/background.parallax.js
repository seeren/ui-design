/**
 * @type {Background}
 */
export class Background {

    /**
     * @constructor
     * 
     * @param {HTMLElement} parallaxe
     */
    constructor(parallaxe) {
        let shape;
        let top;
        let callback
        this.render = () => {
            shape = parallaxe.getBoundingClientRect();
            top = shape.top + shape.height;
            if (shape.top < window.innerHeight && top > 0) {
                parallaxe.style.backgroundPosition = callback();
            }
        };
        if (/parallax-fixed/.test(parallaxe.className)) {
            callback = !/parallax-neg/.test(parallaxe.className)
                ? () => { return `50% ${150 - (top / (window.innerHeight + shape.height) * 100)}%` }
                : () => { return `50% ${top / (window.innerHeight + shape.height) * 100}%` };
            return;
        }
        callback = /parallax-neg/.test(parallaxe.className)
            ? () => { return `50% ${100 - (top / (window.innerHeight + shape.height) * 100)}%` }
            : () => { return `50% ${top / (window.innerHeight + shape.height) * 100}%` };
    }

}