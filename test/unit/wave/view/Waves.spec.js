import { describe, before, after, afterEach, it } from "mocha";
import { assert, expect , timeout} from "chai";
import { window } from "./../../../window";
import { Wave } from "./../../../../src/wave/view/Wave";
import { CenterWave } from "./../../../../src/wave/view/CenterWave";
import { LeftWave } from "./../../../../src/wave/view/LeftWave";
import { RightWave } from "./../../../../src/wave/view/RightWave";

describe("Waves", () => {

    let waveable;
    let waveableLeft;
    let waveableRight;
    let color;
    let targetedColor;

    before(() => {
        waveable = window.document.createElement("div");
        waveableLeft = window.document.createElement("div");
        waveableRight = window.document.createElement("div");
        window.document.body.appendChild(waveable);
        window.document.body.appendChild(waveableLeft);
        window.document.body.appendChild(waveableRight);
        color = "rgb(255, 0, 0)";
        targetedColor = "rgb(0, 0, 255)";
    });

    after(() => {
        window.document.body.removeChild(waveable);
        window.document.body.removeChild(waveableLeft);
        window.document.body.removeChild(waveableRight);
    });

    describe("is a wave", () => {

        let wave;
        let waveLeft;
        let waveRight;

        before(() => {
            wave = new CenterWave(waveable, color, targetedColor);
            waveLeft = new LeftWave(waveableLeft, color, targetedColor);
            waveRight = new RightWave(waveableRight, color, targetedColor);
        });

        it("instanceof Wave", () => {
            assert(wave instanceof Wave);
            assert(waveLeft instanceof Wave);
            assert(waveRight instanceof Wave);
        });

        it("use mousedown", () => {
            assert(typeof waveable.onmousedown === "function");
            assert(typeof waveableLeft.onmousedown === "function");
            assert(typeof waveableRight.onmousedown === "function");
        });

        it("work on background", function (done) {
            let id;
            this.timeout(0);
            waveable.style.background = "red";
            waveableLeft.style.background = "red";
            waveableRight.style.background = "red";
            wave.render({});
            waveLeft.render({});
            waveRight.render({});
            id = window.setTimeout(
                () => {
                    assert.equal(waveable.style.background, "");
                    assert.equal(waveableLeft.style.background, "");
                    assert.equal(waveableRight.style.background, "");
                },
                1000
            );
            done();
        });

    });

});