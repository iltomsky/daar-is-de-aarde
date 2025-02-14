input.onGesture(Gesture.LogoDown, function () {
    basic.showArrow(ArrowNames.North)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.East)
    basic.clearScreen()
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showArrow(ArrowNames.South)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.West)
    basic.clearScreen()
})
