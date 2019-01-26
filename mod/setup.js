
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

    /*
    sys.spawn('Hero', {
         name: 'hero1',
         Z: 100, 
         x: 5,
         y: 2,
         startTilex: 0,
         endTilex: 5,
         framerate: 9,
    }, 'camera');
    */

    // sys.spawn('Hero', {
    //     name: 'hero3',
    //     Z: 100, 
    //     x: 12,
    //     y: 12,
    //     tiles: res.sprite,
    //     w: 1,
    //     h: 1,
    //     aw: 1,
    //     ah: 1,
    //     startTilex: 0,
    //     endTilex: 5,
    //     framerate: 9,
    // }, 'camera');

    sys.spawn('TriggerControl', {
        name: 'triggerControl1', 
        Z: 10,
        x: 50,
        y: 50,
        w: 50,
        h: 50,
        scale: ZOOM,
        speed: ZOOM*8,
        keys: []
    });

    sys.spawn('TriggerControl', {
        name: 'triggerControl2', 
        Z: 10,
        x: 150,
        y: 50,
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
