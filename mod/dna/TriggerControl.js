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
    this.visible = false;
    this.collidable = true;

    sys.augment(this, st)
};

sys.extend(TriggerControl, dna.Sprite);
TriggerControl.prototype.draw = function(){
    if (this.visible){
        dna.Sprite.prototype.draw.call(this);
        this.drawTrigger();
    }
    this.visible = false;
}

TriggerControl.prototype.drawTrigger = function(){
    ctx.save();
    ctx.translate(this.x, this.y);
    let tiles = this.trigger.tiles;
    this.trigger.tiles.draw(this.trigger.triggerTileX, this.w/2 - tiles.th/2, this.h/2 - tiles.tw/2, tiles.th, tiles.tw);
    ctx.restore();
}

module.exports = TriggerControl


