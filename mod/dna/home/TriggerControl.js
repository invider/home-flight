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
    this.trigger = false;
    this.collidable = true;

    sys.augment(this, st)
};

sys.extend(TriggerControl, dna.Sprite);
TriggerControl.prototype.draw = function(){
    if (this.trigger){
        dna.Sprite.prototype.draw.call(this);
        this.drawTrigger();
    }
    this.trigger = false;
}

TriggerControl.prototype.drawTrigger = function(){
    let tiles = this.trigger.tiles;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.trigger.angle * Math.PI / 180);
    this.trigger.tiles.draw(this.trigger.triggerTileX, - tiles.tw/2, - tiles.th/2, tiles.th, tiles.tw);
    
    ctx.restore();
}

module.exports = TriggerControl;


