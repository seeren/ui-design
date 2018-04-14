import { describe, before, after, afterEach, it } from "mocha";
import { assert, expect, timeout } from "chai";
import sinon from "sinon";
import { window } from "./../../window";
import { Target } from "../../../src/parallax/target.parallax";
import { Parallaxer } from "../../../src/parallax/parallaxer.parallax";

describe("Target", () => {

    let parallaxer;
    let parallaxBackground;
    let parallaxTarget;

    before(() => {
        parallaxBackground = window.document.createElement("div");
        parallaxTarget = window.document.createElement("div");
        parallaxBackground.getBoundingClientRect = parallaxTarget.getBoundingClientRect = () => {
            return {
                bottom: 0,
                height: 300,
                left: 0,
                right: 0,
                top: 100,
                width: 300
            };
        };
        window.innerHeight = 1000;
        window.innerWidth = 1000;
        window.document.body.appendChild(parallaxBackground);
        window.document.body.appendChild(parallaxTarget);
        parallaxBackground.className = "ui parallax";
        parallaxTarget.className = "ui parallax parallax-target";
        parallaxer = new Parallaxer;
    });

    after(() => {
        window.document.body.removeChild(parallaxBackground);
        window.document.body.removeChild(parallaxTarget);
    });

    describe("constructor", () => {
        it("call update", () => {
            let callback = sinon.spy(parallaxer, "update");
            parallaxer.constructor();
            assert.isTrue(callback.calledOnce);
        });
    });

    describe("update", () => {
        it("call removeEventListener", () => {
            let callback = sinon.spy( window, "removeEventListener");
            parallaxer.constructor();
            assert.isTrue(callback.calledTwice);
        });

        it("call addEventListener", () => {
            let callback = sinon.spy( window, "addEventListener");
            parallaxer.constructor();
            assert.isTrue(callback.calledTwice);
        });

    });

    describe("event", () => {
        it("window on scroll update background", () => {
            var event = new window.Event('scroll');
            window.dispatchEvent(event);
            assert.isString(parallaxBackground.style.background);
        });
        it("window on scroll update className", () => {
            var event = new window.Event('scroll');
            window.dispatchEvent(event);
            assert.notEqual(parallaxTarget.className, "ui parallax parallax-target");
        });
    });

});