'use strict'
//@depends(dna/Sprite)

let Hero = function(st) {
    dna.Sprite.call(this, st);
    this.collidable = true;
    this.keys = []
    this.speed = 4;
    this.tiles = res.sprite;
    sys.augment(this, st)
}
sys.extend(Hero, dna.Sprite);

Hero.prototype.use = function(action) {
    log.out('action: ' + action)
}

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

Hero.prototype.postDraw = function() {
    // draw active frame and status in debug mode
    if (env.debug) {

        ctx.lineWidth = 0.03
        // draw coordinates center
        ctx.strokeStyle = '#404040'
        ctx.beginPath()
        ctx.moveTo(0, -0.5)
        ctx.lineTo(0, 0.5)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(-0.5, -0)
        ctx.lineTo(0.5, 0)
        ctx.stroke()

        // draw bounding boxes
        ctx.lineWidth = 0.02
        ctx.strokeStyle = '#ff0000'
        ctx.beginPath();
        ctx.rect(-this.w2, -this.h2, this.w, this.h)
        ctx.stroke()

        ctx.lineWidth = 0.01
        ctx.strokeStyle = '#ffff00'
        ctx.beginPath();
        ctx.rect(-this.aw2, -this.ah2, this.aw, this.ah)
        ctx.stroke()
    }
}

module.exports = Hero

