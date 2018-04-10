import { Wave } from "./wave.wave";

/**
 * @type {Right}
 */
export class Right extends Wave {

    /**
     * @param {MouseEvent} e 
     * @param {HTMLElement} wave 
     */
    update(e, wave) {
        this.x =  100;
        this.y = 50;
    }

}