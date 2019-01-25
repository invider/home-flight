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
    this.triggerTileX = 10;
    this.tiles = res.tileset;
    this.collidable = true;

    sys.augment(this, st)
};

sys.extend(Trigger, dna.Sprite);


Trigger.prototype.hit = function(elem){
    lab.triggerControl.trigger = this;
    lab.triggerControl.visible = true;
}

module.exports = Trigger


