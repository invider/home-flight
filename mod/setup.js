
let ZOOM = 30

module.exports = function() {

    log.out('setting up')

    sys.spawn('SlideCamera', {
        name: 'camera', 
        Z: 10,
        x: 12,
        y: 5,
        scale: ZOOM,
        speed: ZOOM*8,
        keys: []
    });

    sys.spawn('Grid', {
        Z: 10000,
        color: '#ffffff',
        top: 10,
        step: 1,
        coordinates: false,
        style: 'target',
    }, 'camera');


    // setup level according to hash
    if (window.location.hash) {
        lab.game.nextLevel(parseInt(window.location.hash.substring(1)))
    } else {
        lab.game.nextLevel();
    }

    sys.spawn('Hero', {
        name: 'hero1',
        Z: 100, 
        x: 14,
        y: 2,
        tiles: res.sprite,
        startTilex: 0,
        endTilex: 5,
        framerate: 9,
    }, 'camera');

    sys.spawn('Hero', {
        name: 'hero2',
        Z: 100, 
        x: 6,
        y: 2,
        tiles: res.sprite,
        startTilex: 0,
        endTilex: 5,
        framerate: 9,
    }, 'camera');

    sys.spawn('TriggerControl', {
        name: 'triggerControl', 
        Z: 10,
        x: 10,
        y: 10,
        w: 50,
        h: 50,
        scale: ZOOM,
        speed: ZOOM*8,
        keys: []
    });

    sys.augment(env, env.tuning)
    env.debug = true
    env.status = 'debug mode'
}
