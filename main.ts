
namespace commu {

    export function init(): void {
        serial.redirect(SerialPin.P0, SerialPin.P1, 115200)
    }

    export function exit(): void {
        serial.redirectToUSB()
    }

    export function transfer(): void {
        serial.writeString("motor")
    }

}  
