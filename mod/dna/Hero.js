'use strict'
//@depends(dna/Sprite)


let Hero = function(st) {
    dna.Sprite.call(this, st);

    this.keys = []
    this.speed = 4;

    sys.augment(this, st)
}
sys.extend(Hero, dna.Sprite);

Hero.prototype.evo = function(dt) {
    //dna.Sprite.evo(this, dt)
    this.nextFrame(dt)

    if (this.keys[1]) {
        this.x -= this.speed * dt
    } else if (this.keys[2]) {
        this.y -= this.speed * dt
    } else if (this.keys[3]) {
        this.x += this.speed * dt
    } else if (this.keys[4]) {
        this.y += this.speed * dt
    } 
}

module.exports = Hero


