'use strict'

const GAMEOVER = 'GAME OVER'
const MESSAGE = 'Wake Up, Astronaut!'
const MESSAGE2 = "It's time for Skool!"

module.exports = {
    Z: 1001,

    draw: function() {
        if (!lab.game.over) return

        ctx.fillStyle = '#00000090'
        ctx.fillRect(0, ctx.height/2-120, ctx.width, 240)

        ctx.fillStyle = '#fca714'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'bottom'

        ctx.font = '48px neuropol-x'
        ctx.fillText(GAMEOVER, ctx.width/2, ctx.height/2 - 20)

        ctx.font = '28px neuropol-x'
        ctx.fillText(MESSAGE, ctx.width/2, ctx.height/2 + 45)
        ctx.font = '28px neuropol-x'
        ctx.fillText(MESSAGE2, ctx.width/2, ctx.height/2 + 85)
    }

}

