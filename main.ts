function updateLED () {
    strip1.clear()
    strip2.clear()
    strip3.clear()
    if (row == 0) {
        strip1.setPixelColor(col, neopixel.colors(NeoPixelColors.Red))
    } else if (row == 1) {
        strip2.setPixelColor(col, neopixel.colors(NeoPixelColors.Red))
    } else if (row == 2) {
        strip3.setPixelColor(col, neopixel.colors(NeoPixelColors.Red))
    }
    strip1.show()
    strip2.show()
    strip3.show()
}
modules.button2.onEvent(jacdac.ButtonEvent.Down, function () {
    if (row == 0) {
        if (col == 0) {
            modules.hidKeyboard1.key(jacdac.HidKeyboardAction.Press, modules.keyboardModifiers(jacdac.HidKeyboardModifiers.None), jacdac.HidKeyboardKey.Q)
            basic.showString("q")
        } else if (col == 1) {
            modules.hidKeyboard1.key(jacdac.HidKeyboardAction.Press, modules.keyboardModifiers(jacdac.HidKeyboardModifiers.None), jacdac.HidKeyboardKey.W)
            basic.showString("w")
        } else if (col == 2) {
            modules.hidKeyboard1.key(jacdac.HidKeyboardAction.Press, modules.keyboardModifiers(jacdac.HidKeyboardModifiers.None), jacdac.HidKeyboardKey.E)
            basic.showString("e")
        } else if (col == 3) {
            modules.hidKeyboard1.key(jacdac.HidKeyboardAction.Press, modules.keyboardModifiers(jacdac.HidKeyboardModifiers.None), jacdac.HidKeyboardKey.R)
            basic.showString("r")
        } else if (col == 4) {
            modules.hidKeyboard1.key(jacdac.HidKeyboardAction.Press, modules.keyboardModifiers(jacdac.HidKeyboardModifiers.None), jacdac.HidKeyboardKey.T)
            basic.showString("t")
        } else {
        	
        }
    } else if (row == 1) {
        if (col == 0) {
            modules.hidKeyboard1.key(jacdac.HidKeyboardAction.Press, modules.keyboardModifiers(jacdac.HidKeyboardModifiers.None), jacdac.HidKeyboardKey.A)
            basic.showString("a")
        } else if (col == 1) {
            modules.hidKeyboard1.key(jacdac.HidKeyboardAction.Press, modules.keyboardModifiers(jacdac.HidKeyboardModifiers.None), jacdac.HidKeyboardKey.S)
            basic.showString("s")
        } else if (col == 2) {
            modules.hidKeyboard1.key(jacdac.HidKeyboardAction.Press, modules.keyboardModifiers(jacdac.HidKeyboardModifiers.None), jacdac.HidKeyboardKey.D)
            basic.showString("d")
        }
    } else if (row == 2) {
        modules.hidKeyboard1.key(jacdac.HidKeyboardAction.Press, modules.keyboardModifiers(jacdac.HidKeyboardModifiers.None), jacdac.HidKeyboardKey.Z)
    }
})
function readJoystick () {
    if (Math.abs(modules.gamepad1.x()) > 20) {
        col = Math.round(Math.constrain(col + Math.map(modules.gamepad1.x(), -60, 60, -1, 1), 0, 14))
    }
    if (modules.gamepad1.y() > 50) {
        row = Math.constrain(row + 1, 0, 2)
    } else if (modules.gamepad1.y() < -50) {
        row = Math.constrain(row - 1, 0, 2)
    }
}
let prevRow = 0
let prevCol = 0
let strip3: neopixel.Strip = null
let strip2: neopixel.Strip = null
let strip1: neopixel.Strip = null
let col = 0
let row = 0
row = 0
col = 0
strip1 = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
strip2 = neopixel.create(DigitalPin.P1, 15, NeoPixelMode.RGB)
strip3 = neopixel.create(DigitalPin.P2, 15, NeoPixelMode.RGB)
let row1 = ["q", "w", "e"]
let row2 = ["a", "s", "d"]
let row3 = ["z", "x", "c"]
let keyboard = [row1, row2, row3]
basic.forever(function () {
    readJoystick()
    if (col != prevCol || row != prevRow) {
        prevCol = col
        prevRow = row
        updateLED()
        basic.pause(500)
    }
})
