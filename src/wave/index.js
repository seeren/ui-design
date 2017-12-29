/**
 * This file contain ui-wave
 *     __
 *    / /__ __ __ __ __ __
 *   / // // // // // // /
 *  /_// // // // // // /
 *    /_//_//_//_//_//_/
 *
 * @author Cyril <consultant@seeren.fr>
 * @version 0.0.1
 */

import { Waver } from "./wave/Waver";

export let wave = ((() => {

    global.ui = global.ui || {};
    return global.ui.wave = new Waver;

})());