/**
 * ui-design
 *     __
 *    / /__ __ __ __ __ __
 *   / // // // // // // /
 *  /_// // // // // // /
 *    /_//_//_//_//_//_/
 *
 * @author Cyril <consultant@seeren.fr>
 * @version 2.1.2
 * 
 */

import { Waver } from "./wave/waver.wave";
import { Dialog } from "./dialog/dialog.dialog";
import { Parallaxer } from "./parallax/parallaxer.parallax";

export let ui = (() => {
    return global.ui = {
        dialog: new Dialog,
        parallax: new Parallaxer,
        wave: new Waver
    };
})();