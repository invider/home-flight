'use strict'

const title = '=  dream rocket boy  ='
const subtitle = 'incredible adventure of bedroom astronauts in outer space'

module.exports = {

    Z: 21,

    draw: function() {
        ctx.fillStyle = '#c040ff'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'bottom'

        ctx.font = '24px kenney-rocket-square'
        ctx.fillText(title, ctx.width/2, ctx.height-40)

        ctx.font = '14px kenney-rocket-square'
        ctx.fillText(subtitle, ctx.width/2, ctx.height-15)
    }
}
