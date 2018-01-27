/**
 * This file contain ui-design
 *     __
 *    / /__ __ __ __ __ __
 *   / // // // // // // /
 *  /_// // // // // // /
 *    /_//_//_//_//_//_/
 *
 * @author Cyril <consultant@seeren.fr>
 * @version 1.3.0
 */

import { dialog } from "./dialog/index";
import { wave } from "./wave/index";
import { scroll } from "./scroll/index";

export let ui = ((() => {

    global.ui = {};
    global.ui.dialog = dialog;
    global.ui.wave = wave;
    global.ui.scroll = scroll;
    return global.ui;

})());