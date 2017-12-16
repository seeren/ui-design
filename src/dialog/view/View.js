
import { Event } from "./../event/Event";
import { default as _btn } from "./../template/btn";
import { default as _cross } from "./../template/cross";
import { default as _dialog } from "./../template/dialog";

/**
 * @type {View}
 */
export let View = ((() => {

    /**
     * Destroy
     * 
     * @param {HTMLDivElement} dialog
     * @param {Funtion} callback
     */
    let destroy = (dialog, callback) => {
        if ("1" === dialog.style.opacity) {
            dialog.style.opacity = 0;
            dialog.style.bottom = "3em";
            let id = window.setTimeout(
                () => {
                    window.clearTimeout(id);
                    dialog.parentNode.removeChild(dialog);
                    callback();
                },
                500
            );
        }
    };

    /**
     * Create
     * 
     * @param {String} title
     * @param {String} message
     * @param {String} className
     * @returns {HTMLDivElement}
     */
    let create = (title, message, className) => {
        let container = window.document.createElement("div");
        container.innerHTML = _dialog(title, message, className);
        window.document.body.appendChild(container.firstChild);
        window.document.body.lastChild.style.opacity = 0;
        window.document.body.lastChild.clientHeight;
        window.document.body.lastChild.style.bottom = "2em";
        window.document.body.lastChild.style.opacity = 1;
        return window.document.body.lastChild;
    };

    /**
     * Create abort
     * 
     * @param {HTMLDivElement} dialog
     * @param {Function} callback
     */
    let createAbort = (dialog, callback) => {
        if (!dialog.firstChild || !dialog.firstChild.onclick) {
            let container = window.document.createElement("div");
            container.innerHTML = _cross();
            dialog.insertBefore(container.firstChild, dialog.firstChild);
            dialog.firstChild.onclick = () => {
                destroy(dialog, callback);
            }; 
        }
    };

    /**
     * Create confirm
     * 
     * @param {String} title
     * @param {HTMLDivElement} dialog
     * @param {Funtion} callback
     */
    let createConfirm = (title, dialog, callback) => {
        if (!dialog.lastChild
         || !dialog.lastChild.className
         || "confirm" !== dialog.lastChild.className.split(" ").pop()) {
            let container = window.document.createElement("div");
            container.innerHTML = _btn(
                title || "ok",
                dialog.className.split(" ").pop() + " confirm"
            );
            dialog.appendChild(container.firstChild);
            dialog.lastChild.onclick = () => {
                destroy(dialog, callback);
            };
        }
    };
    
    /**
     * Create cancel
     * 
     * @param {String} title
     * @param {HTMLDivElement} dialog
     * @param {Funtion} callback
     */
    let createCancel = (title, dialog, callback) => {
        if (dialog.lastChild
         && dialog.lastChild.className
         && "confirm" === dialog.lastChild.className.split(" ").pop()
         && dialog.lastChild.previousSibling
         && "BUTTON" !== dialog.lastChild.previousSibling.tagName) {
            let container = window.document.createElement("div");
            container.innerHTML = _btn(
                 title || "cancel",
                 dialog.className.split(" ").pop() + " cancel",
                 true
             );
            dialog.insertBefore(container.firstChild, dialog.lastChild);
            dialog.lastChild.previousSibling.onclick = () => {
                destroy(dialog, callback);
            };
        }
    };

    /**
     * Class for create dialog
     */    
    return class View {

        /**
         * @constructor
         * 
         * @param {Event} event
         * 
         * @throws {Error} for no Event
         */
        constructor (event) {
            if (!(event instanceof Event)) {
                throw new window.Error("Event must be an instance of Event");
            }

            /**
             * Get event
             * 
             * @returns {Event}
             */
            this.getEvent = () => {
                return event;
            };

        }

        /**
         * Render dialog
         * 
         * @param {String} title
         * @param {String} message
         * @param {String} className
         * @returns {HTMLDivElement}
         * 
         * @throws {Error} for invalid argument exception
         */
        render (title, message, className) {
            try {
                if (!message && title) {
                    message = title;
                    title = null;
                }
                if (!message) {
                    throw new window.Error("message must be provided");
                } else if (typeof message !== "string") {
                    throw new window.Error("message must be string");
                } else if (75 < message.length) {
                    throw new window.Error("message is limited to 75 characters");
                } else if (this.getDialog) {
                    destroy(
                        this.getDialog(),
                        this.getEvent().abort.bind(this.getEvent())
                    );
                }
            } catch (e) {
                throw new window.Error("Can't render: " + e.message);
            }

            /**
             * @type {HTMLDivElement}
             */
            let dialog = create(title, message, className);

            /**
             * Get dialog
             * 
             * @returns {HTMLDivElement}
             */
            this.getDialog = () => {
                return dialog;
            };

            return dialog; 
        }

        /**
         * Register abort
         * 
         * @param {Function} callback
         * @returns {View} 
         */
        onabort (callback) {
            if (this.getDialog) {
                this.getEvent().onabort(callback);
                createAbort(
                    this.getDialog(),
                    this.getEvent().abort.bind(this.getEvent())
                );
            }
            return this;
        }

        /**
         * Register confirm
         * 
         * @param {String} title
         * @param {Function} callback
         * @returns {View} 
         */
        onconfirm (title, callback) {
            if (this.getDialog) {
                if (!callback) {
                    callback = title;
                    title = null;
                }
                this.getEvent().onconfirm(callback);
                createConfirm(
                    title,
                    this.getDialog(),
                    this.getEvent().confirm.bind(this.getEvent())
                );  
            }
            return this;
        }

        /**
         * Register cancel
         * 
         * @param {String} title
         * @param {Function} callback
         * @returns {View} 
         */
        oncancel (title, callback) {
            if (this.getDialog) {
                if (!callback) {
                    callback = title;
                    title = null;
                }
                this.getEvent().oncancel(callback); 
                createCancel(
                    title,
                    this.getDialog(),
                    this.getEvent().cancel.bind(this.getEvent())
                );
            }
            return this;
        }

    };

})());