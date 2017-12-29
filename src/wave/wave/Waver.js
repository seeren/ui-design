import { CenterWave } from "./../view/CenterWave";
import { LeftWave } from "./../view/LeftWave";
import { RightWave } from "./../view/RightWave";

/**
 * @type {Waver}
 */
export class Waver {

    /**
     * @constructor
     */
    constructor () {
        let waveable = window.document.querySelectorAll('.ui.wave');
        for (let i = 0, l = waveable.length; i < l; i++) {
            let color = this.getColor(waveable[i]);
            let targetedColor = this.getTargetedColor(waveable[i]);
            if (/wave-left/.test(waveable[i].className)) {
                new LeftWave(waveable[i], color, targetedColor);
            } else if (/wave-right/.test(waveable[i].className)) {
                new RightWave(waveable[i], color, targetedColor);
            } else {
                new CenterWave(waveable[i], color, targetedColor);
            }
        }
    }

    /**
     * Get color
     * 
     * @param {HTMLElement} waveable
     * @returns {String}
     */
    getColor (waveable) {
        return window.getComputedStyle(waveable).getPropertyValue(
            "background-color"
        );
    }

    /**
     * Get targeted
     * 
     * @param {HTMLElement} waveable
     * @returns {HTMLElement}
     */
    getTargetedColor (waveable) {
        let target = window.document.createElement("div");
        target.setAttribute("class", waveable.className + " targeted");
        target.style.display = "none";
        waveable.parentNode.insertBefore(target, waveable);
        let color = this.getColor(target);
        target.parentNode.removeChild(target);
        return color;
    }

}