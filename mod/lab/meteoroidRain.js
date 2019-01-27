'use strict'

// define rect to hit
const HIT_SX = 2
const HIT_SY = 5
const HIT_W = 22
const HIT_H = 9

function determineHitTarget() {
    let x = HIT_SX + lib.math.rndi(HIT_W)
    let y = HIT_SY + lib.math.rndi(HIT_H)

    let ls = lab.collider.filterWithin(x, y, 0.9, 0.9).filter(e => e.solid)
    if (ls.length > 0) return false

    return {
        x: x,
        y: y
    }
}

function tryMultipleTargets() {
    for (let i = 0; i < 20; i++) {
        let tar = determineHitTarget()
        if (tar) return tar
    }
    return false
}

module.exports = {

    Z: 102,

    freq: 1,

    meteoroids: [],

    newMeteor: function() {
        let tar = tryMultipleTargets()
        if (!tar) return // can't find any target


        let meteor = {
            a: true,
            c: lib.math.rndi(3),
            m: 24 + lib.math.rndi(5),
            x: lib.math.rndi(ctx.width*2),
            y: 100,
            tar: tar,
            tx: lab.camera.screenX(tar.x),
            ty: lab.camera.screenY(tar.y),
            ttl: 2,
        }

        meteor.dx = (meteor.tx-meteor.x)/meteor.ttl
        meteor.dy = (meteor.ty-meteor.y)/meteor.ttl

        // place the meteor
        for (let i = 0; i < this.meteoroids.length; i++) {
            if (!this.meteoroids[i].a) {
                this.meteoroids[i] = meteor
                return
            }
        }
        this.meteoroids.push(meteor)
    },

    evo: function(dt) {
        if (lib.math.rndf() < this.freq * dt) this.newMeteor()

        this.meteoroids.forEach(m => {
            m.x += m.dx * dt
            m.y += m.dy * dt
            m.ttl -= dt
            if (m.ttl < 0) m.a = false
        })
    },

    draw: function() {
        // draw meteoroids
        this.meteoroids.forEach( m => {
            if (m.a) {
                let img = res['star-blue']
                switch(m.c) {
                case 1: img = res['star-blue']; break;
                case 2: img = res['star-yellow']; break;
                }
                ctx.drawImage(img, m.x-m.m/2, m.y-m.m/2, m.m, m.m)

                // mark target
                let TH = 2
                ctx.fillStyle = '#ff1020'
                ctx.fillRect(m.tx-TH, m.ty-TH, TH*2, TH*2)
            }
        })
    },
}
