'use strict'

// control ghost
module.exports = {

    move: function(player, dir) {
        let h = lab.camera['hero' + player]
        if (h) {
            if (dir === 2 && !h.keys[dir]) {
                h.jump()
            }
            h.keys[dir] = true
        }
    },

    stop: function(player, dir) {
        let h = lab.camera['hero' + player]
        if (h) {
            h.keys[dir] = false
        }
    },

    use: function(player, action) {
        let h = lab.camera['hero' + player]
        if (!h) return

        h.use(action)
    },

    handlePad: function(player, pad, dt) {
        let h = lab.camera['hero' + player]
        if (!h) return

        for (let b = 0; b < 4; b++) {
            if (pad.buttons[b].pressed) {
                if (!h.keys[5+b]) {
                    h.use(b+1)
                    h.keys[5+b] = true
                }
            } else {
                h.keys[5+b] = false
            }
        }

        let x = 0
        if (pad.axes[0]) x = pad.axes[0]
        let y = 0
        if (pad.axes[1]) y = pad.axes[1]

        if (x < -0.2) this.move(player, 1)
        else this.stop(player, 1)

        if (x > 0.2) this.move(player, 3)
        else this.stop(player, 3)

        if (y < -0.8) this.move(player, 2)
        else this.stop(player, 2)

        if (y > 0.8) this.move(player, 4)
        else this.stop(player, 4)

    },

    evo: function(dt) {
        for (let i = 0; i < 2; i++) {
            let pad = navigator.getGamepads()[i];
            if (pad) this.handlePad(i+1, pad, dt)
        }
    },

}
