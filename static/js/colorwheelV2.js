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
  constructor(diameter, radius){
    this.diameter = diameter
    this.radius = radius
    this.ring = 'inner'
    this.quadrant = 'black'

  }
  set_ring(rgb) {
    let r = rgb[0]
    let g = rgb[1]
    let b = rgb[2]
    let total = r + g + b
    let primary = false;
    let outer = false;
    let inner = false;
    let max = Math.max(r, g, b)
    let min = Math.min(r, g, b)
    let diff = Math.abs(max - min)

    // NOTE**
       // THESE are just approximations
       // actual math and a true radiant/gradient circle mapping is done
       // as seen in this link: https://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
    // MONOCHROMATIC TREE
    if(diff < 75){
      // this is black, grey, or white. monochromatic
      if (max >= 210){
          // this is a light color:
          this.ring = 'outter'
        }
      else if (max < 210 && max > 75) {
        this.ring = 'grey'
      }
      else {
        this.ring = 'center'

      }

        }
    // QUADRANT BY DOMINANT
    // RED = R greater than G or B by 50 points
    // ORANGE = R > 200, G < 123, B < 15
      // ORANGE happens when R and G are high, and blue is low
    // YELLOW = R and G > 123   B only effects lightness
    // GREEN = G greater than B or R by 50 points
      // GREEN fades to yellow or Blue deteremined by RED amount
    // AQUA = G and B within 50 both > 200,  R < 50
    // BLUE WHEN ALL above is not true, and B > G by 50 points.
    //BLUE
    if (b > 200){
      if(r > 125 && g <= 75){
        this.quadrant = 'purple'
      }
      else if(g > 200 && red <= 125) {
        this.quadrant = 'aqua'
      }
      else {
        this.quadrant = 'blue'
      }
    }

    //RED
    if (r > 200) {
      if(g > 200 && b <= 125){
        this.quadrant = 'orange'
      }
      else if(g <= 140 && b <= 140){
        this.quadrant = 'yellow'
      }
      else if(b > 125){
        this.quadrant = 'purple'
      }
      else {
        this.quadrant = "red"
      }
    }
    //GREEN
    if (g > 200){
      if(r <= 164 && b <= 164){
        this.quadrant = 'green'
      }
      else if (r >= 190 && b <= 100){
        this.quadrant = 'orange'

      }
      else {
        this.quadrant = 'green'
      }
    }
  };


  get_placement() {
    console.log(this.quadrant, this.ring)
    return [this.quadrant, this.ring]
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
    console.log(ux, uy)
    var radgrad2 = CTX.createRadialGradient(ux, uy, 20, 112, 120, 50);
    radgrad2.addColorStop(0, 'rgba(200, 200, 200, 0.7)');
    radgrad2.addColorStop(0.5, 'rgba(0, 0, 0, 1)');
    radgrad2.addColorStop(1, 'rgba(200, 200, 200, 0.7)');

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
    drawArm1()
    drawArm2()
    drawBall1()
    drawBall2()
}

window.addEventListener('load', (event) => {
    set_WHEEL()
    update()
});
