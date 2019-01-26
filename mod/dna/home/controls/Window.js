'use strict'
//@depends(dna/home/Trigger)
/**
 *
 * @param st
 * @constructor
 * @alias lab.Window
 */
let Window = function(st) {
    dna.home.Trigger.call(this, st);

    this.solid = true
    this.img = res.home.window;

    sys.augment(this, st);
};

sys.extend(Window, dna.home.Trigger);

module.exports = Window

