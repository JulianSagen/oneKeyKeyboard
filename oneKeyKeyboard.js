/**
 * Created by Teritry on 06.09.2017.
 */

var timePressed = 0;
var text = "a";
window.onkeypress = function(e) {
    if(e.which == 13) {
            if(!timePressed){
                timePressed = (new Date()).getTime();
            }
    }
}


window.onkeyup = function(e) {
    if(e.which == 13) {
        var timePressedDown = (new Date()).getTime() - timePressed;
        if (true){
            $('#oneButtonEditor').val($('#oneButtonEditor').val() + text);
            console.log(timePressedDown);
            timePressed = 0;
        }
    }
}