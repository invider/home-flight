'use strict'
//@depends(dna/home/Trigger)
/**
 *
 * @param st
 * @constructor
 * @alias lab.WindowTrigger
 */
let WindowTrigger = function(st) {
    dna.home.Trigger.call(this, st);
    //this.tiles = ... // use this for specifying trigger control tileset
    //this.triggerTileX = 0
    this.solid = true
    this.img = res.home.window;
    sys.augment(this, st);
};

sys.extend(WindowTrigger, dna.home.Trigger);

module.exports = WindowTrigger

