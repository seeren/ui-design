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
        let callback = !/parallax-scroll/.test(parallaxe.className)
            ? e => `50% ${100 - (top / (window.innerHeight + shape.height) * 100)}%`
            : e => `50% ${top / (window.innerHeight + shape.height) * 100}%`;
        this.render = () => {
            shape = parallaxe.getBoundingClientRect();
            top = shape.top + shape.height;
            if (shape.top < window.innerHeight && top > 0) {
                parallaxe.style.backgroundPosition = callback();
            }
        };
    }

}