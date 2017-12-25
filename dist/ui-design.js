(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dialog = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _View = require("./../view/View");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @type {Dialog}
 */
var Dialog = exports.Dialog = function () {

    /**
     * @type {View}
     */
    var view = void 0;

    /**
     * Class for create an ui for dialog
     */
    return function () {

        /**
         * @constructor
         * 
         * @param {View} factory
         */
        function Dialog(factory) {
            _classCallCheck(this, Dialog);

            if (!(factory instanceof _View.View)) {
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


        _createClass(Dialog, [{
            key: "emergency",
            value: function emergency(title, message) {
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

        }, {
            key: "alert",
            value: function alert(title, message) {
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

        }, {
            key: "critical",
            value: function critical(title, message) {
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

        }, {
            key: "error",
            value: function error(title, message) {
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

        }, {
            key: "warning",
            value: function warning(title, message) {
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

        }, {
            key: "notice",
            value: function notice(title, message) {
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

        }, {
            key: "info",
            value: function info(title, message) {
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

        }, {
            key: "debug",
            value: function debug(title, message) {
                view.render(title, message, "debug");
                return this;
            }

            /**
             * Register abort event handler
             * 
             * @param {Function} callback
             * @returns {Dialog}
             */

        }, {
            key: "onabort",
            value: function onabort(callback) {
                view.onabort(callback);
                return this;
            }

            /**
             * Register confirm event handler
             * 
             * @param {String} title
             * @param {Function} callback
             * @returns {Dialog}
             */

        }, {
            key: "onconfirm",
            value: function onconfirm(title, callback) {
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

        }, {
            key: "oncancel",
            value: function oncancel(title, callback) {
                view.oncancel(title, callback);
                return this;
            }
        }]);

        return Dialog;
    }();
}();

},{"./../view/View":7}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @type {Event}
 */
var Event = exports.Event = function () {

    /**
     * Invok
     * 
     * @param {Function} callback
     * 
     * @throws {Error} for callback exception
     */
    var invok = function invok(callback) {
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
    return function () {

        /**
         *  @constructor
         */
        function Event() {
            _classCallCheck(this, Event);

            /**
             * @type {Function}
             */
            var abort = void 0;

            /**
             * @type {Function}
             */
            var confirm = void 0;

            /**
             * @type {Function}
             */
            var cancel = void 0;

            /**
             * Set
             * 
             * @param {String} type
             * @param {Function} callback
             */
            this.set = function (type, callback) {
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
            this.get = function (type) {
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


        _createClass(Event, [{
            key: "onabort",
            value: function onabort(callback) {
                this.set("abort", callback);
            }

            /**
             * Register confirm event
             * 
             * @param {Function} callback
             */

        }, {
            key: "onconfirm",
            value: function onconfirm(callback) {
                this.set("confirm", callback);
            }

            /**
             * Register cancel event
             * 
             * @param {Function} callback
             */

        }, {
            key: "oncancel",
            value: function oncancel(callback) {
                this.set("cancel", callback);
            }

            /**
             * Trigger cancel event
             * 
             * @throws {Error} for cancel exception
             */

        }, {
            key: "abort",
            value: function abort() {
                invok(this.get("abort"));
            }

            /**
             * Trigger confirm event
             * 
             * @throws {Error} for confirm exception
             */

        }, {
            key: "confirm",
            value: function confirm() {
                invok(this.get("confirm"));
            }

            /**
             * Trigger cancel event 
             * 
             * @throws {Error} for cancel exception
             */

        }, {
            key: "cancel",
            value: function cancel() {
                invok(this.get("cancel"));
            }
        }]);

        return Event;
    }();
}();

},{}],3:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dialog = undefined;

var _Dialog = require("./dialog/Dialog");

var _Event = require("./event/Event");

var _View = require("./view/View");

var dialog = exports.dialog = function () {

  global.ui = global.ui || {};
  return global.ui.dialog = new _Dialog.Dialog(new _View.View(new _Event.Event()));
}(); /**
      * This file contain ui-dialog
      *     __
      *    / /__ __ __ __ __ __
      *   / // // // // // // /
      *  /_// // // // // // /
      *    /_//_//_//_//_//_/
      *
      * @author Cyril <consultant@seeren.fr>
      * @version 2.1.1
      */

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./dialog/Dialog":1,"./event/Event":2,"./view/View":7}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (text, className, cancel) {

    return "<button class=\"ui btn " + (cancel ? "btn-flat " : "") + "btn-" + className + "\">" + text.toLowerCase() + "</button>";
};

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {

    return "<a class=\"ui cross\"></a>";
};

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
            value: true
});

exports.default = function (title, message, className) {

            return "<div id=\"ui-dialog\" class=\"ui dialog right grey-900 col-offset-1 col-10 col-offset-sm-5 col-sm-6 col-offset-lg-7 col-lg-4 col-offset-xl-9 col-xl-2 card card-24 " + className + "\">\n                <br /><h6 class=\"ui col-12 left normal\">" + title + "</h6>\n                <p class=\"ui col-12 left hyphens lighter\">" + message + "</p>\n            </div>";
};

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.View = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Event = require("./../event/Event");

var _btn2 = require("./../template/btn");

var _btn3 = _interopRequireDefault(_btn2);

var _cross2 = require("./../template/cross");

var _cross3 = _interopRequireDefault(_cross2);

var _dialog2 = require("./../template/dialog");

var _dialog3 = _interopRequireDefault(_dialog2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @type {View}
 */
var View = exports.View = function () {

    /**
     * Destroy
     * 
     * @param {HTMLDivElement} dialog
     * @param {Funtion} callback
     */
    var destroy = function destroy(dialog, callback) {
        if ("1" === dialog.style.opacity) {
            dialog.style.opacity = 0;
            dialog.style.bottom = "3em";
            var id = window.setTimeout(function () {
                window.clearTimeout(id);
                dialog.parentNode.removeChild(dialog);
                callback();
            }, 500);
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
    var create = function create(title, message, className) {
        var container = window.document.createElement("div");
        container.innerHTML = (0, _dialog3.default)(title, message, className);
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
    var createAbort = function createAbort(dialog, callback) {
        if (!dialog.firstChild || !dialog.firstChild.onclick) {
            var container = window.document.createElement("div");
            container.innerHTML = (0, _cross3.default)();
            dialog.insertBefore(container.firstChild, dialog.firstChild);
            dialog.firstChild.onclick = function () {
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
    var createConfirm = function createConfirm(title, dialog, callback) {
        if (!dialog.lastChild || !dialog.lastChild.className || "confirm" !== dialog.lastChild.className.split(" ").pop()) {
            var container = window.document.createElement("div");
            container.innerHTML = (0, _btn3.default)(title || "ok", dialog.className.split(" ").pop() + " confirm");
            dialog.appendChild(container.firstChild);
            dialog.lastChild.onclick = function () {
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
    var createCancel = function createCancel(title, dialog, callback) {
        if (dialog.lastChild && dialog.lastChild.className && "confirm" === dialog.lastChild.className.split(" ").pop() && dialog.lastChild.previousSibling && "BUTTON" !== dialog.lastChild.previousSibling.tagName) {
            var container = window.document.createElement("div");
            container.innerHTML = (0, _btn3.default)(title || "cancel", dialog.className.split(" ").pop() + " cancel", true);
            dialog.insertBefore(container.firstChild, dialog.lastChild);
            dialog.lastChild.previousSibling.onclick = function () {
                destroy(dialog, callback);
            };
        }
    };

    /**
     * Class for create dialog
     */
    return function () {

        /**
         * @constructor
         * 
         * @param {Event} event
         * 
         * @throws {Error} for no Event
         */
        function View(event) {
            _classCallCheck(this, View);

            if (!(event instanceof _Event.Event)) {
                throw new window.Error("Event must be an instance of Event");
            }

            /**
             * Get event
             * 
             * @returns {Event}
             */
            this.getEvent = function () {
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


        _createClass(View, [{
            key: "render",
            value: function render(title, message, className) {
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
                        destroy(this.getDialog(), this.getEvent().abort.bind(this.getEvent()));
                    }
                } catch (e) {
                    throw new window.Error("Can't render: " + e.message);
                }

                /**
                 * @type {HTMLDivElement}
                 */
                var dialog = create(title, message, className);

                /**
                 * Get dialog
                 * 
                 * @returns {HTMLDivElement}
                 */
                this.getDialog = function () {
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

        }, {
            key: "onabort",
            value: function onabort(callback) {
                if (this.getDialog) {
                    this.getEvent().onabort(callback);
                    createAbort(this.getDialog(), this.getEvent().abort.bind(this.getEvent()));
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

        }, {
            key: "onconfirm",
            value: function onconfirm(title, callback) {
                if (this.getDialog) {
                    if (!callback) {
                        callback = title;
                        title = null;
                    }
                    this.getEvent().onconfirm(callback);
                    createConfirm(title, this.getDialog(), this.getEvent().confirm.bind(this.getEvent()));
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

        }, {
            key: "oncancel",
            value: function oncancel(title, callback) {
                if (this.getDialog) {
                    if (!callback) {
                        callback = title;
                        title = null;
                    }
                    this.getEvent().oncancel(callback);
                    createCancel(title, this.getDialog(), this.getEvent().cancel.bind(this.getEvent()));
                }
                return this;
            }
        }]);

        return View;
    }();
}();

},{"./../event/Event":2,"./../template/btn":4,"./../template/cross":5,"./../template/dialog":6}],8:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ui = undefined;

var _index = require("./dialog/index");

var ui = exports.ui = function () {

    return global.ui = {
        dialog: _index.dialog
    };
}(); /**
      * This file contain ui-design
      *     __
      *    / /__ __ __ __ __ __
      *   / // // // // // // /
      *  /_// // // // // // /
      *    /_//_//_//_//_//_/
      *
      * @author Cyril <consultant@seeren.fr>
      * @version 1.1.0
      */

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./dialog/index":3}]},{},[8]);
