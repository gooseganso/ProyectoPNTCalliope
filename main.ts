input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(500)
    isBusy = true
    clear = input.lightLevel()
    if (clear >= 190) {
        basic.showIcon(IconNames.Happy)
        music.playTone(587, music.beat(BeatFraction.Whole))
        basic.setLedColor(0x00ff00)
        basic.showString("Potab")
    } else if (clear < 189 || clear > 171) {
        basic.showIcon(IconNames.Confused)
        music.playTone(392, music.beat(BeatFraction.Whole))
        basic.setLedColor(0xff8000)
        basic.showString("No Pot")
    }
    basic.pause(5000)
    isBusy = false
})
let clear = 0
let isBusy = false
let isFaceUp = false
basic.showString("Pot Agua.")
basic.showIcon(IconNames.Umbrella)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showIcon(IconNames.ArrowEast)
basic.pause(100)
isBusy = false
basic.pause(500)
basic.forever(function () {
    basic.pause(500)
    basic.showString("Espere")
    basic.setLedColor(0x0000ff)
    clear = input.lightLevel()
    isFaceUp = input.isGesture(Gesture.ScreenUp)
    basic.pause(500)
    if (isBusy == false) {
        if (isFaceUp == false) {
            isBusy = true
            basic.showString("Boca Arriba")
            basic.pause(100)
        }
        basic.showString("Bot. sob. pant")
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(500)
        basic.showString("Opr A: listo")
        isBusy = false
        basic.pause(5000)
    }
})
