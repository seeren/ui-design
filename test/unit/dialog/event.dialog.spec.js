
import { describe, before, after, it } from "mocha";
import { assert, expect } from "chai";
import { window } from "./../../window";
import { Event } from "./../../../src/dialog/event.dialog";

describe("Event", () => {

    let getEvent;
    let abort;
    let confirm;
    let cancel;
    let invok;
    let last;

    before(() => {
        getEvent = () => {
            return new Event;
        };
        abort = () => {
            last = "abort";
        };
        confirm = () => {
            last = "confirm";
        };
        cancel = () => {
            last = "cancel";
        };
        invok = () => {
            throw new Error("dummy error");
        };
    });

    afterEach(() => {
      last = null;
    });

    describe("abort", () => {
        it("Set callback to abort", () => {
            let event = getEvent();
            event.onabort(abort);
            event.abort();
            assert.equal(last, "abort");
        });
        it("Trigger callback once or more", () => {
            let event = getEvent();
            event.onabort(abort);
            event.abort();
            last = null;
            event.abort();
            assert.equal(last, "abort");
        });
    });

    describe("confirm", () => {
        it("Set callback to confirm", () => {
            let event = getEvent();
            event.onconfirm(confirm);
            event.confirm();
            assert.equal(last, "confirm");
        });
        it("Trigger callback once or more", () => {
            let event = getEvent();
            event.onconfirm(confirm);
            event.confirm();
            last = null;
            event.confirm();
            assert.equal(last, "confirm");
        });
    });

    describe("cancel", () => {
        it("Set callback for cancel", () => {
            let event = getEvent();
            event.oncancel(cancel);
            event.cancel();
            assert.equal(last, "cancel");
        });
        it("Trigger callback once or more", () => {
            let event = getEvent();
            event.oncancel(cancel);
            event.cancel();
            last = null;
            event.cancel();
            assert.equal(last, "cancel");
        });
    });

    describe("invok", function () {
        it("Throw Error when callback throw", () => {
            let event = getEvent();
            event.oncancel(invok);
            expect(() => {
                event.cancel();
            }).to.throw("Event exception: dummy error");
        });
    });

});
