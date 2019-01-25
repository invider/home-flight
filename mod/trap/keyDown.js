let shots = 0

module.exports = function(e) {

    switch(e.code) {
        case 'KeyA': lab.control.move(1, 1); break;
        case 'KeyW': lab.control.move(1, 2); break;
        case 'KeyD': lab.control.move(1, 3); break;
        case 'KeyS': lab.control.move(1, 4); break;
        case 'Space': case 'KeyE': if (!e.repeat) lab.control.use(1); break;

        case 'ArrowLeft': lab.control.move(2, 1); break;
        case 'ArrowUp': lab.control.move(2, 2); break;
        case 'ArrowRight': lab.control.move(2, 3); break;
        case 'ArrowDown': lab.control.move(2, 4); break;
        case 'ShiftRight': case 'Enter': lab.control.use(2); break;

        case 'Digit8':
            if (!e.repeat) {
                lib.img.screenshot('ritual-' + (++shots))
            }
            break;
    }
};
