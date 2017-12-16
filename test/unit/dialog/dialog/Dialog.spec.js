
import { describe, before, after, it } from "mocha";
import { assert, expect } from "chai";
import sinon from "sinon";
import { window } from "./../../../window";
import { Dialog } from "./../../../../src/dialog/dialog/Dialog";
import { Event } from "./../../../../src/dialog/event/Event";
import { View } from "./../../../../src/dialog/view/View";

describe("Dialog", () => {

    let getDialog;
    let message;

    before(() => {
        getDialog = () => {
            return  new Dialog(new View(new Event));
        };
        message = "Dummy";
    });

    describe("constructor throw", () => {
        it("Throw Error when no View", () => {
            expect(() => {
                getDialog().constructor();
            }).to.throw("A View must be provided");
        });
    });

    describe("emergency", () => {
        it("Render an emergency popup", () => {
            getDialog().emergency(message);
            assert.equal(
                window.document.body.lastChild.className.split(" ").pop(),
                "emergency"
            );
        });
    });

    describe("alert", () => {
        it("Render an alert popup", () => {
            getDialog().alert(message);
            assert.equal(
                window.document.body.lastChild.className.split(" ").pop(),
                "alert"
            );
        });
    });

    describe("critical", () => {
        it("Render an critical popup", () => {
            getDialog().critical(message);
            assert.equal(
                window.document.body.lastChild.className.split(" ").pop(),
                "critical"
            );
        });
    });

    describe("error", () => {
        it("Render an error popup", () => {
            getDialog().error(message);
            assert.equal(
                window.document.body.lastChild.className.split(" ").pop(),
                "error"
            );
        });
    });

    describe("warning", () => {
        it("Render an warning popup", () => {
            getDialog().warning(message);
            assert.equal(
                window.document.body.lastChild.className.split(" ").pop(),
                "warning"
            );
        });
    });

    describe("notice", () => {
        it("Render an notice popup", () => {
            getDialog().notice(message);
            assert.equal(
                window.document.body.lastChild.className.split(" ").pop(),
                "notice"
            );
        });
    });

    describe("info", () => {
        it("Render an info popup", () => {
            getDialog().info(message);
            assert.equal(
                    window.document.body.lastChild.className.split(" ").pop(),
                "info"
            );
        });
    });

    describe("debug", () => {
        it("Render an debug popup", () => {
            getDialog().debug(message);
            assert.equal(
                window.document.body.lastChild.className.split(" ").pop(),
                "debug");
        });
    });

    describe("onabort", () => {
        it("onabort call view onabort", () => {
            let dialog = getDialog();
            let view = new View(new Event);
            let callback = sinon.spy(view, "onabort");
            dialog.constructor(view);
            dialog.onabort();
            assert(view.onabort.calledOnce);
        });
    });

    describe("onconfirm", () => {
        it("onconfirm call view onconfirm", () => {
            let dialog = getDialog();
            let view = new View(new Event);
            let callback = sinon.spy(view, "onconfirm");
            dialog.constructor(view);
            dialog.onconfirm();
            assert(view.onconfirm.calledOnce);
        });
    });

    describe("oncancel", () => {
        it("oncancel call view oncancel", () => {
            let dialog = getDialog();
            let view = new View(new Event);
            let callback = sinon.spy(view, "oncancel");
            dialog.constructor(view);
            dialog.oncancel();
            assert(view.oncancel.calledOnce);
        });
    });

});
