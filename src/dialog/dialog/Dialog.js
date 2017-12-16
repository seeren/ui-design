
import { View } from "./../view/View";

/**
 * @type {Dialog}
 */
export let Dialog = ((() => {

    /**
     * @type {View}
     */
    let view;

    /**
     * Class for create an ui for dialog
     */
    return class Dialog {

        /**
         * @constructor
         * 
         * @param {View} factory
         */
        constructor (factory) {
            if (!(factory instanceof View)) {
                throw new window.Error("A View must be provided");
            }
            view = factory;
        }

        /**
         * Create emergency dialog
         * 
         * @param {String} title
         * @param {String} message
         * @returns {Dialog}
         * 
         * @throws {Error} for invalid argument exception
         */
        emergency (title, message) {
            view.render(title, message, "emergency");
            return this;
        }

        /**
         * Create alert dialog
         * 
         * @param {String} title
         * @param {String} message
         * @returns {Dialog}
         * 
         * @throws {Error} for invalid argument exception
         */
        alert (title, message) {
            view.render(title, message, "alert");
            return this;    
        }

        /**
         * Create critical dialog
         * 
         * @param {String} title
         * @param {String} message
         * @returns {Dialog}
         * 
         * @throws {Error} for invalid argument exception
         */
        critical (title, message) {
            view.render(title, message, "critical");
            return this;    
        }

        /**
         * Create error dialog
         * 
         * @param {String} title
         * @param {String} message
         * @returns {Dialog}
         * 
         * @throws {Error} for invalid argument exception
         */
        error (title, message) {
            view.render(title, message, "error");
            return this;    
        }

        /**
         * Create warning dialog
         * 
         * @param {String} title
         * @param {String} message
         * @returns {Dialog}
         * 
         * @throws {Error} for invalid argument exception
         */
        warning (title, message) {
            view.render(title, message, "warning");
            return this;    
        }

        /**
         * Create notice dialog
         * 
         * @param {String} title
         * @param {String} message
         * @returns {Dialog}
         * 
         * @throws {Error} for invalid argument exception
         */
        notice (title, message) {
            view.render(title, message, "notice");
            return this;    
        }

        /**
         * Create info dialog
         * 
         * @param {String} title
         * @param {String} message
         * @returns {Dialog}
         * 
         * @throws {Error} for invalid argument exception
         */
        info (title, message) {
            view.render(title, message, "info");
            return this;    
        }

        /**
         * Create debug dialog
         * 
         * @param {String} title
         * @param {String} message
         * @returns {Dialog}
         * 
         * @throws {Error} for invalid argument exception
         */
        debug (title, message) {
            view.render(title, message, "debug");
            return this;    
        }

        /**
         * Register abort event handler
         * 
         * @param {Function} callback
         * @returns {Dialog}
         */
        onabort (callback) {
            view.onabort( callback);
            return this;
        }

        /**
         * Register confirm event handler
         * 
         * @param {String} title
         * @param {Function} callback
         * @returns {Dialog}
         */
        onconfirm (title, callback) {
            view.onconfirm(title, callback);
            return this;
        }

        /**
         * Register cancel event handler
         * 
         * @param {String} title
         * @param {Function} callback
         * @returns {Dialog}
         */
        oncancel (title, callback) {
            view.oncancel(title, callback);
            return this;
        }

    };

})());