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
            let parallaxe = window.document.querySelectorAll(".ui.parallax");
            for (let i = 0, l = parallaxe.length; i < l; i++) {
                /parallax-target/.test(parallaxe[i].className)
              ? callback.push((new Target(parallaxe[i], callback)).render)
              : callback.push((new Background(parallaxe[i])).render);
            }
        }

    }

})();