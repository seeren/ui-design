/**
 * This file contain ui-design
 *     __
 *    / /__ __ __ __ __ __
 *   / // // // // // // /
 *  /_// // // // // // /
 *    /_//_//_//_//_//_/
 *
 * @author Cyril <consultant@seeren.fr>
 * @version 1.1.0
 */

import { dialog } from "./../../dev.ui-dialog/src/index";

export let ui = ((() => {

    return global.ui = {
        dialog: dialog
    };

})());