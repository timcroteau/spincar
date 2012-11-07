var target = document.getElementById("car");
var maxDistance = 10;  // swipe movement of 10 pixels triggers the swipe
var startX;
var bgX;
var startEvent = 'createTouch' in document || 'onTouchStart' in window ? 'touchstart' : 'mousedown';
var moveEvent = 'createTouch' in document || 'onTouchStart' in window ? 'touchmove' : 'mousemove';
var endEvent = 'createTouch' in document || 'onTouchStart' in window ? 'touchend' : 'mouseup';
var inWin = 0; 

// kill moveEvent if the cursor leaves the window 
// (so an unclicked mouse won't spin the car when you enter the window again)

window.onmouseout = function(e) {
   inWin--;
   setTimeout(checkIfOut, 1);
}
window.onmouseover = function(e) {
   inWin++;
}

function checkIfOut() {
   if (!inWin) {
     target.removeEventListener(moveEvent, handleMove, false);
   }
}

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

    var currentDistance = Math.abs(currentX - startX),
        position = [bgX + "px","0"];
        currentTime = e.timeStamp

        if ((currentX > startX) && (currentDistance > maxDistance)) {
            // swipe right code here
            bgX = currentDistance * (-520);
            target.style.backgroundPosition = position.join(" ");
        }

        if ((currentX < startX) && (currentDistance > maxDistance)) {
            // swipe left code here
            bgX = currentDistance * 520;
            target.style.backgroundPosition = position.join(" ");
        }
    }

handleStop = function(e) {
    target.removeEventListener(moveEvent, handleMove, false);
}

target.addEventListener(startEvent, handleStart, false);
target.addEventListener(endEvent, handleStop, false);var target = document.getElementById("car");
var maxDistance = 10;  // swipe movement of 10 pixels triggers the swipe
var startX;
var bgX;
var startEvent = 'createTouch' in document || 'onTouchStart' in window ? 'touchstart' : 'mousedown';
var moveEvent = 'createTouch' in document || 'onTouchStart' in window ? 'touchmove' : 'mousemove';
var endEvent = 'createTouch' in document || 'onTouchStart' in window ? 'touchend' : 'mouseup';
var inWin = 0; 

// kill moveEvent if the cursor leaves the window 
// (so an unclicked mouse won't spin the car when you enter the window again)

window.onmouseout = function(e) {
   inWin--;var target = document.getElementById("car");
var maxDistance = 10;  // swipe movement of 10 pixels triggers the swipe
var startX;
var bgX;
var startEvent = 'createTouch' in document || 'onTouchStart' in window ? 'touchstart' : 'mousedown';
var moveEvent = 'createTouch' in document || 'onTouchStart' in window ? 'touchmove' : 'mousemove';
var endEvent = 'createTouch' in document || 'onTouchStart' in window ? 'touchend' : 'mouseup';
var inWin = 0; 

// kill moveEvent if the cursor leaves the window 
// (so an unclicked mouse won't spin the car when you enter the window again)

window.onmouseout = function(e) {
   inWin--;
   setTimeout(checkIfOut, 1);
}
window.onmouseover = function(e) {
   inWin++;
}

function checkIfOut() {
   if (!inWin) {
     target.removeEventListener(moveEvent, handleMove, false);
   }
}

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

    var currentDistance = Math.abs(currentX - startX),
        position = [bgX + "px","0"];
        currentTime = e.timeStamp

        if ((currentX > startX) && (currentDistance > maxDistance)) {
            // swipe right code here
            bgX = currentDistance * (-520);
            target.style.backgroundPosition = position.join(" ");
        }

        if ((currentX < startX) && (currentDistance > maxDistance)) {
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
   setTimeout(checkIfOut, 1);
}
window.onmouseover = function(e) {
   inWin++;
}

function checkIfOut() {
   if (!inWin) {
     target.removeEventListener(moveEvent, handleMove, false);
   }
}

// END "in Window?" test

handleStart = function(e) {
    e.preventDefault();
    startX = e.pageX;
    target.addEventListener(moveEvent, handleMove, false);
}

handleMove = function(e) {
    e.preventDefault();
    var currentX = e.pageX,
        currentDistance = Math.abs(currentX - startX),
        position = [bgX + "px","0"];
        currentTime = e.timeStamp
        
        if ((currentX > startX) && (currentDistance > maxDistance)) {
            // swipe right code here
            bgX = currentDistance * (-520);
            target.style.backgroundPosition = position.join(" ");
        }

        if ((currentX < startX) && (currentDistance > maxDistance)) {
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