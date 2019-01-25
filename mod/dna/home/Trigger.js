'use strict'
//@depends(dna/Sprite)
/**
 *
 * @param st
 * @constructor
 * @alias dna.home.Trigger
 */

let Trigger = function(st) {
    dna.Sprite.call(this, st);
//    this.speed = 0.5;
    this.startTilex = 7 * 6;
    this.endTilex = 7 * 6;
    this.tiles = res.tileset;

    sys.augment(this, st)
};

Trigger.prototype.hit = function(elem){
    console.log("Hit:", elem);
}

sys.extend(Trigger, dna.Sprite);

module.exports = Trigger


