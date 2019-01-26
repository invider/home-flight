
let ZOOM = 30

module.exports = function() {

    log.out('setting up')

    sys.spawn('SlideCamera', {
        name: 'camera', 
        Z: 10,
        x: 13,
        y: 8,
        scale: ZOOM,
        speed: ZOOM*8,
        keys: []
    });

    /*
    sys.spawn('Grid', {
        Z: 10000,
        color: '#ffffff',
        top: 10,
        step: 1,
        coordinates: false,
        style: 'target',
    }, 'camera');
    */


    // setup level according to hash
    if (window.location.hash) {
        lab.game.nextLevel(parseInt(window.location.hash.substring(1)))
    } else {
        lab.game.nextLevel();
    }

    sys.spawn('home/TriggerControl', {
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

    sys.spawn('home/TriggerControl', {
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

    env.sfxVolume = 0.7
    sys.augment(env, env.tuning)

    env.debug = false
    
    console.dir(navigator.getGamepads())
}
