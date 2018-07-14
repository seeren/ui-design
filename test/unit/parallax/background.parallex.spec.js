import { describe, before, after, afterEach, it } from "mocha";
import { assert, expect, timeout } from "chai";
import { window } from "./../../window";
import { Background } from "../../../src/parallax/background.parallax";

describe("Background", () => {

    let parallax;
    let parallaxable;
    let top;
    let shape;

    before(() => {
        parallaxable = window.document.createElement("div");
        parallax = new Background(parallaxable);
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
        shape = parallaxable.getBoundingClientRect();
        top = shape.top + shape.height;
    });

    after(() => {
        window.document.body.removeChild(parallaxable);
    });

    describe("render", () => {
        it("set fixed background", () => {
            parallax.render();
            assert.equal(
                `50% ${100 - (top / (window.innerHeight + shape.height) * 100)}%`,
                parallaxable.style.background
            );
        });
        it("set scroll background", () => {
            parallaxable.className = "parallax-scroll";
            parallax.constructor(parallaxable);
            parallax.render();
            assert.equal(
                `50% ${top / (window.innerHeight + shape.height) * 100}%`,
                parallaxable.style.background
            );
        });
    });

});