'use strict'
//@depends(dna/Sprite)


let Trigger = function(st) {
    dna.Sprite.call(this, st);
//    this.speed = 0.5;
    this.tilex = 7 * 6;
    this.tiles = res.tileset;

    sys.augment(this, st)
}

sys.extend(Trigger, dna.Sprite);

module.exports = Trigger


