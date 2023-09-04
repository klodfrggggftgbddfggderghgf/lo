datalogger.onLogFull(function () {
    datalogger.deleteLog(datalogger.DeleteType.Full)
})
input.onButtonPressed(Button.A, function () {
    RTC_DS1307.setTime(RTC_DS1307.TimeType.SECOND, 0)
})
input.onButtonPressed(Button.B, function () {
    RTC_DS1307.setTime(RTC_DS1307.TimeType.SECOND, 0)
    ESP8266_IoT.uploadKidsiot(Environment.ReadDust(DigitalPin.P16, AnalogPin.P1))
})
ESP8266_IoT.iotSwitchEvent(ESP8266_IoT.KidsIotSwitchState.off, function () {
    datalogger.log(datalogger.createCV("on", false))
})
ESP8266_IoT.iotSwitchEvent(ESP8266_IoT.KidsIotSwitchState.on, function () {
    datalogger.log(datalogger.createCV("on", true))
})
RTC_DS1307.setTime(RTC_DS1307.TimeType.SECOND, 0)
OLED.init(128, 64)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("CMCC-zb7s", "by3ux7z2")
ESP8266_IoT.connectKidsiot("ef92afG5rNo6xGBr", "1")
OLED.writeStringNewLine("kidslot")
basic.forever(function () {
    if (RTC_DS1307.getTime(RTC_DS1307.TimeType.SECOND) == 120) {
        power.lowPowerRequest()
    }
})
