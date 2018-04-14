import { describe, before, after, afterEach, it } from "mocha";
import { assert, expect, timeout } from "chai";
import { window } from "./../../window";
import { Target } from "../../../src/parallax/target.parallax";

describe("Target", () => {

    let callback;
    let parallax;
    let parallaxable;

    before(() => {
        callback =  [];
        parallaxable = window.document.createElement("div");
        parallax = new Target(parallaxable, callback);
        parallaxable.getBoundingClientRect = () => {
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
        window.document.body.appendChild(parallaxable);
        callback.push(parallax.render);
    });

    after(() => {
        window.document.body.removeChild(parallaxable);
    });

    describe("render", () => {
        it("set target class name", () => {
            parallax.render();
            assert.equal(" target", parallaxable.className);
        });
        it("remove callback", () => {
            parallax.render();
            assert.equal(callback.length, 0);
        });
    });

});