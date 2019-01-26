'use strict'
//@depends(dna/Sprite)

/**
 *
 * @param st
 * @constructor
 * @alias lab.Floor
 */
let Floor = function(st) {
    dna.Sprite.call(this, st);
    //this.speed = 0.5;
    this.tiles = res.home.floor;
    sys.augment(this, st);
};

sys.extend(Floor, dna.Sprite);

module.exports = Floor

