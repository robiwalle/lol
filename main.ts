input.onButtonPressed(Button.A, function () {
    basic.showString(control.deviceName())
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(control.deviceSerialNumber())
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        . # . # #
        . # . . .
        . . # . #
        . # # . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 5000, 255, 0, 500, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
})
music.playTone(523, music.beat(BeatFraction.Whole))
music.playTone(392, music.beat(BeatFraction.Whole))
music.playTone(440, music.beat(BeatFraction.Whole))
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(262, music.beat(BeatFraction.Whole))
basic.forever(function () {
	
})
