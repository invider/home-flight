var TYPEMAP = {
    '*': 'home/Floor',
    '|': 'home/Wall',
    'r': 'roof',
    '@': {proto:"Hero", params: {
        name: "hero1",
        controlName: "triggerControl1",
    }},
    '#': {proto:"Hero", params: {
        name: "hero2",
        controlName: "triggerControl2",
    }},
    'w': 'home/controls/WindowTrigger',
    'm': 'home/controls/MicrowaveTrigger',
    'T': 'home/controls/TestTrigger'
};


module.exports = TYPEMAP;
