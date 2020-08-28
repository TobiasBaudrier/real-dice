let nombre = 0
input.onGesture(Gesture.Shake, function () {
    nombre = randint(1, 3)
    if (nombre == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        if (nombre == 2) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . #
                `)
        } else {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . #
                `)
        }
    }
})
basic.forever(function () {
	
})
