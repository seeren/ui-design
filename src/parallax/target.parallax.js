/**
 * @type {Target}
 */
export class Target {

    /**
     * @constructor
     * 
     * @param {HTMLElement} parallaxe
     */
    constructor(parallaxe, callback) {
        let shape;
        this.render = () => {
            shape = parallaxe.getBoundingClientRect();
            if (shape.top + shape.height * 1/3 < window.innerHeight * 7/8
             && shape.top + shape.height * 2/3 > window.innerHeight * 1/8) {
                parallaxe.className += " target";
                callback.splice(callback.indexOf(this.render), 1);
            }
        };
    }

}