/**
 * This file contain ui-dialog
 *     __
 *    / /__ __ __ __ __ __
 *   / // // // // // // /
 *  /_// // // // // // /
 *    /_//_//_//_//_//_/
 *
 * @author Cyril <consultant@seeren.fr>
 * @version 0.0.1
 */

import { Scroll } from "./scroll/Scroll";

export let dialog = ((() => {

    global.ui = global.ui || {};
    return global.ui.scroll = new Scroll();

})());