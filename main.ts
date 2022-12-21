let prevY = 0
let prevX = 0
let y = 0
let x = 0
let row = 0
let col = 0
let strip1 = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
let strip2 = neopixel.create(DigitalPin.P1, 15, NeoPixelMode.RGB)
let strip3 = neopixel.create(DigitalPin.P2, 15, NeoPixelMode.RGB)
strip1.clear()
strip2.clear()
strip3.clear()
basic.forever(function () {
    if (Math.abs(modules.gamepad1.x()) > 20) {
        x = Math.constrain(x + Math.map(modules.gamepad1.x(), -60, 60, -1, 1), 0, 14)
    }
    if (Math.abs(modules.gamepad1.y()) > 20) {
        y = Math.constrain(Math.map(modules.gamepad1.y(), -60, 60, -1, 1), 1, 15)
    }
    if (x != prevX || y != prevY) {
        prevX = x
        prevY = y
        strip1.clear()
        basic.pause(100)
        strip1.setPixelColor(x, neopixel.colors(NeoPixelColors.Red))
        strip1.show()
    }
})
