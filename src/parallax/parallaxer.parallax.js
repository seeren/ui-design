import { Background } from "./background.parallax";
import { Target } from "./target.parallax";

/**
 * @type {Parallaxer}
 */
export let Parallaxer = (() => {

    let callback;

    let update = () => {
        for (let i = 0, l = callback.length; i < l; i++) {
            callback[i]();
        }
    };

    return class Parallaxer {

        /**
         * @constructor
         */
        constructor () {
            this.update();
            if (callback.length > 0) {
                window.addEventListener("scroll", update);
                window.addEventListener("resize", update);
            }
        }

        /**
         * Update
         */
        update () {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
            callback = [];
            let parallax = window.document.querySelectorAll(".ui.parallax");
            for (let i = 0, l = parallax.length; i < l; i++) {
                /parallax-target/.test(parallax[i].className)
              ? callback.push((new Target(parallax[i], callback)).render)
              : callback.push((new Background(parallax[i])).render);
            }
            update();
        }

    }

})();