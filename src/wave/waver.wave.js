import { Pointer } from "./pointer.wave";
import { Left } from "./left.wave";
import { Right } from "./right.wave";

/**
 * @type {Waver}
 */
export class Waver {

    /**
     * @constructor
     */
    constructor () {
        this.update();
    }

    /**
     * @param {HTMLElement} waveable
     * @returns {String}
     */
    getColor (waveable) {
        return window.getComputedStyle(waveable).getPropertyValue(
            "background-color"
        );
    }

    /**
     * @param {HTMLElement} waveable
     * @returns {String}
     */
    getTargetColor (waveable) {
        let target = window.document.createElement("div");
        target.setAttribute("class", waveable.className + " target");
        target.style.display = "none";
        waveable.parentNode.insertBefore(target, waveable);
        let color = this.getColor(target);
        target.parentNode.removeChild(target);
        return color;
    }

    /**
     * Update
     */
    update () {
        let wave = window.document.querySelectorAll(".ui.wave");
        for (let i = 0, l = wave.length; i < l; i++) {
            let color = this.getColor(wave[i]);
            let targetColor = this.getTargetColor(wave[i]);
            /wave-left/.test(wave[i].className)
          ? new Left(wave[i], color, targetColor)
          : (/wave-right/.test(wave[i].className)
          ? new Right(wave[i], color, targetColor)
          : new Pointer(wave[i], color, targetColor));
        }
    }

}