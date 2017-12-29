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
        let waveables = window.document.querySelectorAll(".ui.wave");
        for (let i = 0, l = waveables.length; i < l; i++) {
            let waveable = waveables[i];
            let color = this.getColor(waveable);
            let targetedColor = this.getTargetedColor(waveable);
            if (/wave-left/.test(waveable.className)) {
                new LeftWave(waveable, color, targetedColor);
                continue;
            } else if (/wave-right/.test(waveable.className)) {
                new RightWave(waveable, color, targetedColor);
                continue;
            }
            new CenterWave(waveable, color, targetedColor);
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