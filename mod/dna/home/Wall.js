'use strict'
//@depends(dna/Sprite)

/**
 *
 * @param st
 * @constructor
 * @alias lab.Wall
 */
let Wall = function(st) {
    dna.Sprite.call(this, st);
    this.solid = true
    this.img = res.home.wall;

    sys.augment(this, st);
};

sys.extend(Wall, dna.Sprite);

module.exports = Wall
