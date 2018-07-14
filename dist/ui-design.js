(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (text, className, cancel) {

    return "<button class=\"ui btn " + (cancel ? "btn-flat " : "") + "btn-" + className + "\">" + text + "</button>";
};

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {

    return "<a class=\"ui cross\"></a>";
};

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
            value: true
});

exports.default = function (title, message, className) {

            return "<div id=\"ui-dialog\" class=\"ui dialog right grey-900 col-offset-1 col-10 col-offset-sm-5 col-sm-6 col-offset-lg-7 col-lg-4 col-offset-xl-9 col-xl-2 card card-24 " + className + "\">\n                <br /><h6 class=\"ui col-12 left normal\">" + title + "</h6>\n                <p class=\"ui col-12 left hyphens lighter\">" + message + "</p>\n            </div>";
};

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dialog = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _view = require("./view.dialog");

var _event = require("./event.dialog");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @type {Dialog}
 */
var Dialog = exports.Dialog = function () {

    /**
     * @constructor
     */
    function Dialog() {
        _classCallCheck(this, Dialog);

        this.view = new _view.View(new _event.Event());
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
            this.view.render(title, message, "emergency");
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
            this.view.render(title, message, "alert");
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
            this.view.render(title, message, "critical");
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
            this.view.render(title, message, "error");
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
            this.view.render(title, message, "warning");
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
            this.view.render(title, message, "notice");
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
            this.view.render(title, message, "info");
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
            this.view.render(title, message, "debug");
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
            this.view.onabort(callback);
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
            this.view.onconfirm(title, callback);
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
            this.view.oncancel(title, callback);
            return this;
        }
    }]);

    return Dialog;
}();

},{"./event.dialog":5,"./view.dialog":6}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.View = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _event = require("./event.dialog");

var _btnDialog = require("./btn.dialog.html");

var _btnDialog2 = _interopRequireDefault(_btnDialog);

var _crossDialog = require("./cross.dialog.html");

var _crossDialog2 = _interopRequireDefault(_crossDialog);

var _dialogDialog = require("./dialog.dialog.html");

var _dialogDialog2 = _interopRequireDefault(_dialogDialog);

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
        container.innerHTML = (0, _dialogDialog2.default)(title, message, className);
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
            container.innerHTML = (0, _crossDialog2.default)();
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
            container.innerHTML = (0, _btnDialog2.default)(title || "Ok", dialog.className.split(" ").pop() + " confirm");
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
            container.innerHTML = (0, _btnDialog2.default)(title || "Cancel", dialog.className.split(" ").pop() + " cancel", true);
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

            if (!(event instanceof _event.Event)) {
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

},{"./btn.dialog.html":1,"./cross.dialog.html":2,"./dialog.dialog.html":3,"./event.dialog":5}],7:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ui = undefined;

var _waver = require("./wave/waver.wave");

var _dialog = require("./dialog/dialog.dialog");

var _parallaxer = require("./parallax/parallaxer.parallax");

var ui = exports.ui = function () {
    return global.ui = {
        dialog: new _dialog.Dialog(),
        parallax: new _parallaxer.Parallaxer(),
        wave: new _waver.Waver()
    };
}(); /**
      * ui-design
      *     __
      *    / /__ __ __ __ __ __
      *   / // // // // // // /
      *  /_// // // // // // /
      *    /_//_//_//_//_//_/
      *
      * @author Cyril <consultant@seeren.fr>
      * @version 2.1.2
      * 
      */

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./dialog/dialog.dialog":4,"./parallax/parallaxer.parallax":9,"./wave/waver.wave":16}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @type {Background}
 */
var Background =

/**
 * @constructor
 * 
 * @param {HTMLElement} parallaxe
 */
exports.Background = function Background(parallaxe) {
    _classCallCheck(this, Background);

    var shape = void 0;
    var top = void 0;
    var callback = !/parallax-scroll/.test(parallaxe.className) ? function (e) {
        return "50% " + (100 - top / (window.innerHeight + shape.height) * 100) + "%";
    } : function (e) {
        return "50% " + top / (window.innerHeight + shape.height) * 100 + "%";
    };
    this.render = function () {
        shape = parallaxe.getBoundingClientRect();
        top = shape.top + shape.height;
        if (shape.top < window.innerHeight && top > 0) {
            parallaxe.style.backgroundPosition = callback();
        }
    };
};

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Parallaxer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _background = require("./background.parallax");

var _target = require("./target.parallax");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @type {Parallaxer}
 */
var Parallaxer = exports.Parallaxer = function () {

    var callback = void 0;

    var _update = function _update() {
        for (var i = 0, l = callback.length; i < l; i++) {
            callback[i]();
        }
    };

    return function () {

        /**
         * @constructor
         */
        function Parallaxer() {
            _classCallCheck(this, Parallaxer);

            this.update();
            if (callback.length > 0) {
                window.addEventListener("scroll", _update);
                window.addEventListener("resize", _update);
            }
        }

        /**
         * Update
         */


        _createClass(Parallaxer, [{
            key: "update",
            value: function update() {
                window.removeEventListener("scroll", _update);
                window.removeEventListener("resize", _update);
                callback = [];
                var parallax = window.document.querySelectorAll(".ui.parallax");
                for (var i = 0, l = parallax.length; i < l; i++) {
                    /parallax-target/.test(parallax[i].className) ? callback.push(new _target.Target(parallax[i], callback).render) : callback.push(new _background.Background(parallax[i]).render);
                }
                _update();
            }
        }]);

        return Parallaxer;
    }();
}();

},{"./background.parallax":8,"./target.parallax":10}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @type {Target}
 */
var Target =

/**
 * @constructor
 * 
 * @param {HTMLElement} parallax
 */
exports.Target = function Target(parallax, callback) {
    var _this = this;

    _classCallCheck(this, Target);

    var shape = void 0;
    this.render = function () {
        shape = parallax.getBoundingClientRect();
        if (shape.top + shape.height * 1 / 3 < window.innerHeight * 7 / 8 && shape.top + shape.height * 2 / 3 > window.innerHeight * 1 / 8) {
            parallax.className += " target";
            callback.splice(callback.indexOf(_this.render), 1);
        }
    };
};

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Left = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wave = require("./wave.wave");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @type {Left}
 */
var Left = exports.Left = function (_Wave) {
  _inherits(Left, _Wave);

  function Left() {
    _classCallCheck(this, Left);

    return _possibleConstructorReturn(this, (Left.__proto__ || Object.getPrototypeOf(Left)).apply(this, arguments));
  }

  _createClass(Left, [{
    key: "update",


    /**
     * @param {MouseEvent} e 
     * @param {HTMLElement} wave 
     */
    value: function update(e, wave) {
      this.x = 0;
      this.y = 50;
    }
  }]);

  return Left;
}(_wave.Wave);

},{"./wave.wave":15}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pointer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wave = require("./wave.wave");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @type {Pointer}
 */
var Pointer = exports.Pointer = function (_Wave) {
  _inherits(Pointer, _Wave);

  function Pointer() {
    _classCallCheck(this, Pointer);

    return _possibleConstructorReturn(this, (Pointer.__proto__ || Object.getPrototypeOf(Pointer)).apply(this, arguments));
  }

  _createClass(Pointer, [{
    key: "update",


    /**
     * @param {MouseEvent} e 
     * @param {HTMLElement} wave 
     */
    value: function update(e, wave) {
      var shape = wave.getBoundingClientRect();
      this.x = window.parseInt((e.clientX - shape.left) / shape.width * 100, 10);
      this.y = window.parseInt((e.clientY - shape.top) / shape.height * 100, 10);
    }
  }]);

  return Pointer;
}(_wave.Wave);

},{"./wave.wave":15}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (color, x, y, size, colorFrom, colorTo) {

    return color + " radial-gradient(circle at " + x + "% " + y + "%, " + colorFrom + " " + size + "%, " + colorTo + " " + size + "%)";
};

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Right = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wave = require("./wave.wave");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @type {Right}
 */
var Right = exports.Right = function (_Wave) {
  _inherits(Right, _Wave);

  function Right() {
    _classCallCheck(this, Right);

    return _possibleConstructorReturn(this, (Right.__proto__ || Object.getPrototypeOf(Right)).apply(this, arguments));
  }

  _createClass(Right, [{
    key: "update",


    /**
     * @param {MouseEvent} e 
     * @param {HTMLElement} wave 
     */
    value: function update(e, wave) {
      this.x = 100;
      this.y = 50;
    }
  }]);

  return Right;
}(_wave.Wave);

},{"./wave.wave":15}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Wave = undefined;

var _radial = require("./radial.gradient");

var _radial2 = _interopRequireDefault(_radial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @type {Wave}
 */
var Wave =

/**
 * @constructor
 * 
 * @param {HTMLElement} wave
 * @param {String} color
 * @param {String} targetColor
 */
exports.Wave = function Wave(wave, color, targetColor) {
    var _this = this;

    _classCallCheck(this, Wave);

    var size = 0;
    var timeout = 0;
    var fps = 1000 / 50;
    var now = Date.now();
    var from = Date.now();
    var diff = void 0;
    this.render = function () {
        timeout = window.clearTimeout(timeout);
        timeout = window.requestAnimationFrame(_this.render);
        now = Date.now();
        diff = now - from;
        if (diff > fps) {
            from = now - diff % fps;
            wave.style.background = (0, _radial2.default)(color, _this.x, _this.y, size, targetColor, color);
            if (100 < size) {
                wave.style.background = (0, _radial2.default)(targetColor, _this.x, _this.y, size, targetColor, color);
                window.cancelAnimationFrame(timeout);
                return timeout = window.setTimeout(function () {
                    wave.removeAttribute("style");
                }, 300);
            }
            size += 8;
        }
    };
    wave.onmousedown = function (e) {
        _this.update(e, wave);
        size = 0;
        _this.render();
    };
};

},{"./radial.gradient":13}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Waver = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pointer = require("./pointer.wave");

var _left = require("./left.wave");

var _right = require("./right.wave");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @type {Waver}
 */
var Waver = exports.Waver = function () {

    /**
     * @constructor
     */
    function Waver() {
        _classCallCheck(this, Waver);

        this.update();
    }

    /**
     * @param {HTMLElement} waveable
     * @returns {String}
     */


    _createClass(Waver, [{
        key: "getColor",
        value: function getColor(waveable) {
            return window.getComputedStyle(waveable).getPropertyValue("background-color");
        }

        /**
         * @param {HTMLElement} waveable
         * @returns {String}
         */

    }, {
        key: "getTargetColor",
        value: function getTargetColor(waveable) {
            var target = window.document.createElement("div");
            target.setAttribute("class", waveable.className + " target");
            target.style.display = "none";
            waveable.parentNode.insertBefore(target, waveable);
            var color = this.getColor(target);
            target.parentNode.removeChild(target);
            return color;
        }

        /**
         * Update
         */

    }, {
        key: "update",
        value: function update() {
            var wave = window.document.querySelectorAll(".ui.wave");
            for (var i = 0, l = wave.length; i < l; i++) {
                var color = this.getColor(wave[i]);
                var targetColor = this.getTargetColor(wave[i]);
                /wave-left/.test(wave[i].className) ? new _left.Left(wave[i], color, targetColor) : /wave-right/.test(wave[i].className) ? new _right.Right(wave[i], color, targetColor) : new _pointer.Pointer(wave[i], color, targetColor);
            }
        }
    }]);

    return Waver;
}();

},{"./left.wave":11,"./pointer.wave":12,"./right.wave":14}]},{},[7]);
