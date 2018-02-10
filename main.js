var interval;

const buttonMapping = {
    0: 'A',
    1: 'X',
    2: 'B',
    3: 'Y',
    4: 'RSL',
    5: 'RSR',
    14: 'R',
    15: 'RT',
    9: 'PLUS',
    12: 'HOME',
    11: 'RA',
    26: 'LA',
    18: 'UP',
    19: 'RIGHT',
    17: 'DOWN',
    16: 'LEFT',
    31: 'LT',
    30: 'L',
    24: 'MINUS',
    29: 'CAPTURE',
    21: 'LSR',
    20: 'LSL'

}

const pressedButtons = document.querySelector('#buttonsPressed');

if (!('ongamepadconnected' in window)) {
  // No gamepad events available, poll instead.
  interval = setInterval(pollGamepads, 100);
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
  console.log(gamepads);
}

function pollGamepads() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
  let pressed = [];

    for (let g = 0; g < gamepads.length; g++) {
        const gp = gamepads[g];
        if (!!gp) {
            
            for(let i = 0; i < gp.buttons.length; i++) {
                

                if(gp.buttons[i].pressed) {
                    const id = (g * 15) + i + g;
                    const button = buttonMapping[id] || id;
                    pressed.push(button);
                }

            }

            
        }
    }
    if(pressed.length === 0) {
        pressedButtons.innerHTML = 'No button pressed at the moment...';
    } else {
        pressedButtons.innerHTML = pressed.join(' + ');
    }
}