
import { describe, before, after, it } from "mocha";
import { assert, expect } from "chai";
import { window } from "./../window";
import { ui } from "./../../src/index";

describe("ui", () => {

    describe("has dialog", () => {
        console.log(ui);
        it("dialog is here", () => {
            assert(ui.dialog instanceof window.Object);
        });
     
    });

});
