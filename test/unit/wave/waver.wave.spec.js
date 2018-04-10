import { describe, before, after, afterEach, it } from "mocha";
import { assert, expect , timeout} from "chai";
import { window } from "./../../window";
import { Waver } from "./../../../src/wave/waver.wave";

describe("Waver", () => {

    let waver;
    let waveable;
    let waveableLeft;
    let waveableRight;
    let notWaveable;

    before(() => {
        notWaveable = window.document.createElement("div");
        waveable = window.document.createElement("div");
        waveableRight = window.document.createElement("div");
        waveableLeft = window.document.createElement("div");
        waveable.style.background = "red";
        waveable.className = "ui wave";
        waveableRight.className = "ui wave wave-right";
        waveableLeft.className = "ui wave wave-left";
        window.document.body.appendChild(waveable);
        window.document.body.appendChild(waveableRight);
        window.document.body.appendChild(waveableLeft);
        window.document.body.appendChild(notWaveable);
        waver = new Waver();
        
    });

    after(() => {
        window.document.body.removeChild(waveable);
        window.document.body.removeChild(waveableLeft);
        window.document.body.removeChild(waveableRight);
        window.document.body.removeChild(notWaveable);
    });

    describe("constructor", () => {
        it("attach waves to waveable", () => {
            assert.equal(typeof waveable.onmousedown, "function");
        });
        it("attach waves to waveable left", () => {
            assert.equal(typeof waveableLeft.onmousedown, "function");
        });
        it("attach waves to waveable right", () => {
            assert.equal(typeof waveableRight.onmousedown, "function");
        });
        it("do not attach waves to not waveable", () => {
            assert.equal(notWaveable.onmousedown, null);
        });
    });

    describe("getColor", () => {
        it("return style background", () => {
            assert.equal(waver.getColor(waveable), "red");
        });
    });

    describe("getTargetColor", () => {
        it("return Target style background", () => {
            assert(waver.getColor(waveable) !== waver.getTargetColor(waveable));
        });
    });

});