var TYPEMAP = {
    '*': 'home/floor',
    'r': 'roof',
    '@': {proto:"Hero", params: {
        name: "hero1",
        controlName: "triggerControl1",
    }},
    '#': {proto:"Hero", params: {
        name: "hero2",
        controlName: "triggerControl2",
    }},
    'T': 'home/controls/TestTrigger'
};


module.exports = TYPEMAP;
