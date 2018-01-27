
/**
 * @type {Scroll}
 */
export class Scroll {

    /**
     * @constructor
     */
    constructor () {
        window.onscroll = () => {

            console.log(true);
        }
    }
   
    /**
     * Create debug Scroll
     */
    render () {  
    }

    /**
     * Register abort event handler
     * 
     * @param {Function} callback
     * @returns {Scroll}
     */
    onabort (callback) {
        return this;
    }

};