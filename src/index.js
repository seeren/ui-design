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

export let ui = ((() => {

    return global.ui = {
        dialog: dialog,
        wave: wave
    };

})());