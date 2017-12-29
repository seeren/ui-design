import { Wave } from "./Wave";
import { default as radial } from "./../template/radial";

/**
 * @type {RightWave}
 */
export  class RightWave extends Wave {

    /**
     * Render
     * 
     * @param {MouseEvent} e 
     */
    render (e) {
        this.x = 100;
        this.y = 50;
        this.size = 0;
        this.renderWave();
    }

}