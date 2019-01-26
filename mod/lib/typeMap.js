var TYPEMAP = {
    '*': 'home/floor',
    'r': 'roof',
    '@': {proto:"Hero", params: {
        name: "hero1",
        startTilex: 0,
        endTilex: 5,
        framerate: 9,
        z: 100,
        w: 1,
        h: 1,
        aw: 1,
        ah: 1
    }},
    '#': {proto:"Hero", params: {
        name: "hero2",
        startTilex: 0,
        endTilex: 5,
        framerate: 9,
        z: 100,
        w: 1,
        h: 1,
        aw: 1,
        ah: 1,
    }},
    'T': 'home/controls/TestTrigger'
};


module.exports = TYPEMAP;