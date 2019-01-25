'use strict'

// control ghost
module.exports = {

    move: function(player, dir) {
        //log.out('moving ' + player + ' -> ' + dir)
    },

    stop: function(player, dir) {
        log.out('stoping ' + player + ' -> ' + dir)
    },

    use: function(player) {
        log.out('using ' + player)
    },

}
