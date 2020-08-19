// Javascript file for Chingu V22 bears team 07
// page: color.html
// description:  Color and Contrast,
//         a page to show how and why colors and contrast choices matter
//         toward an accessible page for all.


/*
  ----  CODE SOURCE LINKS ----
  SRC 1: //source 1*: https://medium.com/@bantic/hand-coding-a-color-wheel-with-canvas-78256c9d7d43
  ---- image canvas draw for the colored wheel ----



*/


let CANVAS;
let CTX;

function set_COLORDOM(){
    CANVAS = document.getElementById("colorcanvas")
    CTX = CANVAS.getContext("2d")


}


function drawCircle() {
//source 1* code=>
    let radius = 50;
    CTX.beginPath();
    let centerx = Math.round(CANVAS.width / 2)
    let centery = Math.round(CANVAS.height / 2)
    CTX.arc(centerx, centery, 100, 0, 2 * Math.PI);
    CTX.stroke();

    /*
    let data = image.data;

    for (let x = -radius; x < radius; x++) {
      for (let y = -radius; y < radius; y++) {
        let distance = Math.sqrt(x*x + y*y);

        if (distance > radius) {
          // skip all (x,y) coordinates that are outside of the circle
          continue;
        }

        // Figure out the starting index of this pixel in the image data array.
        let rowLength = 2*radius;
        let adjustedX = x + radius; // convert x from [-50, 50] to [0, 100] (the coordinates of the image data array)
        let adjustedY = y + radius; // convert y from [-50, 50] to [0, 100] (the coordinates of the image data array)
        let pixelWidth = 4; // each pixel requires 4 slots in the data array
        let index = (adjustedX + (adjustedY * rowLength)) * pixelWidth;
        data[index] = red;
        data[index+1] = green;
        data[index+2] = blue;
        data[index+3] = alpha;
      }
    }

    CTX.putImageData(image, 0, 0);
    */
  }



  window.addEventListener('load', (event) => {
      set_COLORDOM()
      drawCircle()
  });
