radio.setGroup(119);
let i2cBuffer = pins.createBuffer(2);
let i2cBuffer2 = pins.createBuffer(1);
let i2cBuffer3 = pins.createBuffer(2);
i2cBuffer.setNumber(NumberFormat.UInt8LE, 0, 0);
i2cBuffer.setNumber(NumberFormat.UInt8LE, 1, 3);
i2cBuffer2.setNumber(NumberFormat.UInt8LE, 0, 0x8F);
let distance: number;
serial.redirectToUSB();
basic.forever(function () {
    radio.sendValue("Distance", distance);

    basic.pause(300);
})
basic.forever(function () {
    bBoard_Control.i2cWriteBuffer(0x62, i2cBuffer, 0, ClickID.A);
    bBoard_Control.i2cWriteBuffer(0x62, i2cBuffer2, 0, ClickID.A);
    i2cBuffer3 = bBoard_Control.BLiX(0, ClickID.A, 0, I2C_module_id, I2C_READ_NO_MEM_id, [0x62, 2], null, 2);
    let MSB = i2cBuffer3.getUint8(0);
    let LSB = i2cBuffer3.getUint8(1);
    distance = (MSB << 8) | LSB;
    serial.writeNumber(distance);
})
