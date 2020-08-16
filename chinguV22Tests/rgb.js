//javascript for color perspective functions

let RED = 123;
let GREEN = 123;
let BLUE = 123;
let REDRANGE;
let GREENRANGE;
let BLUERANGE;
let CURRENT;

function set_COLOR_Listeners(){
  console.log('color listeners set')
    REDRANGE= document.getElementById('red')
    GREENRANGE= document.getElementById('green')
    BLUERANGE= document.getElementById('blue')
    CURRENT = 'color'
}

function set_TEXT(){
  //console.log('setting text')
  let current = document.getElementById('current')
  let newtext = 'Current item: ' + 'TEXT'
  current.innerHTML = newtext
  CURRENT = 'color'
  //update_COLORS()

  }

function set_BACKGROUND(){
  //console.log('setting background')
  let current = document.getElementById('current')
  let newtext = 'Current item:  ' + 'BACKGROUND'
  current.innerHTML = newtext
  CURRENT = 'bk'
  //update_COLORS()
}

function log_change(val) {
  //console.log(val, ' --NEW VALUE')
}

function update_COLORS(){
  //console.log(RED, GREEN, BLUE)
  var newcolor = 'rgb(' + RED + ',' + GREEN + ',' + BLUE + ')'
  let element = document.getElementById('rgb_header')
  //console.log(CURRENT)
  if(CURRENT == 'color'){
     element.style.color = newcolor
   }
   if(CURRENT == 'bk'){
     element.style.background = newcolor
   }
}


function set_RED(val){

     RED = val
     console.log(RED)
     update_COLORS()
}

function set_BLUE(val){
     BLUE = val
     update_COLORS()
}

function set_GREEN(val){
     GREEN = val
     update_COLORS();
}


window.addEventListener('load', (event) => {

    set_COLOR_Listeners();
});
