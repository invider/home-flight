'use strict'

// control ghost
module.exports = {

    move: function(player, dir) {
        let h = lab.camera['hero' + player]
        if (h) {
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
        if (h) {
            h.use(action)
        }
    },

}
