module.exports = function(e) {

    if (_.paused && e.code !== 'Digit8') {
        _.paused = false
        return
    }

    switch(e.code) {

        case 'KeyA': lab.control.stop(1, 1); break;
        case 'KeyW': lab.control.stop(1, 2); break;
        case 'KeyD': lab.control.stop(1, 3); break;
        case 'KeyS': lab.control.stop(1, 4); break;
        case 'Space': case 'KeyE': if (!e.repeat) lab.control.use(1); break;

        case 'ArrowLeft': lab.control.stop(2, 1); break;
        case 'ArrowUp': lab.control.stop(2, 2); break;
        case 'ArrowRight': lab.control.stop(2, 3); break;
        case 'ArrowDown': lab.control.stop(2, 4); break;
        case 'ShiftRight': case 'Enter': lab.control.use(2); break;

        case 'KeyP': _.paused = true; break;
    }

};
