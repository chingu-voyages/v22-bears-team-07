// Javascript for Chingu V22 Bears team 07
// Sound and Silence
// Color and Contrast
// Communication and Contribution
// script for : Interactive color wheel


let CANVAS;
let CTX;
let CENTERX;
let CENTERY;
let ENDX;
let ENDY;
let HALF;
let RADIONE;
let RADITWO;
let BALL1;
let BALL2;
let CIRCLE;

/*  Wheel grid  ASCII diagram:
    x=0 ------------------------------------> x = width
    y=0 |                 ______
        |  outer(200, 200, 200)   *
        |          *                   *
        |       *                 middle any rgb combo or single over 200, but not all three
        |     *              _____           *
        |   *  SECTION    *---------* ring=r   *
        |  *   |   |    *  rgb(0,0,0)*  r |r |r  *
        | --------------   CENTER --------------
        |...          BOTTOM HALF OF CIRCLE
y=height
   The circle has 16 sections of color.  We need to determine which quadrant
   by RGB, and which ring

*/

class WheelGrid {
  constructor () {
  this.SLICE = {
  'fuscia': ['H', 'L', 'M'],
  'red': [['H', 'L', 'L'], ['M', 'L', 'L'], ['H', 'M', 'M']],
  'brick': ['M', 'M', 'L'],
  'orange': ['H', 'M', 'L'],
  'tang': ['M', 'M', 'L'],
  'yellow': [['H', 'H', 'L'], ['H', 'H', 'M']],
  'lime': ['M', 'H', 'L'],
  'green': [['L', 'H', 'L'], ['M', 'H', 'M'], ['L', 'H', 'L']],
  'aqua': [['L', 'M', 'M'], ['L', 'H', 'H']],
  'blue': [['L', 'L', 'H'], ['M', 'M', 'H'], ['L', 'M', 'H']],
  'pursian': ['M', 'L', 'H'],
  'purple': [['M', 'L', 'M'], ['H', 'L', 'H']],
  }
}
}

function set_WHEEL() {
    console.log('setting wheel')
    CANVAS = document.getElementById('mycanvas');
    CTX = CANVAS.getContext("2d")
    CENTERX = Math.round(CANVAS.width / 2)
    CENTERY = Math.round(CANVAS.height / 2)
    HALF = Math.round((CANVAS.width + CANVAS.height) / 4)
    ENDX = CANVAS.width
    ENDY = CANVAS.height
    let diameter = CANVAS.width
    let radius = Math.round(diameter / 2)
    let section = Math.round(diameter / 3.14)


    CIRCLE = {
      'DIAMETER': diameter,
      'RADIUS': radius,
      'SECTION': section,
    }

    RADIONE = {
        'xpos': 0,
        'ypos': CENTERY,
        'endx': CENTERX,
        'endy': CENTERY,
        'length': HALF
    }
    RADITWO = {
        'xpos': ENDX,
        'ypos': CENTERY,
        'endx': CENTERX,
        'endy': CENTERY,
        'length': HALF

    }
    BALL1 = {
        'xpos': 0,
        'ypos': CENTERY,
        'radius': 5,

    }

    BALL2 = {
        'xpos': ENDX,
        'ypos': CENTERY,
        'radius': 5,

    }



}

function drawArm1() {

    CTX.beginPath()
    CTX.moveTo(RADIONE.xpos, RADIONE.ypos)
    CTX.lineTo(RADIONE.endx, RADIONE.endy)
    CTX.lineWidth = 3
    CTX.strokeStyle = 'white';
    CTX.stroke()

}

function drawArm2() {
    CTX.beginPath();
    CTX.moveTo(RADITWO.xpos, RADITWO.ypos)
    CTX.lineTo(RADITWO.endx, RADITWO.endy)
    CTX.stroke()
}

function drawBall1() {
    ux = BALL1.xpos
    uy = BALL1.ypos
    var radgrad2 = CTX.createRadialGradient(ux, uy, 20, 112, 120, 50);
    radgrad2.addColorStop(0, 'rgb(0, 0, 0)');
    radgrad2.addColorStop(0.75, 'rgb(240, 240, 240)');
    radgrad2.addColorStop(1, 'rgba(255, 251, 236, 0.5)');

    CTX.beginPath()

    /* var radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
     * radgrad2.addColorStop(0, '#FF5F98');
     * radgrad2.addColorStop(0.75, '#FF0188');
     * radgrad2.addColorStop(1, 'rgba(255, 1, 136, 0)');
     * ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
     * reference link: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
     */
    CTX.arc(ux + 10, uy, 10, 0, Math.PI * 2, true)
    CTX.fillStyle = radgrad2
    CTX.fill()
}

function drawBall2() {
    ux = BALL2.xpos - 20
    uy = BALL2.ypos
    //console.log(ux, uy)

    var radgrad2 = CTX.createRadialGradient(ux, uy, 6, ux - 6, uy, 3);
    radgrad2.addColorStop(0, 'rgb(110, 110, 110)');

    radgrad2.addColorStop(1, 'rgb(0, 0, 0)');


    CTX.beginPath()

    /* var radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
     * radgrad2.addColorStop(0, '#FF5F98');
     * radgrad2.addColorStop(0.75, '#FF0188');
     * radgrad2.addColorStop(1, 'rgba(255, 1, 136, 0)');
     * ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
     * reference link: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
     */
    CTX.arc(ux + 10, uy, 5, 0, Math.PI * 2, true)
    CTX.fillStyle = radgrad2
    CTX.fill()
}


function move_end(points) {
    newx = points[0]
    newy = points[1]

}

function getCOLORs(){
  let d = CIRCLE.DIAMETER
  let r = CIRCLE.RADIUS
  let newcoords = new WheelGrid(d, r)
  let firstcol = document.getElementById('hex')
}

function update() {
  /*
    drawArm1()
    drawArm2()
    drawBall1()
    drawBall2()
    */
}

window.addEventListener('load', (event) => {
    set_WHEEL()
    update()
});
