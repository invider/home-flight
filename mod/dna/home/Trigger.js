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
    this.startTilex = 7 * 6;
    this.endTilex = 7 * 6;
    this.triggerTileX = 10;
    this.tiles = res.tileset;
    this.collidable = true;
    this.angle = 0;
    sys.augment(this, st)
};

sys.extend(Trigger, dna.Sprite);

Trigger.prototype.use = function(){
    console.log("Trigger used: ", this);
}
Trigger.prototype.hit = function(elem){
    if (elem instanceof dna.Hero){
        lab[elem.controlName].trigger = this;
    }
}

module.exports = Trigger


