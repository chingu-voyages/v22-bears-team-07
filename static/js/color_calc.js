//Javascript source code for color wheel interaction
/* Developed for Chingu Voyage 22, Team Bears 07
* Team memebers: Regina and Nellie
* Color wheel interaction is to show the different options
* for contrasting color and a self-crafted math algorithm
* that determines the contrast through comparing the different
* RGB values of two points of color, and the angle between them
* on the color wheel.
* The color wheel image only gets an approximate angle.
* with over 2 million combinations of the RGB values,
* there is no efficient and tangible way to have a visual selector
* that can pick a specific point.
* The system 'color picker' is accessed through input type=color
* To narrow down the specific color and RGB value.
* When the user uses the canvas radius arms to pick the approximate color,
* The system color picker will pop up and allow a more refined choice.
* This is not intended as a Proof of Concept, but to help people see what
* contrast is, how they can determine it by just referencing a color wheel,
* and to explain why it's important in accessibility.  Hopefully the user can
* have a little fun while they are experimenting.
*/

let COLOR1;
let COLOR2;
let RGB1;
let RGB2;
let RGBobj1;
let RGBobj2;
let RGB1_DIV;
let RGB2_DIV;

function set_DOM_COLORCALC(){
     COLOR1 = document.getElementById("hex_color1")
     COLOR2 = document.getElementById("hex_color2")
     RGB1 = COLOR1.value
     RGB2 = COLOR2.value
     RGBobj1 = convertHEX(RGB1)
     RGBobj2 = convertHEX(RGB2)
     RGB1_DIV = document.getElementById('rgb_value1')
     RGB2_DIV = document.getElementById('rgb_value2')
}

function set_RGB1(rgb1){
    RGB1 = rgb1
    let list1 = return_RGB1()
    let rgbstring1 = 'RGB(' + list1[0] + ' , ' + list1[1] + ' , ' + list1[2] + ')'
    RGB1_DIV.innerHTML = rgbstring1

}

function set_RGB2(rgb2){
    RGB2 = rgb2
    let list2 = return_RGB2()
    let rgbstring2 = 'RGB(' + list2[0] + ' , ' + list2[1] + ' , ' + list2[2] + ')'
    RGB2_DIV.innerHTML = rgbstring2
}

function get_RGB1(){
//retrieve the color selection when the user inputs a choice from system color picker.
      let value1 = COLOR1.value
      return value1
      }
function get_RGB2() {
      let value2 = COLOR2.value
      return value2

}

function pickers_listen() {

       COLOR1.addEventListener('input', function (event) {
               let newrgb = get_RGB1()
               set_RGB1(newrgb)
               let newobj = convertHEX(newrgb)
               RGBobj1 = newobj
               //testlog()
       })
       COLOR2.addEventListener('input', function(event) {
              let newrgb2 = get_RGB2()
              set_RGB2(newrgb2)
              let newobj2 = convertHEX(newrgb2)
              RGBobj2 = newobj2

              //testlog()
       })
}

function return_RGB1() {
  let rgblist = []
  if(RGBobj1) {


    let R = RGBobj1.r
    let G = RGBobj1.g
    let B = RGBobj1.b

    rgblist = [R, G, B]
  }
  //console.log('rgb ONE list: ', rgblist)
  return rgblist
}

function return_RGB2(){
  let rgblist = []
  if(RGBobj2){
    let R2 = RGBobj2.r
    let G2 = RGBobj2.g
    let B2 = RGBobj2.b
    rgblist = [R2, G2, B2]
  }
  return rgblist

}

function convertHEX(val){
  //stackoverflow: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  // Thanks Tim Down!


  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(val);
  try {
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
catch (error){
  console.log("converter has an error.", error)
}

}


function testlog(){
  console.log("---- TEST LOG -----")
  //console.log(`COLOR1 = ${COLOR1}`)
  //console.log(`COLOR2 = ${COLOR2}`)
  //console.log(`RGB1 = ${RGB1}`)
//  console.log(`RGB2 = ${RGB2}`)
  //console.log(`RGB1 object= ${RGBobj1}`)
  //console.log(`RGB2 object= ${RGBobj2}`)
  //   **   NOTE: IMPORTANT: LOGGING these values =>
  //        IF VALUES are returned as empty lists, the object is not reading
  //        These logs will respond on all color input and can lead to massive log entries
  //value1 = return_RGB1()
  //value2 = return_RGB2()
  //console.log(`RGB1 values = ${value1}`)
  //console.log(`RGB2 values = ${value2}`)
  console.log("----   END LOG ----")
}
window.addEventListener('load', (event)=> {
  set_DOM_COLORCALC();
  pickers_listen();

})
