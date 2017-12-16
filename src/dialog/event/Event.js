
/**
 * @type {Event}
 */
export let Event = ((() => {

    /**
     * Invok
     * 
     * @param {Function} callback
     * 
     * @throws {Error} for callback exception
     */
    let invok = (callback) => {
        try {
            if ("function" === typeof callback) {
                callback();
            }
        } catch (e) {
            throw new window.Error("Event exception: " + e.message);
        }
    };

    /**
     * Class for handle events
     */
    return class Event {

        /**
         *  @constructor
         */
        constructor () {

            /**
             * @type {Function}
             */
            let abort;

            /**
             * @type {Function}
             */
            let confirm;

            /**
             * @type {Function}
             */
            let cancel;

            /**
             * Set
             * 
             * @param {String} type
             * @param {Function} callback
             */
            this.set = (type, callback) => {
                if ("abort" === type) {
                    abort = callback;
                } else if ("confirm" === type) {
                    confirm = callback;
                } else if ("cancel" === type) {
                    cancel = callback;
                }
            };

            /**
             * Get
             * 
             * @param {String} type
             * @returns {Function}
             */
            this.get = (type) => {
                if ("abort" === type) {
                    return abort;
                }
                if ("confirm" === type) {
                    return confirm;
                }
                if ("cancel" === type) {
                    return cancel;
                }
            };

        }

        /**
         * Register abort event
         * 
         * @param {Function} callback
         */
        onabort (callback) {
            this.set("abort", callback);
        }

        /**
         * Register confirm event
         * 
         * @param {Function} callback
         */
        onconfirm (callback) {
            this.set("confirm", callback);
        }

        /**
         * Register cancel event
         * 
         * @param {Function} callback
         */
        oncancel (callback) {
            this.set("cancel", callback);
        }

        /**
         * Trigger cancel event
         * 
         * @throws {Error} for cancel exception
         */
        abort () {
            invok(this.get("abort"));
        }

        /**
         * Trigger confirm event
         * 
         * @throws {Error} for confirm exception
         */
        confirm () {
            invok(this.get("confirm"));
        }

        /**
         * Trigger cancel event 
         * 
         * @throws {Error} for cancel exception
         */
        cancel () {
            invok(this.get("cancel"));
        }

    };

})());