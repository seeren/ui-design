/**
 * @type {Target}
 */
export class Target {

    /**
     * @constructor
     * 
     * @param {HTMLElement} parallax
     */
    constructor(parallax, callback) {
        let shape;
        this.render = () => {
            shape = parallax.getBoundingClientRect();
            if (shape.top + shape.height * 1/3 < window.innerHeight * 7/8
             && shape.top + shape.height * 2/3 > window.innerHeight * 1/8) {
                parallax.className += " target";
                callback.splice(callback.indexOf(this.render), 1);
            }
        };
    }

}