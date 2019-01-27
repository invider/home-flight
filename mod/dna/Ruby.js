'use strict'

/**
 *
 * @param st
 * @constructor
 * @alias lab.Ruby
 */
let Ruby = function(st) {
    dna.Sprite.call(this, st);

    this.Z = 15
    this.alive = true
    this.solid = false
    this.collidable = true
    this.img = res['star-yellow']

    this.value = 1
    this.w = 0.5
    this.h = 0.5
    this.aw = 0.1
    this.ah = 0.1

    sys.augment(this, st);
};
sys.extend(Ruby, dna.Sprite);

Ruby.prototype.hit = function(e) {
    if (e instanceof dna.Hero) {
        lab.imagination.supply(this.value)
        this.__.detach(this)
    }
}

module.exports = Ruby

