/**
 * makecode BH1750 Digital Ambient Light Sensor Package.
 * From microbit/micropython Chinese community.
 * http://www.micropython.org.cn
 */


/**
 * BH1750 Digital Ambient Light Sensor Package
 */
//% weight=100 color=#000011 icon="\uf185"
namespace BH1750 {
  
    //% blockId="BH1750_INIT" block="set Address %addr"
    //% weight=100 blockGap=8

    export function init(): void {
        serial.redirect(SerialPin.P0, SerialPin.P1, 115200)
    }

  

    /**
     * turn on BH1750.
     */
    //% blockId="BH1750_ON" block="turn on"
    //% weight=90 blockGap=8
   
    /**
     * turn off BH1750, to reduce power consumption.
     */
    //% blockId="BH1750_OFF" block="turn off"
    //% weight=90 blockGap=8

	export function exit(): void {
        serial.redirectToUSB()
    }


    /**
     * get ambient light data (lx)
     */
    //% blockId="BH1750_GET_INTENSITY" block="get intensity (lx)"
    //% weight=80 blockGap=8
	export function transfer(): void {
        serial.writeString("motor")
    }

}  
