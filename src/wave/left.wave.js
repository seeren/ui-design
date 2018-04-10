import { Wave } from "./wave.wave";

/**
 * @type {Left}
 */
export class Left extends Wave {

    /**
     * @param {MouseEvent} e 
     * @param {HTMLElement} wave 
     */
    update(e, wave) {
        this.x =  0;
        this.y = 50;
    }

}