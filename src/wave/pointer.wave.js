import { Wave } from "./wave.wave";

/**
 * @type {Pointer}
 */
export class Pointer extends Wave {

    /**
     * @param {MouseEvent} e 
     * @param {HTMLElement} wave 
     */
    update(e, wave) {
        let shape = wave.getBoundingClientRect();
        this.x =  window.parseInt((e.clientX - shape.left) / shape.width * 100, 10);
        this.y = window.parseInt((e.clientY - shape.top) / shape.height * 100, 10);
    }

}