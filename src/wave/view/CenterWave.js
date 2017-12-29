import { Wave } from "./Wave";
import { default as radial } from "./../template/radial";

/**
 * @type {CenterWave}
 */
export  class CenterWave extends Wave {

    /**
     * Render
     * 
     * @param {MouseEvent} e 
     */
    render (e) {
        let shape = this.waveable.getBoundingClientRect();
        this.x =  window.parseInt((e.clientX - shape.left) / shape.width * 100, 10);
        this.y =  window.parseInt((e.clientY - shape.top) / shape.height * 100, 10);
        this.size = 0;
        this.renderWave();
    }

}