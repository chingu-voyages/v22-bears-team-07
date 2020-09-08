/* Developed for Chingu Voyage 22, Team Bears 07
* Team memebers: Regina and Nellie
* A visual example of text, font contrast and typeface choice.
* The user can click the change_font, or the blur_font buttons
* and see how the text is visually changed by the text.
* The "monochrome" button will allow the article to be black and white.
* black and white is the ideal contrast, while not always fun to design with,
* it is possible to make something visually striking with black, white and an accent color.
* accent color choices can be anything if they are used not for displaying important information
* and are used for design styling only.
*/


//----- FONT CHANGE OBJECTS ----
let MONOX = {
    'state': 'monochrome',
    'family': 'monospace',
    'weight': "400",
    'background': 'white',
    'fontcolor': 'black',
    'textshadow': 'none',
    'fontsize': '1em',
}

let FANCYFONT = {
  'state': 'low',
  'family': "'Tangerine', cursive",
  'weight': '100',
  'background': 'lime',
  'fontcolor': 'green',
  'textshadow': '1px 1px 2px white',
  'fontsize': '2em',
}

//text-shadow: #ffe4d1 -1px 1px;
let NORMAL = {
   'state': 'normal',
   'family': "'Rokkitt', serif",
   'weight': "400",
   'background': "rgb(246 246 247)",
   'fontcolor': "black",
   'textshadow': "-1px 1px #ffe4d1",
   'fontsize': '1em',

}

//------ BLUR ------//


function blur(){
  let paragraph = document.getElementById('type_paragraph')
  let btn = document.getElementById('blur_font')
  if(paragraph.classList.contains('noblur')){
    paragraph.classList.remove('noblur')
    paragraph.classList.add('blur')
    btn.innerHTML = "remove blur"
  }
  else{
    paragraph.classList.remove('blur')
    paragraph.classList.add('noblur')
    btn.innerHTML = "blur"

  }

}

//---- ADD remove BLUR -----//

function listen_blur(){
  let blurbtn = document.getElementById('blur_font')
  blurbtn.addEventListener('click', blur)
}



//------- CHANGE THE FONT -------
function font_change(){

    let name = document.getElementById('change_font').value
    let article = document.getElementById('type_paragraph')
    //console.log(`font_change to ${name}`)
    let OBJ = null
    switch(name){
       case 'normal':
            OBJ = NORMAL
            break;
       case 'fancy':
            OBJ = FANCYFONT
            break;
       case 'mono':
            OBJ = MONOX;
            break;
       default:
            OBJ = MONOX;

    }

    if(OBJ){
      article.style.fontFamily = OBJ.family
      article.style.fontWeight = OBJ.weight
      article.style.backgroundColor = OBJ.background
      article.style.color = OBJ.fontcolor
      article.style.textShadow = OBJ.textshadow
      article.style.fontSize = OBJ.fontsize
      
    }
    else {
    console.log("name was not defined to choose a style")
    }
}


function font_listener() {
      let selector = document.getElementById('change_font')
      selector.addEventListener('change', function () {
        font_change()
      })

}

window.addEventListener('load', (event) => {
  font_listener()
  listen_blur()
  //testing()
})
