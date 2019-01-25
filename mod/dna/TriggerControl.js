'use strict'
//@depends(dna/Sprite)
/**
 *
 * @param st
 * @constructor
 * @alias dna.home.TriggerControl
 */

let TriggerControl = function(st) {
    dna.Sprite.call(this, st);
//    this.speed = 0.5;
    this.img = res.TriggerControlBg;
    this.visible = true;
    this.collidable = true;

    sys.augment(this, st)
};

sys.extend(TriggerControl, dna.Sprite);
TriggerControl.prototype.draw = function(){
    if (this.visible){
        dna.Sprite.prototype.draw.call(this);
    }
    this.visible = false;
}


module.exports = TriggerControl


