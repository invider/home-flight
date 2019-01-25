'use strict'

let Hero = function(st) {
    dna.Sprite.call(this, st);
    this.speed = 0.5;

    sys.augment(this, st)
}
sys.extend(Hero, dna.Sprite);

module.exports = Hero


