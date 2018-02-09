var interval;

const buttonMapping = {
    0: 'A',
    1: 'X',
    2: 'B',
    3: 'Y',
    4: 'SL',
    5: 'SR',
    14: 'R',
    15: 'RT',
    9: 'PLUS',
    12: 'HOME'
}

if (!('ongamepadconnected' in window)) {
  // No gamepad events available, poll instead.
  interval = setInterval(pollGamepads, 100);
}

function pollGamepads() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
  for (var i = 0; i < gamepads.length; i++) {
    var gp = gamepads[i];
    if (!!gp) {
      for(let i = 0; i < gp.buttons.length; i++) {
          if(gp.buttons[i].pressed) {
              console.log(buttonMapping[i]);
          }
      }
    }
  }
}