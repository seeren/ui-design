/**
 * This file contain ui-dialog
 *     __
 *    / /__ __ __ __ __ __
 *   / // // // // // // /
 *  /_// // // // // // /
 *    /_//_//_//_//_//_/
 *
 * @author Cyril <consultant@seeren.fr>
 * @version 2.1.1
 */

import { Dialog } from "./dialog/Dialog";
import { Event } from "./event/Event";
import { View } from "./view/View";

export let dialog = ((() => {

    global.ui = global.ui || {};
    return global.ui.dialog = new Dialog(new View(new Event));

})());