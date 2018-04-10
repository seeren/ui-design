import jsdom from "jsdom";

export let window = ((() => {

    const { JSDOM } = jsdom;
    global.window = new JSDOM("<!doctype html>").window;
    global.window.Error = Error;
    global.window.Function = Function;
    global.window.JSON = JSON;
    global.window.Object = Object;
    global.window.RegExp = RegExp;
    global.window.parseInt = parseInt;
    global.window.requestAnimationFrame = (callback) => {
        return global.window.setTimeout(callback, 10);
    };
    global.window.cancelAnimationFrame = (handle) => {
        global.window.clearTimeout(handle);
    };
    return global.window;

})());