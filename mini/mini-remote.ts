let Swap = 0;
let Brightness = 100;
let Speed = 2;
radio.setGroup(30);

basic.forever(function () {
    if (Swap == 0) {
        if (input.buttonIsPressed(Button.AB)) {
            radio.sendValue("B", Brightness);
            Swap=1;
            basic.showString("S");
        }
        else if (input.buttonIsPressed(Button.A)) {
            Brightness -= 10;
            if (Brightness<=0){
                Brightness = 0;
            }
            basic.showNumber(Brightness/10, 50);
        }
        else if (input.buttonIsPressed(Button.B)) {
            Brightness += 10;
            if (Brightness>=250){
                Brightness = 250;
            }
            basic.showNumber(Brightness/10, 50);
        }
    }

    if (Swap == 1){
        if (input.buttonIsPressed(Button.AB)) {
            radio.sendValue("S", Speed);
            Swap = 0;
            basic.showString("B");
        }
        else if (input.buttonIsPressed(Button.A)) {
            Speed -= 1;
            if (Speed <= 1){
                Speed = 1;
            }
            basic.showNumber(Speed, 50);
        }
        else if (input.buttonIsPressed(Button.B)) {
            Speed += 1;
            if (Speed>=5){
                Speed = 5;
            }
            basic.showNumber(Speed, 50);
        }
    }
})
