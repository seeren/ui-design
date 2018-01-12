import { Wave } from "./Wave";
import { default as radial } from "./../template/radial";

/**
 * @type {LeftWave}
 */
export  class LeftWave extends Wave {

    /**
     * Render
     * 
     * @param {MouseEvent} e 
     */
    render (e) {
        this.x = 0;
        this.y = 50;
        this.size = 0;
        this.renderWave();
    }

}