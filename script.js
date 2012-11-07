var target = document.getElementById("car");
  // swipe movement of 10 pixels triggers the swipe
var startX;
var bgX;
var startEvent = 'createTouch' in document || 'onTouchStart' in window ? 'touchstart' : 'mousedown';
var moveEvent = 'createTouch' in document || 'onTouchStart' in window ? 'touchmove' : 'mousemove';
var endEvent = 'createTouch' in document || 'onTouchStart' in window ? 'touchend' : 'mouseup';
var inWin = 0; 


// END "in Window?" test

handleStart = function(e) {
    e.preventDefault();
    startEvent == 'mousedown' ? startX = e.pageX : startX = e.touches[0].pageX;
    target.addEventListener(moveEvent, handleMove, false);
}

handleMove = function(e) {
    e.preventDefault();

    var currentX;

    startEvent == 'mousedown' ? currentX = e.pageX : currentX = e.touches[0].pageX;

    var currentDistance = Math.round(Math.abs(currentX - startX)/10),
        position = [bgX + "px","0"];
        currentTime = e.timeStamp

        if (currentX > startX) {
            // swipe right code here
            bgX = currentDistance * (-520);
            target.style.backgroundPosition = position.join(" ");
        }

        if (currentX < startX) {
            // swipe left code here
            bgX = currentDistance * 520;
            target.style.backgroundPosition = position.join(" ");
        }
    }

handleStop = function(e) {
    target.removeEventListener(moveEvent, handleMove, false);
}

target.addEventListener(startEvent, handleStart, false);
target.addEventListener(endEvent, handleStop, false);