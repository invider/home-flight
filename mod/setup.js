
let ZOOM = 50

module.exports = function() {

    log.out('setting up')

    sys.spawn('SlideCamera', {
        name: 'camera', 
        Z: 10,
        x: 12,
        y: 10,
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
        name: 'hero1',
        Z: 100, 
        x: 10,
        y: 10,
        tiles: res.sprite,
        w: 1,
        h: 1,
        aw: 1,
        ah: 1,
        startTilex: 0,
        endTilex: 5,
        framerate: 9,
    }, 'camera');

    env.debug = true
    env.status = 'debug mode'
}
