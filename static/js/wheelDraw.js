//Javascript source code for color wheel interaction
/* Developed for Chingu Voyage 22, Team Bears 07
* Team memebers: Regina and Nellie
* Code Author: Nellie Tobey
* this file contains the bits and bobs that control drawing
* the color wheel in it's Primary, Secondary and the qaudrants inbetween.
* Traditional web documentation color wheels do not follow the artistic
* examples that have contrary colors aligned across from each other,
* and rely on HSL to determine contrast.
* The goal is to leave the art worlds color wheel example for designers
* to reference when trying to find contrasting and complimentary colors.
* linking this script above the color_calc.js file allows
* color calc to access the desired functions.
* the quadrant and draw of lines between the points of color
* will be established in color_calc.
*/

let COLOR = {
            'r': 0,
            'g': 0,
            'b': 0,
        }

let FAMILY = 'None'

const QUADRANTS = {
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

const GREYS = {
    'white': ['H', 'H', 'H'],
    'silver': ['M', 'M', 'M'],
    'grey': ['LM', 'LM', 'LM'],
    'black': ['L', 'L', 'L'],
}

function colorPlace() {
    let r = COLOR.r
    let g = COLOR.g
    let b = COLOR.b
    let colorstring = 'rgb(' + r + ',' + g + ',' + b + ')'
    let display = document.getElementById('main')
    display.style.background = colorstring
    createHML()
  }

  function setRGB() {
    let r = document.getElementById('RED').value
    let g = document.getElementById('GREEN').value
    let b = document.getElementById('BLUE').value
    COLOR.r = r
    COLOR.g = g
    COLOR.b = b
    colorPlace()

}


function getfamily(hsl) {
    //check monochromes
    let family = 'None'
    for (let item in GREYS) {
        let color = GREYS[item]
        if (color[0] == hsl[0] && color[1] == hsl[1] && color[2] == hsl[2]) {
            family = item

        }

    };
    if (family == 'None') {
        for (let item in QUADRANTS) {
            current = QUADRANTS[item]
            let type = current[0]

            if (typeof type == 'string') {
                if (current[0] == hsl[0] && current[1] == hsl[1] && current[2] == hsl[2]) {

                    family = item
                    break;
                }
            }
            else {
                for (let i in current) {
                    let alist = current[i]
                    //console.log(alist, hsl)
                    if (alist[0] == hsl[0] && alist[1] == hsl[1] && alist[2] == hsl[2]) {

                        family = item
                        break;
                    }
                };
            }
        //console.log(hsl, current)
        };
    }
    //FAMILY = family
    let ppfamily = "--~~--~~--~~--~~--\n" + family + "\n--~~--~~--~~--~~--"
    let div = document.getElementById("color_family")
    div.innerHTML = ppfamily
    console.log(ppfamily)


}




function createHML() {
    let r1 = COLOR.r
    let g1 = COLOR.g
    let b1 = COLOR.b
    let HSL = []
    if (r1 > 170) {
        HSL.push('H')

    }
    else if (r1 > 85) {
        HSL.push('M')

    }
    else {
        HSL.push('L')
    }
    if (g1 > 170) {
        HSL.push('H')
    }
    else if (g1 > 85) {
        HSL.push('M')

    }
    else {
        HSL.push('L')
    }

    if (b1 > 170) {
        HSL.push('H')
    }
    else if (b1 > 85) {
        HSL.push('M')
    }
    else {
        HSL.push('L')
    }
    console.log(HSL)
    getfamily(HSL)
}



function getColor(rgb) {
    let nums = rgb.toString().replace("rgb(", "")
    nums = nums.replace(")", "")
    let numlist = nums.split(",")
    let intlist = []
    for (item in numlist) {
        strnum = numlist[item]
        let newint = Number(strnum)
        intlist.push(newint)
    }

    //console.log(intlist)
    return intlist
}


function Shade(ctx, radius) {
    let canvas = document.getElementById('mycanvas')
    let centerX = Math.round(canvas.width / 2)
    let centerY = Math.round(canvas.height / 2)
    let thirdR = Math.round(radius / 3)
    let r0 = radius
    //console.log(`r0 = ${r0}`)

    //CanvasGradient ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
    var gradient = ctx.createRadialGradient(centerX, centerY, thirdR, centerX, centerY, r0);
    let white = "rgba(255, 255, 255, 0.2)"
    let white2 = "rgba(255, 255, 255, 0.8)"
    let black = "rgba(10, 10, 10, 0.8)"
    let black2 = "rgba(15, 15, 15, 0.2)"


    gradient.addColorStop(0, black)
    gradient.addColorStop(0.25, black2)
    gradient.addColorStop(0.5, 'transparent');
    gradient.addColorStop(0.75, white)
    gradient.addColorStop(1, white2)
    //gradient.addColorStop(1, white)





    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height)


}

function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {



    ctx.fillStyle = color;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}

function drawChart() {
    colordata = {
        "FUSCIA": 8,
            "RED": 9,
        "RDORNG": 8,
            "ORANGE": 8,
        "LTORNG": 8,
        "YELLOW": 9,
        "LIME": 8,
        "GREEN": 8,
        "AQUA": 8,
            "BLUE": 9,
        "DARKPP": 8,
        "PURPLE": 8,
    }
    //FUSCIA  RGB(204 , 20 , 198) RED rgb(255, 0, 0) DRKORNG rgb(205, 75, 20) Orange rgb(255, 123, 0) -yellow RGB(253 , 226 , 48) yellow rgb(255, 255, 0) lime rgb(205, 255, 49)
    options = {

        canvas: mycanvas,
        data: colordata,
        colors: ["rgb(204 , 20 , 198)", "rgb(255, 0, 0)", "rbg(205 , 75 , 24)", "rgb(255, 123, 0)", "rgb(250, 226, 48)", "rgb(255, 255, 0)","rgb(205, 255, 48)", "rgb(0, 255, 0)","rgb(48, 255, 200)", "rgb(45, 45, 255)","rgb(160, 48, 200)", "rgb(160, 45, 160)"]

    }
    mycanvas = document.getElementById('mycanvas')
    console.log(mycanvas.width, mycanvas.height)
    ctx = mycanvas.getContext("2d")
    var Piechart = function (options) {
        this.options = options;
        this.canvas = options.canvas;
        this.ctx = this.canvas.getContext("2d");
        this.colors = options.colors;


        this.draw = function () {
            var total_value = 0;
            var color_index = 0;
            for (var categ in this.options.data) {
                var val = this.options.data[categ];
                total_value += val;
            }

            var start_angle = 0;
            for (categ in this.options.data) {
                val = this.options.data[categ];
                var slice_angle = 2 * Math.PI * val / total_value;
                var defaultRadius = 150
                var radius = Math.min(this.canvas.width / 2, this.canvas.height / 2)

                drawPieSlice(
                    this.ctx,
                    this.canvas.width / 2,
                    this.canvas.height / 2,
                    radius,
                    start_angle,
                    start_angle + slice_angle,
                    this.colors[color_index % this.colors.length]
                );

                start_angle += slice_angle;
                color_index++;
            }

        }
    }
    var myPieChart = new Piechart(options)
    myPieChart.draw()
    Shade(ctx, 150)
    draw_points()
}

function listpoints(r) {
    let canvas = document.getElementById('mycanvas')
    let x = Math.round(canvas.width / 2)
    let y = Math.round(canvas.height / 2)
    let diff = 30

    var angle = 15 * (Math.PI / 180)
    var angle2 = 45 * (Math.PI / 180)
    var angle3 = 75 * (Math.PI / 180)
    var angle4 = 105 * (Math.PI / 180)
    var angle5 = 135 * (Math.PI / 180)
    var angle6 = 165 * (Math.PI / 180)
    var angle7 = 195 * (Math.PI / 180)
    var angle8 = 225 * (Math.PI / 180)
    var angle9 = 255 * (Math.PI / 180)
    var angle10 = 285 * (Math.PI / 180)
    var angle11 = 315 * (Math.PI / 180)
    var angle12 = 345 * (Math.PI / 180)

    //
    cos1 = Math.round(r * Math.cos(angle))
    sin1 = Math.round(r * Math.sin(angle))
    //
    cos2 = Math.round(r * Math.cos(angle2))
    sin2 = Math.round(r * Math.sin(angle2))
    //
    cos3 = Math.round(r * Math.cos(angle3))
    sin3 = Math.round(r * Math.sin(angle3))
    //
    cos4 = Math.round(r * Math.cos(angle4))
    sin4 = Math.round(r * Math.sin(angle4))
    //
    cos5 = Math.round(r * Math.cos(angle5))
    sin5 = Math.round(r * Math.sin(angle5))
    //
    cos6 = Math.round(r * Math.cos(angle6))
    sin6 = Math.round(r * Math.sin(angle6))
    //
    cos7 = Math.round(r * Math.cos(angle7))
    sin7 = Math.round(r * Math.sin(angle7))
    //
    cos8 = Math.round(r * Math.cos(angle8))
    sin8 = Math.round(r * Math.sin(angle8))
    //
    cos9 = Math.round(r * Math.cos(angle9))
    sin9 = Math.round(r * Math.sin(angle9))
    //
    cos10 = Math.round(r * Math.cos(angle10))
    sin10 = Math.round(r * Math.sin(angle10))
    //
    cos11 = Math.round(r * Math.cos(angle11))
    sin11 = Math.round(r * Math.sin(angle11))
    //
    cos12 = Math.round(r * Math.cos(angle12))
    sin12 = Math.round(r * Math.sin(angle12))
    //



    let r1 = [x + cos1, y - sin1]
    let r2 = [x + cos2, y - sin2]
    let r3 = [x + cos3, y - sin3]
    let r4 = [x + cos4, y - sin4]
    let r5 = [x + cos5, y - sin5]
    let r6 = [x + cos6, y - sin6]
    let r7 = [x + cos7, y - sin7]
    let r8 = [x + cos8, y - sin8]
    let r9 = [x + cos9, y - sin9]
    let r10 = [x + cos10, y - sin10]
    let r11 = [x + cos11, y - sin11]
    let r12 = [x + cos12, y - sin12]
    return [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12]

}


function draw_points() {
    //Thanks Regina!

    let outter = listpoints(130)
    let core = listpoints(90)
    let inner = listpoints(55)
    /* MDN:
     * ctx.moveTo(95, 65);
ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
ctx.stroke();
void ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
     */
    for (i in outter) {
        r1 = outter[i][0]
        r2 = outter[i][1]
        ctx.beginPath()
        ctx.arc(r1, r2, 5, 0, Math.PI * 2, true)
        ctx.stroke()
    };

    for (j in core) {
        rr1 = core[j][0]
        rr2 = core[j][1]
        ctx.beginPath()
        ctx.arc(rr1, rr2, 5, 0, Math.PI * 2, true)
        ctx.stroke()
    };

    for (k in inner) {
        rx = inner[k][0]
        ry = inner[k][1]
        ctx.beginPath()
        ctx.arc(rx, ry, 5, 0, Math.PI * 2, true)
        ctx.stroke()
    };


}

function listen_chart() {
    let chartbtn = document.getElementById('chartbtn')
    chartbtn.addEventListener('click', drawChart)
}

window.addEventListener('load', (event) => {
    listen_chart()
});
