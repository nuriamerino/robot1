input.onGesture(Gesture.Shake, function () {
    X = randint(0, 2)
    if (X == 2) {
        basic.showIcon(IconNames.Scissors)
    }
    if (X == 0) {
        basic.showIcon(IconNames.Chessboard)
    }
    if (X == 1) {
        basic.showIcon(IconNames.Square)
    }
})
let X = 0
X = 2
let Y = 2
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        if (Y < 4) {
            led.unplot(X, Y)
            Y += 1
            led.plot(X, Y)
            basic.pause(100)
        }
    }
    if (input.isGesture(Gesture.LogoDown)) {
    	
    }
    if (Y > 0) {
        led.unplot(X, Y)
        Y += -1
        led.plot(X, Y)
        basic.pause(100)
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        if (0 > 0) {
            led.unplot(X, Y)
            Y += -1
            led.plot(X, Y)
            basic.pause(100)
        }
    }
    if (input.isGesture(Gesture.TiltRight)) {
        if (X < 4) {
            led.unplot(X, Y)
            X += 1
            led.plot(X, Y)
            basic.pause(100)
        }
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Angry)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) < -20) {
        basic.showString("<")
    }
    if (input.acceleration(Dimension.X) < 20) {
        basic.showString(">")
    }
    if (input.acceleration(Dimension.Y) < 20) {
        basic.showString("*")
    }
    if (input.acceleration(Dimension.Y) < -20) {
        basic.showString("$")
    }
})
