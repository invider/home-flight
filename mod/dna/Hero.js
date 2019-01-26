'use strict'
//@depends(dna/Sprite)

let Hero = function(st) {
    dna.Sprite.call(this, st);
    this.collidable = true;
    
    this.keys = []

    this.w = 1
    this.h = 1
    this.aw = 0.8
    this.ah = 0.9

    this.speed = 4
    this.dy = 0

    sys.augment(this, st)
}
sys.extend(Hero, dna.Sprite);

Hero.prototype.use = function(action) {
    log.out('action: ' + action)
}

Hero.prototype.jump = function() {
    log.out('jump')
    this.dy = -env.JUMP
}

Hero.prototype.moveTo = function(x, y) {
    // try to move
    if (lab.collider.testWall(this, x, y)) return false

    this.x = x
    this.y = y
    return true
}

Hero.prototype.evo = function(dt) {
    //dna.Sprite.evo(this, dt)
    this.nextFrame(dt)

    // move horizontally
    if (this.keys[1]) {
        this.moveTo(this.x - this.speed * dt, this.y)
    } else if (this.keys[3]) {
        this.moveTo(this.x + this.speed * dt, this.y)
    }

    // apply gravity
    this.dy += env.G*dt

    // vertical movement - jumps and gravity
    if (!this.moveTo(this.x, this.y + this.dy*dt)) {
        this.dy = 0
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

