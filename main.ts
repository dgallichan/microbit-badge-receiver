radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(9)
basic.forever(function () {
    basic.showString("Hiya!")
})
