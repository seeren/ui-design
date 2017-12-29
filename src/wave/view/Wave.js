import { default as radial } from "./../template/radial";

/**
 * @type {Wave}
 */
export class Wave {

    /**
     * @constructor
     * 
     * @param {HTMLElement} waveable
     * @param {String} color
     * @param {String} targetedColor
     */
    constructor (waveable, color, targetedColor) {
        this.waveable        = waveable;
        this.color           = color;
        this.targetedColor   = targetedColor;
        this.timeout         = 0;
        this.x               = 0;
        this.y               = 0;
        this.size            = 0;
        waveable.onmousedown = this.render.bind(this);
    }

    /**
     * Render wave
     */
    renderWave () {
        this.timeout = window.clearTimeout(this.timeout);
        this.waveable.style.background = radial(
            this.color,
            this.x,
            this.y,
            this.size,
            this.targetedColor,
            this.color
        );
        if (100 < this.size) {
            this.waveable.style.background = radial(
                this.targetedColor, 
                this.x, 
                this.y,
                this.size,
                this.targetedColor,
                this.color
            );
            this.timeout = window.setTimeout((() => {
                this.waveable.removeAttribute("style");
                this.size = 0;
            }).bind(this), 300);
            return;
        }
        this.size += 8;
        this.timeout = window.setTimeout(this.renderWave.bind(this), 15);
    }

}