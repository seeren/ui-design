import { describe, before, after, it } from "mocha";
import { assert, expect } from "chai";
import { window } from "./../window";
import { ui } from "./../../src/index";

describe("ui", () => {

    describe("has dialog", () => {
        it("dialog is here", () => {
            assert(ui.dialog instanceof window.Object);
        });
    });

    describe("has wave", () => {
        it("wave is here", () => {
            assert(ui.wave instanceof window.Object);
        });
    });

});