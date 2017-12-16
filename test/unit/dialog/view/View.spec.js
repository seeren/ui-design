
import { describe, before, after, afterEach, it } from "mocha";
import { assert, expect , timeout} from "chai";
import { window } from "./../../../window";
import { Event } from "./../../../../src/dialog/event/Event";
import { View } from "./../../../../src/dialog/view/View";

describe("View", () => {

    let getView;
    let title;
    let message;

    before(() => {
        getView = () => {
            return new View(new Event);
        };
        title = "title";
        message = "message";
    });

    describe("constructor throw", () => {
        it("Throw Error when no Event", () => {
            expect(() => {
                getView().constructor();
            }).to.throw("Event must be an instance of Event");
        });
    });

    describe("render throw", () => {
        it("Throw Error when message is undefined", () => {
            expect(() => {
                getView().render();
            }).to.throw("Can't render: message must be provided");
        });
        it("Throw Error when message is not a string", () => {
            expect(() => {
                getView().render(true);
            }).to.throw("Can't render: message must be string");
        });
        it("Throw Error when message exceed 75 characters", () => {
            expect(() => {
                getView().render("-------------------------"
                               + "-------------------------"
                               + "--------------------------");
            }).to.throw("Can't render: message is limited to 75 characters");
        });
    });

    describe("render", () => {
        it("Create a dialog", () => {
            assert.equal(getView().render(message).constructor.name, "HTMLDivElement");
        });
        it("Dialog opacity is set to 1", () => {
            assert.equal(getView().render(message).style.opacity,"1");
        });
        it("Dialog contain a message", () => {
            assert.equal(
                getView().render(message).getElementsByTagName("p")[0].innerHTML,
                message
            );
        });
        it("Dialog can contain a title", () => {
            assert.equal(
                getView().render(title, message).getElementsByTagName("h6")[0].innerHTML,
                title
            );
        });
        it("Previous dialog is destroy", function (done) {
            let id;
            let view = getView();
            let firstDialog = view.render(message);
            view.render(message);
            this.timeout(0);
            id = window.setTimeout(
                () => {
                    window.clearTimeout(id);
                    assert.equal(firstDialog.parentNode, null);
                },
                510
            );
            done();
        });
    });

    describe("onabort", () => {
        it("First <a/> onclick is a Function", () => {
            let view = getView();
            let dialog = view.render(message);
            view.onabort(() => {});
            assert.equal(
                typeof dialog.getElementsByTagName("a")[0].onclick,
                "function"
            );
        });
        it("Set a callback for <a/> cross onclick", function (done) {
            let id;
            let trigger = false;
            let view = getView();
            let dialog = view.render(message);
            this.timeout(0);
            view.onabort(() => {
                trigger = true;
            });
            dialog.getElementsByTagName("a")[0].onclick();
            id = window.setTimeout(
                () => {
                    window.clearTimeout(id);
                    assert(null === dialog.parentNode && true === trigger);
                },
                520
            );
            done();
        });
    });

    describe("onconfirm", () => {
        it("Set a callback for <button/> ok onclick", function (done) {
            let id;
            let trigger = false;
            let view = getView();
            let dialog = view.render(message);
            this.timeout(0);
            view.onconfirm(() => {
                trigger = true;
            });
            dialog.getElementsByTagName("button")[0].onclick();
            id = window.setTimeout(
                () => {
                    window.clearTimeout(id);
                    assert(null === dialog.parentNode && true === trigger);
                },
                530
            );
            done();
        });
    });

    describe("oncancel", () => {
        it("Set a callback for <button/> cancel onclick", function (done) {
            let id;
            let trigger = false;
            let view = getView();
            let dialog = view.render(message);
            this.timeout(0);
            view.onconfirm().oncancel(() => {
                trigger = true;
            });
            dialog.getElementsByTagName("button")[0].onclick();
            id = window.setTimeout(
                () => {
                    window.clearTimeout(id);
                    assert(null === dialog.parentNode && true === trigger);
                },
                530
            );
            done();
        });
        it("<button/> cancel is insered before <button/> ok", function () {
            let view = getView();
            let dialog = view.render(message);
            view.oncancel() ;
            view.onconfirm();
            view.oncancel() ;
            assert(
                "cancel"
            === dialog.getElementsByTagName("button")[0].innerHTML
             && "ok"
            === dialog.getElementsByTagName("button")[1].innerHTML
            );
        });
    });

});
