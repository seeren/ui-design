import { default as gradient } from "./radial.gradient";

/**
 * @type {Wave}
 */
export class Wave {

    /**
     * @constructor
     * 
     * @param {HTMLElement} wave
     * @param {String} color
     * @param {String} targetColor
     */
    constructor(wave, color, targetColor) {
        let size = 0;
        let timeout = 0;
        let fps = 1000 / 50;
        let now = Date.now();
        let from = Date.now();
        let diff;
        this.render = () => {
            timeout = window.clearTimeout(timeout);
            timeout = window.requestAnimationFrame(this.render);
            now = Date.now();
            diff = now - from;
            if (diff > fps) {
                from = now - (diff % fps);
                wave.style.background = gradient(
                    color, this.x, this.y, size, targetColor, color
                );
                if (100 < size) {
                    wave.style.background = gradient(
                        targetColor, this.x, this.y, size, targetColor, color
                    );
                    window.cancelAnimationFrame(timeout)
                    return timeout = window.setTimeout(() => {
                        wave.removeAttribute("style");
                    }, 300);
                }
                size += 8;
            }
        };
        wave.onmousedown = (e) => {
            this.update(e, wave);
            size = 0;
            this.render();
        }
    }

}