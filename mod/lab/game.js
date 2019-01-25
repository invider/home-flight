'use strict'

let game = {
    level: 0,
    cycle: 0,

    evo: function(dt) {
        this.cycle++
    },

    nextLevel: function(level){
        if (level !== undefined) this.level = level;
        else this.level++;

        // loop to first level in the end
        let levelRes = res.levels[this.level];

        if (!levelRes) {
            this.level = 1;
            levelRes = res.levels[this.level];
        }

        log.out('Level Up to #' + this.level);
        window.location.hash = '' + this.level;
        
        this.loadLevel(levelRes)
    },

    gameOver: function(){
        this.loadLevel(res.levels.death);
        setTimeout(() => {
            lab.camera.x = 17;
            lab.camera.y = 8;
            lab.camera.scale = 25
        }, 1000);
        lib.sfx(res.sfx.ghost2, 1)
    },

    loadLevel: function(levelRes){
        lab.camera.detachAll();
        lib.levelLoader.loadFile(levelRes, lib.typeMap);
    },

};

module.exports = game;
