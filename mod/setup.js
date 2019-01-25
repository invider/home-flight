
let ZOOM = 120

module.exports = function() {

    log.out('setting up')

    sys.spawn('SlideCamera', {
        name: 'camera', 
        Z: 10,
        x: 0,
        y: 0,
        scale: ZOOM,
        speed: ZOOM*8,
        keys: []
    });

    // setup level according to hash
    if (window.location.hash) {
        lab.game.nextLevel(parseInt(window.location.hash.substring(1)))
    } else {
        lab.game.nextLevel();
    }

    sys.spawn('Hero', {
        name: 'hero-1',
        Z: 100, 
        x: 200,
        y: 200,
        tiles: res.sprite,
        w: 100,
        h: 100,
        aw: 100,
        ah: 100,
        startTilex: 0,
        endTilex: 5,
        framerate: 9,
    });


    env.debug = true
    env.status = 'debug mode'
}
